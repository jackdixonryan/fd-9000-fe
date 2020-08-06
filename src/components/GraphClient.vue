<template>
  <div v-if="nameFromUrl">
    <individual-spell></individual-spell>
  </div>
  <div v-else-if="classFromUrl">
    <spells-by-class></spells-by-class>
  </div>
  <div v-else-if="levelFromUrl">
    <spell-by-school-and-level></spell-by-school-and-level>
  </div>
  <div v-else-if="schoolFromUrl">
    <spells-by-school></spells-by-school>
  </div>
  <div v-else>
    <spell-list></spell-list>
  </div>
</template>

<script>
import SpellList from "../components/Spells/SpellList";
import IndividualSpell from "../components/Spells/IndividualSpell";
import SpellsByClass from "../components/Spells/SpellsByClass";
import SpellsBySchool from "../components/Spells/SpellsBySchool";
import SpellBySchoolAndLevel from "../components/Spells/SpellBySchoolAndLevel";
import gql from 'graphql-tag';
  export default {
    components: {
      SpellList,
      IndividualSpell,
      SpellsByClass,
      SpellsBySchool,
      SpellBySchoolAndLevel
    },
    data() {
      console.log(this.$route.query.class)
      return {
        spells: null,
        spell: null,
        nameFromUrl: this.$route.query.spell,
        classFromUrl: this.$route.query.class,
        schoolFromUrl: this.$route.query.school,
        levelFromUrl: this.$route.query.level
      }
    }
  }
</script>