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
            <span>Languages: {{character.languages}}</span>
        </div>
        <div>
            <span> Spell Saves: {{character.spellcastingInfo.spellSaveDifficulties[0]}}, </span>
            <span> Spell Attack Bonus: {{character.spellcastingInfo.spellAttackBonuses[0]}}, </span>
            <span> Spellcasting Abilities: {{character.spellcastingInfo.spellcastingAbilities[0]}}</span>
        </div>
      </div>
      <div class="character-stats">
        <table>
                <tr>
                    <th>Name</th>
                    <th>ToHit</th>
                    <th>Damange</th>
                    <th>Notes</th>
                </tr>
                <tr v-for="spell in character.attacks">
                    <td>{{spell.name}}</td>
                    <td>{{spell.toHit}}</td>
                    <td>{{spell.damageString}}</td>
                    <td>{{spell.notes}}</td>
                </tr>
        </table>
      </div>
      <div class="character-stats">
        <table>
                <tr>
                    <th>Name</th>
                    <th>Range</th>
                    <th>Cmpnts</th>
                    <th>Source</th>
                    <th>Duration</th>
                </tr>
                <tr v-for="spell in character.spells">
                    <td>{{spell.name}}</td>
                    <td>{{spell.range}}</td>
                    <td>{{spell.components}}</td>
                    <td>{{spell.source}}</td>
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
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  border-bottom: 2px solid #ccc;
  padding: 20px;
}

.character-stats {
  flex-grow: 8;
  text-align: left;
  padding-left: 20px;
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
</style>