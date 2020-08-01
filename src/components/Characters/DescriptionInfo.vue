<template>
  <div>
    <div class="characteristics">
      <div v-if="characteristics.age" class="age-info">
        <h4 style="margin-right:2rem;">{{ characteristics.age }} years old</h4>
        <age-bar :race="race" :age="characteristics.age" />
      </div>
      <div class="info" v-if="characteristics.height || characteristics.weight">
        <h4 v-if="characteristics.height">
          Height: {{ characteristics.height }}
        </h4>
        <h4 v-if="characteristics.weight">
          Weight: {{ characteristics.weight }} lbs.
        </h4>
      </div>
      <div class="appearance">
        <h4 v-if="characteristics.eyes">Eyes: {{ characteristics.eyes}}</h4>
        <h4 v-if="characteristics.hair">Hair: {{ characteristics.hair }}</h4>
        <h4 v-if="characteristics.skin"> Skin: {{ characteristics.skin }}</h4>
        <h4 v-if="characteristics.size">Size: {{ characteristics.size }}</h4>
        <h4 v-if="characteristics.gender">Gender: {{ characteristics.gender }}</h4>
      </div>
      <div class="philosopy">
        <h4 v-if="characteristics.faith">Religion: {{ characteristics.faith }}</h4>
        <h4 v-if="characteristics.alignment">Alignment: {{ characteristics.alignment }}</h4>
      </div>
    </div>
    <div class="notes">
      <h4 v-if="notes.allies">Allies: {{ notes.allies }}</h4>
      <h4 v-if="notes.enemies">Enemies: {{ notes.enemies }}</h4>
      <h4 v-if="notes.organizations">Organizations: {{ notes.organizations }}</h4>
      <h4 v-if="notes.otherHoldings">Other Holdings: {{ notes.otherHoldings }}</h4>
      <h4 v-if="notes.otherNotes">Other Notes: {{ notes.otherNotes }}</h4>
      <h4 v-if="notes.personalPossessions">Personal Possessions: {{ notes.personalPossessions }}</h4>
      <h1 v-if="notes.backstory">
        <button class="expand-notes" @click="expandBackstory">+</button>
        Backstory
      </h1>
      <div class="backstory" v-if="backstoryExpanded">
        {{ notes.backstory }}
      </div>
    </div>
  </div>
</template>

<script>
  import AgeBar from "../Graphics/AgeBar";
  export default {
    props: ["characteristics", "notes", "race"],
    components: {
      AgeBar
    },
    data() {
      return {
        backstoryExpanded: false
      }
    },
    methods: {
      expandBackstory() {
        this.backstoryExpanded === true ? this.backstoryExpanded = false : this.backstoryExpanded = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .characteristics, .notes{
    margin-left: 0.8rem;
    border-left: 1px #E85A4F solid;
    padding: 1.5rem;
  }

  .age-info {
    h4 {
      font-size: 1rem;
      display: inline;
    }
  }

  .expand-notes{
    h4 {
      font-size: 1rem;
    }
    color: #E85A4F;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .backstory {
    font-size: 0.75rem;
    margin-left: 2rem;
  }
</style>