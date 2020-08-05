<template>
  <div>
    <div>
        <h1>Monsters of Phandalin</h1>
        <div v-for="index in 25" :key="index">
            <h2>{{items[index-1]}}</h2>
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img :src="'/img/monsters/' + ((index*2)-1) + '.png'" alt="Monster Card"  style="width:100%;height:100%"/>
                </div>
                <div class="flip-box-back">
                  <img :src="'/img/monsters/' + ((index*2)) + '.png'" alt="Monster Card"  style="width:100%;height:100%"/>
                </div>
              </div>
            </div>
            <hr>
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

/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-box {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #D68C7B;
  width: 700px;
  height: 466px;
  border: 15px solid #D68C7B;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-box-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-box-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

hr {
  width: 90%;
  margin-top: 3rem;
  height: 1px;
  background-color:#5A393E;
  border: none;
}
</style>