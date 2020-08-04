<template>
  <div>
    <div>
        <h1>Monsters of Phandalin</h1>
        <div v-for="index in 25" :key="index">
            <h2>{{items[index-1]}}</h2>
            <div class="row">
              <div class="column">
              <img :src="'/img/monsters/' + ((index*2)-1) + '.png'" alt="Monster Card" style="width:100%"/>
              </div>
              <div class="column">
              <img :src="'/img/monsters/' + (index*2) + '.png'" alt="Monster Card" style="width:100%"/>
              </div>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: 
        [
          "Ogre", 
          "Orc",
          "Owlbear",
          "Sildar Hallwinter (NOT A MONSTER)",
          "Skeleton",
          "Spectator",
          "Redbrand Ruffian",
          "Stirge",
          "Twig Blight",
          "Wolf",
          "Young Green Dragon",
          "Zombie",
          "Bugbear",
          "Goblin",
          "Nothic",
          "Evil Mage",
          "Commoner",
          "Cultist",
          "Ghoul",
          "Giant Spider",
          "Doppleganger",
          "Flameskull",
          "Mormusk the Wraith",
          "Nezznar the Black Spider",
          "Ochre Jelly",
        ]
      }
    },
  }
</script>

<style scoped>
h1 {
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  color: #D68C7B;
  font-size: 2rem;
}

h2 {
  padding-left: 2.0rem;
  padding-bottom: 1.0rem;
  padding-top: 1.0rem;
  color: #5A393E;
  font-size: 1.5rem;
}

p {
  padding: .5rem;
  padding-left: 3.0rem;
  color: #5A393E;
  font-size: 1rem;
}

img {
  display: inline-block;
  width:50%;
  height:50%;
  padding: .5rem;
}

/* Three image containers (use 25% for four, and 50% for two, etc) */
.column {
  float: left;
  width: 49%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>