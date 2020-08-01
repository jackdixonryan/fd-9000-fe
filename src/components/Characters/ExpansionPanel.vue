<template>
  <div class="expansion-panel-main">
    <ul class="expansion-options">
      <li class="option">
        <span>
          <button class="expand-button" @click="triggerExpand('attacks')">+</button>
        </span>
        Attacks
        <attack-info v-if="expandedItems.includes('attacks')" :attacks="character.attacks"></attack-info>
      </li>
      <li class="option">
        <span><button class="expand-button" @click="triggerExpand('skills')">+</button></span>
        Skills
        <skill-info v-if="expandedItems.includes('skills')" :skills="character.skills"></skill-info>
      </li>
      <li class="option">
        <span><button class="expand-button" @click="triggerExpand('spells')">+</button></span>
        Spells
        <spell-info v-if="expandedItems.includes('spells')" :spells="character.spells"></spell-info>
      </li>
      <li class="option">
        <span><button class="expand-button" @click="triggerExpand('stats')">+</button></span>
        Stats
        <stat-info v-if="expandedItems.includes('stats')" :stats="character.stats"></stat-info>
      </li>
      <li class="option">
        <span><button class="expand-button" @click="triggerExpand('languages')">+</button></span>  
        Languages
        <language-info v-if="expandedItems.includes('languages')" :languages="character.languages"></language-info>
      </li>
      <li class="option">
        <span><button class="expand-button" @click="triggerExpand('description')">+</button></span>
        Description
        <description-info v-if="expandedItems.includes('description')" :characteristics="character.characteristics" :notes="character.notes" :race="character.race"></description-info>
      </li>
    </ul>
  </div>
</template>

<script>
  import AttackInfo from "./AttackInfo";
  import ActionInfo from "./ActionInfo";
  import SkillInfo from "./SkillInfo";
  import StatInfo from "./StatInfo";
  import SpellInfo from "./SpellInfo";
  import LanguageInfo from "./LanguageInfo";
  import DescriptionInfo from "./DescriptionInfo";
  import OtherInfo from "./OtherInfo";
  export default {
    props: ["character"],
    components: {
      AttackInfo,
      ActionInfo, 
      SkillInfo,
      StatInfo,
      SpellInfo,
      LanguageInfo,
      DescriptionInfo,
      OtherInfo
    },
    data() {
      return {
        expandedItems: [],
      }
    },
    methods: {
      triggerExpand(item) {
        console.log(this.expandedItems.includes(item))
        this.expandedItems.includes(item) ? this.removeItem(item) : this.expandedItems.push(item);
      },
      removeItem(item) {
        const index = this.expandedItems.indexOf(item);
        this.expandedItems.splice(index, 1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .expansion-panel-main {
    margin-left: 1rem;
    border-left: 1px #E85A4F solid;
    padding: 1.5rem;
  }

  .option {
    line-height: 2rem;
  }

  .expand-button {
    font-family: "Fira Sans", sans-serif;
    background: none;
    font-size: 1rem;
    border: none;
    outline: none;
    color: #E85A4F;
    cursor: pointer;
  }
</style>