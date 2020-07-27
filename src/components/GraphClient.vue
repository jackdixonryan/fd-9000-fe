<template>
  <div class="splash">
    <div v-if="spells">
      <div class="spell-box" v-for="spell in spells" :key="spell.slug">
        <div class="spell-header">
          <h1 class="spell-name">{{ spell.name }}</h1>
        </div>
        <div class="spell-body">
          <p>{{ formatDescription(spell.desc) }}</p>
        </div>
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
        spells: null,
      }
    },
    apollo: {
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
    },
    methods: {
      formatDescription(description) {
        try {
        console.log("yeah")
        const returnArray = [];
        const wordForWord = description.split(" ");
        const descriptionLength = wordForWord.length;
        for (let i; i < descriptionLength; i++) {
          const word = wordForWord[i];
          console.log(word.charAt(0))
            if (word.charAt(0) === "*") {
              const noFormatting = word.split("**");
              const wordWithoutFormatting = noFormatting[1];
              returnArray.push(`<b>${wordWithoutFormatting}</b>`)
            } else {
              returnArray.push(word);
            }
        }
        return returnArray.join(" ");
        } catch(error) {
          console.log(error);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .spell-box {
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #EDF5E1;
    p {
      font-family: "Fira Sans"
    }
  }

  .spell-name {
    font-size: 2rem;
    font-family: "Fira Sans"
  }

  .splash {
    background-color: #5CDB95;
    height: 100%;
    width: 100%;
  }
</style>