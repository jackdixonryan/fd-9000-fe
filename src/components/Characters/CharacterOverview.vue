<template>
  <div class="character-overview">
    <div class="header-panel">
      <div class="character-name-div">
        <h1 class="character-name">
          <span>
            <button class="expand-button">+</button>  
          </span>
          {{ character.name }}
        </h1>
      </div>
      <div class="character-class">
        {{ character.race }} | Level {{ character.classes[0].level }} {{ character.classes[0].name }}
      </div>
      <div class="armor-class">
        {{ character.armorClass }}
      </div>
      <div class="passive-perception">
        {{ character.passivePerception }}
      </div>
      <div class="hit-points">
        {{ character.hitPointMax }}
      </div>
      <div class="character-speed">
        <span v-for="speed in character.speeds" :key="speed.name + character.name">
          <!-- only render speeds the character has -->
          <span v-if="speed.distance > 0">
            {{ speed.name }} : {{ speed.distance }}ft
          </span>
        </span>
      </div>
      <button class="action-button">
        <i class="fas fa-magic"></i>
      </button>
      <button class="action-button">
        <i class="fas fa-fist-raised"></i>
      </button>
      <button class="action-button">
        <i class="fas fa-dice-d20"></i>
      </button>
      <button class="action-button">
        <i class="fas fa-search"></i>
      </button>
      <input type="text" :name="character.name + '-search'" :id="character.name + '-search'" placeholder="search" class="text-input" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ["character"]
  }
</script>

<style lang="scss" scoped>
  .character-overview {
    width: 100%;
    font-family: "Fira Sans", sans-serif;
  }

  .character-name {
    font-size: 1.5rem;
  }

  .coin {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    display: inline-block;
  }

  .gold {
    background-color: gold;
  }

  .silver {
    background-color: silver;
  }

  .copper {
    background-color: burlywood;
  }

  .expand-button {
    font-family: "Fira Sans", sans-serif;
    font-size: 1.5rem;
    background: none;
    border: none;
    outline: none;
    color: #E85A4F;
    cursor: pointer;
  }

  .character-name-div {
    display: inline-block;
  }

  .character-class {
    display: inline-block;
    margin-left: 2rem;
  }

  .armor-class {
    display: inline-block;
    margin-left: 2rem;
    background-color: #D8C3A5; 
    padding: 1rem;
    border-radius: 50%;
    font-size: 1rem;
  }

  .passive-perception {
    display: inline-block;
    margin-left: 2rem;
    background-color: #D8C3A5; 
    padding: 1rem;
    border-radius: 50%;
    font-size: 1rem;
  }

  .hit-points {
    display: inline-block;
    margin-left: 2rem;
    background-color: #E85A4F; 
    padding: 1rem;
    border-radius: 50%;
    font-size: 1rem;
    color: #EAE7DC;
  }

  .character-speed {
    display: inline-block;
    margin-left: 2rem;
  }

  .action-button {
    color: #E85A4F;
    background-color: #EAE7DC;
    padding: 1rem;
    display: inline-block;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 2rem;
  }

  .text-input {
    background: none;
    margin: none;
    border: none;
    font-size: 1rem;
    color: #E85A4F;
    border-bottom: 1px #E85A4F solid;
    outline: none;
    padding: 0.25rem;
    &:focus {
      padding: 0.5rem;
    }
  }

</style>