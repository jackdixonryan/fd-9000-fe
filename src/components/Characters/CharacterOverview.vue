<template>
  <div class="character-overview">
    <div class="header-panel">
      <div class="character-name-div">
        <h1 class="character-name">
          <span>
            <button class="expand-button" @click="triggerExpansion">+</button>  
          </span>
          {{ character.name }}
        </h1>
      </div>
      <div class="character-class">
        {{ character.race }} | Level {{ character.classes[0].level }} {{ character.classes[0].name }}
      </div>
      <div class="main-stats">
        <div class="armor-class">
          AC
          {{ character.armorClass }}
        </div>
        <div class="passive-perception">
          PP
          {{ character.passivePerception }}
        </div>
        <div class="hit-points">
          HP
          {{ character.hitPointMax }}
        </div>
      </div>
      <div class="character-speed">
        <span v-for="speed in character.speeds" :key="speed.name + character.name">
          <!-- only render speeds the character has -->
          <span v-if="speed.distance > 0">
            {{ speed.name }} : {{ speed.distance }}ft
          </span>
        </span>
      </div>
      <div class="action-buttons">
        <button class="action-button" @click="openSpells">
          <i class="fas fa-magic"></i>
        </button>
        <button class="action-button" @click="openActions">
          <i class="fas fa-fist-raised"></i>
        </button>
        <button class="action-button" @click="openSkills">
          <i class="fas fa-dice-d20"></i>
        </button>
      </div>
      <div class="character-search">
        <button class="action-button" @click="searchKeys">
          <i class="fas fa-search"></i>
        </button>
        <input type="text" :name="character.name + '-search'" :id="character.name + '-search'" placeholder="search" class="text-input" v-model="characterSearchQuery" @keyup.enter="searchKeys" />
      </div>
    </div>
    <expansion-panel :character="character" v-if="expanded" :autoOpened="autoOpened"></expansion-panel>
    <div class="searchResults link animate__animated animate__fadeInUp" v-if="queryResults">
      <h3 class="search-header">Search: {{ characterSearchQuery }}</h3>
      <button class="close-query" @click="closeSearch">X</button>
      <h3 class="name">{{ character.name }}</h3>
      <hr />
      <div v-if="queryResults.length > 0">
        <h1 class="query">Match: {{queryResults[0].prop}}<span>{{ 100 - Math.floor(queryResults[0].score * 100) }}%</span></h1>
        <p>{{ queryResults[0].value }}</p>
      </div>
      <div v-else>
        <p>Sorry! We couldn't find what you were looking for.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import "animate.css";
  import Fuse from "fuse.js";
  import ExpansionPanel from "./ExpansionPanel";
  export default {
    props: ["character"],
    components: {
      ExpansionPanel
    },
    data() {
      return {
        expanded: false,
        characterSearchQuery: "",
        autoOpened: "",
        queryResults: null,
      }
    },
    methods: {
      triggerExpansion() {
        this.expanded ? this.expanded = false : this.expanded = true;
      },
      searchKeys() {
        const keys = Object.keys(this.character);
        const options = { includeScore: true }
        const fuse = new Fuse(keys, options);
        const result = fuse.search(this.characterSearchQuery);

        // if it's a reasonable match...
        if (result[0] && result[0].score < 0.5) {
          this.queryResults = [{
            prop: result[0].item,
            score: result[0].score,
            value: this.character[result[0].item]
          }]
        } else {
          this.queryResults = [];
        }
      },
      openSpells() {
        this.expanded = true;
        this.autoOpened = "spells"
      },
      openActions() {
        this.expanded = true;
        this.autoOpened = "attacks"
      },
      openSkills() {
        this.expanded = true;
        this.autoOpened = "skills"
      },
      closeSearch() {
        this.queryResults = null;
        this.characterSearchQuery = "";
      }
    }
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

  .header-panel {
    display: flex;
    align-items: center;
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
    flex: 1.5;
  }

  .character-class {
    flex: 2;
  }

  .main-stats {
    flex: 1.5;
  }

  .armor-class {
    display: inline-block;
    background-color: #D8C3A5; 
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1rem;
    line-height: 2.3rem;
  }

  .passive-perception {
    display: inline-block;
    background-color: #D8C3A5; 
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1rem;
    line-height: 2.3rem;
  }

  .hit-points {
    display: inline-block;
    background-color: #E85A4F; 
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1rem;
    color: #EAE7DC;
    line-height: 2.3rem;
  }

  .character-speed {
    flex: 1;
    display: inline-block;
    margin-left: 2rem;
  }

  .action-buttons {
    flex: 1.5;
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
  }

  .character-search {
    flex: 2.5;
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

  .search-header {
    font-size: 1.25rem;
    color: #E85A4F;
    display: inline;
  }

  .name {
    font-size: 0.75rem;
    color: #E85A4F;
  }

  .close-query {
    font-size: 1rem;
    background: none;
    border: none;
    outline: none; 
    color: #E85A4F;
    margin-left: 4rem;
    cursor: pointer;
    border-radius: 50%;
    padding: 0.5rem;
    width: 2.25rem;
    &:hover {
      background: #D8C3A5; 
    }
  }

  .searchResults {
    padding: 1.5rem;
    border-radius: 0.25rem;
    box-shadow: 1px 1px 1px 1px;
    width: 15rem;
    height: 15rem;
    position: absolute;
    background: #EAE7DC;
    right: 1rem;
    bottom: 1rem;
    overflow: scroll;
  }
  
  .query {
    font-size: 0.75rem;
    span {
      font-size: 0.5rem;
      margin-left: 0.25rem;
    }
    color: #E85A4F;
    margin-bottom: 0.5rem;
  }

</style>