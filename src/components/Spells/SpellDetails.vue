<template>
    <div v-if="spell">
        <div>
          <a class="title" :href="`/spells?spell=${spell.name.toLowerCase().split(' ').join('-')}`">
            <i>{{spell.name}}</i>
          </a>
          <img class="concentration" v-if="spell.concentration == true" src="/img/icons/concentration.png" alt="Concentration Symbol (C)" />
        </div>
        <div v-if="spell.school">
          <a :href="`/spells?school=${spell.school}`">
            <img class="icon" :src="'/img/icons/school/' + spell.school + '.png'" :alt="spell.school + ' Symbol'" />
          </a> 
          <a :href="`/spells?school=${spell.school}&level=${spell.level}`">
            <span class="field"> {{ spell.school }} {{spell.level}} </span>
          </a>
        </div>
        <div class="spell-stats" v-if="spell.desc">
            <p class="field"> {{ spell.desc }} </p>
        </div>
        <div v-if="spell.classes">
          <a v-for="dndClass in spell.classes" :href="`/spells?class=${dndClass}`">
            <img class="icon" :src="'/img/icons/class/' + dndClass + '.png'" :alt="dndClass + ' Symbol'" />
          </a>
        </div>
        <hr class="divider">
    </div>
</template>

<script>
import gql from 'graphql-tag';
  export default {
    props: ["spell"],
    data() {
      return {
        spells: null,
        nameFromUrl: this.$route.query.spell
      }
    },
    apollo: {
      // Query with parameters
      spells: gql`query {
        spells {
          slug
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
      }`
    }
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