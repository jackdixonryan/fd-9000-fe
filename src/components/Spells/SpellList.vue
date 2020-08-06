<template>
  <div v-if="spells" >
    <h1 class="pageTitle">List of Spells</h1>
    <div v-for="spell in spells" :key="spell.name">
      <spell-details :spell="spell"></spell-details>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import SpellDetails from "./SpellDetails";
  export default {
    components: {
      SpellDetails
    },
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
.pageTitle {
  padding: 1.5rem;
  color: #D68C7B;
  font-size: 2rem;
}
</style>