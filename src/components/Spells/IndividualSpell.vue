<template>
  <div v-if="spell">
    <div>
        <h1 class="title">
          {{ spell.name }}
          <img class="concentration" v-if="spell.concentration == true" src="/img/icons/concentration.png" alt="Concentration Symbol (C)" />
        </h1>
    </div>

    <div class="spell-stats">
      <div v-if="spell.desc">
        <h2 class="header">Description</h2>
        <p class="field"> {{ spell.desc }} </p>
      </div>
      
      <div v-if="spell.higher_level">
        <h2 class="header">Higher Level</h2>
        <p class="field"> {{ spell.higher_level }} </p>
      </div>
      
      <div v-if="spell.range">
        <h2 class="header">Range</h2>
        <p class="field"> {{ spell.range }} </p>
      </div>
      
      <div v-if="spell.components">
        <h2 class="header">Components</h2>
        <p class="field"> {{ spell.components }} </p>
      </div>
      
      <div v-if="spell.material">
        <h2 class="header">Material</h2>
        <p class="field"> {{ spell.material }} </p>
      </div>
      
      <div v-if="spell.duration">
        <h2 class="header">Duration</h2>
        <p class="field"> {{ spell.duration }} </p>
      </div>
      
      <div v-if="spell.school">
        <h2 class="header">School and Level</h2>
        <a :href="`/spells?school=${spell.school}`">
          <img class="icon" :src="'/img/icons/school/' + spell.school + '.png'" :alt="spell.school + ' Symbol'" />
        </a> 
        <a :href="`/spells?school=${spell.school}&level=${spell.level}`">
          <span class="field"> {{ spell.school }} {{spell.level}} </span>
        </a>
      </div>

      <div v-if="spell.classes">
        <h2 class="header">Classes</h2>
          <div v-if="spell.classes">
            <a v-for="dndClass in spell.classes" :href="`/spells?class=${dndClass}`">
              <img class="icon" :src="'/img/icons/class/' + dndClass + '.png'" :alt="dndClass + ' Symbol'" />
            </a>
          </div>
      </div>
      
      <div v-if="spell.casting_time">
        <h2 class="header">Casting Time</h2>
        <p class="field"> {{ spell.casting_time }} </p>
      </div>
    </div>
  </div>

</template>

<script>
import gql from 'graphql-tag';
  export default {
    data() {
      return {
        spell: null,
        nameFromUrl: this.$route.query.spell
      }
    },
    apollo: {
      // Query with parameters
      spell: {
        // gql query
        query: gql`query GetSpell($spellName: String!) {
          spell(slug: $spellName)
          {
            slug
            id
            name
            desc
            higher_level
            page
            range
            components
            material
            ritual
            duration
            concentration
            casting_time
            level
            school
            classes
            archetype
            circles
          }
        }`,
        // Static parameters
        variables() {
          return {
            spellName: this.nameFromUrl,
          }
        },
      }
    },
  }
</script>

<style scoped>

.spell-stats {
  flex-grow: 8;
  text-align: left;
  padding-left: 20px;
}

.spell-stats .name {
  font-size: 30px;
}

.title {
  padding: 1.5rem;
  color: #5A393E;
  font-size: 2rem;
}

.pageTitle {
  padding: 1.5rem;
  color: #D68C7B;
  font-size: 2rem;
}

.concentration {
  display: inline-block;
  max-width:1.5rem;
  max-height:1.5rem;
  width: auto;
  height: auto;
}

.icon {
  display: inline-block;
  max-width:3rem;
  max-height:3rem;
  width: auto;
  height: auto;
  padding: .5rem;
}

.school {
  display: inline-block;
  text-align: right;
  max-width:3rem;
  max-height:3rem;
  width: auto;
  height: auto;
  padding: .5rem;
}

.header {
  padding: 0.25rem;
  color: #D68C7B;
  font-size: 1.25rem;
}

.field {
  padding: 0.5rem;
  font-size: 1rem;
  color: #5A393E;
}

.divider {
  width: 90%;
  margin-top: 3rem;
  height: 1px;
  background-color:#5A393E;
  border: none;
}
</style>