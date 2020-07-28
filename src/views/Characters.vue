<template>
  <div>
    <h1>Player Characters</h1>
    <div v-for="character in characters" :key="character.name" class="character-data">
    <div class="character-stats">
        <div>
          <span>{{character.race}}, {{character.classes[0].name}}</span>
        </div>
        <div>
          <span class="name">{{character.name}}</span>
        </div>
        <div class="character-armor-class">
            <span>AC: {{character.armorClass}} PP: {{character.passivePerception}} HP: {{character.hitPointMax}}</span>
        </div>
        <div>
          <span class="money"> Copper: {{character.currencies["cp"]}}</span>
          <span class="money">  Silver: {{character.currencies["sp"]}}</span>
          <span class="money">  Gold: {{character.currencies["gp"]}}</span>
        </div>
        <div class="money">
            <span>Language: </span>
            <span v-for="language in character.languages">{{language}}, </span>
        </div>
        <div>
            <span v-if="character.spellcastingInfo.spellSaveDifficulties[0]"> Spell Saves: {{character.spellcastingInfo.spellSaveDifficulties[0]}}</span>
        </div>
        <div>
            <span v-if="character.spellcastingInfo.spellAttackBonuses[0]"> Spell Attack Bonus: {{character.spellcastingInfo.spellAttackBonuses[0]}}</span>
        </div>
        <div>
            <span v-if="character.spellcastingInfo.spellcastingAbilities[0]"> Spellcasting Abilities: {{character.spellcastingInfo.spellcastingAbilities[0]}}</span>
        </div>
        <div>
            <span>Notes</span>
            <ul>
                <li v-if="character.notes.allies">Allies: {{character.notes.allies}}</li>
                <li v-if="character.notes.backstory">Backstory: {{character.notes.backstory}}</li>
                <li v-if="character.notes.enemies">Enemies: {{character.notes.enemies}}</li>
                <li v-if="character.notes.organizations">Organizations: {{character.notes.organizations}}</li>
                <li v-if="character.notes.otherNotes">Other notes: {{character.notes.otherNotes}}</li>
                <li v-if="character.notes.otherHoldings">Other holdings: {{character.notes.otherHoldings}}</li>
                <li v-if="character.notes.personalPossessions">Personal possessions: {{character.notes.personalPossessions}}</li>
            </ul>
        </div>
        <div>
            <span>Characteristics</span>
            <ul>
                <li v-if="character.characteristics.age">Age: {{character.characteristics.age}}</li>
                <li v-if="character.characteristics.height">Height: {{character.characteristics.height}}</li>
                <li v-if="character.characteristics.weight">Weight: {{character.characteristics.weight}}</li>
                <li v-if="character.characteristics.eyes">Eyes: {{character.characteristics.eyes}}</li>
                <li v-if="character.characteristics.skin">Skin: {{character.characteristics.skin}}</li>
                <li v-if="character.characteristics.hair">Hair: {{character.characteristics.hair}}</li>
                <li v-if="character.characteristics.size">Size: {{character.characteristics.size}}</li>
                <li v-if="character.characteristics.faith">Faith: {{character.characteristics.faith}}</li>
                <li v-if="character.characteristics.gender">Gender: {{character.characteristics.gender}}</li>
                <li v-if="character.characteristics.alignment">Alignment: {{character.characteristics.alignment}}</li>
            </ul>
        </div>
      </div>
      <div class="character-stats">
        <table>
                <tr>
                    <th>Name</th>
                    <th>ToHit</th>
                    <th>Damage</th>
                    <th>Notes</th>
                </tr>
                <tr v-for="attack in character.attacks">
                    <td>{{attack.name}}</td>
                    <td>{{attack.toHit}}</td>
                    <td>{{attack.damageString}}</td>
                    <td>{{attack.notes}}</td>
                </tr>
        </table>
      </div>
      <div class="character-stats">
        <table>
                <tr>
                    <th>Name</th>
                    <th>Range</th>
                    <th>Cmpnts</th>
                    <th>Level</th>
                    <th>Duration</th>
                </tr>
                <tr v-for="spell in character.spells">
                    <td>{{spell.name}}</td>
                    <td>{{spell.range}}</td>
                    <td>{{spell.components}}</td>
                    <td>{{spell.level}}</td>
                    <td>{{spell.duration}}</td>
                </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Character",
  data() {
    return {
      characters: []
    };
  },
  created() {
    fetch("list.json")
        .then(response => response.json())
        .then(data => (this.characters = data));
  }
};
</script>



<style scoped>

.character-data {
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  border-bottom: 2px solid #ccc;
  padding: 20px;
}

.character-stats {
  flex-grow: 8;
  text-align: left;
  padding-left: 20px;
  max-width: 30%;
}

.character-stats .name {
  font-size: 30px;
}

.character-stats .money {
  font-size: 15px;
}

.character-armor-class {
  flex-grow: 1;
  font-size: 25px;
  margin-top: 10px;
}

img {
  width: 70px;
}

h1 {
    padding:10px;
    background-color: #1aa832;
    color: white;
    border: 1px solid #ccc;
    font-size: 40px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-size: 12px;
}

th {
    font-weight: bold;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

ul {
  margin-left: 20px;
}

/* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .collapsible:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>