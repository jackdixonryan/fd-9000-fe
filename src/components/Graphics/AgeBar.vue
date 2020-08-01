<template>
  <div class="progress-bar red">
    <span class="age" :style="`width:${percentage}%`"></span>        
  </div>
</template>

<script>
// scaffolds an age template for a fill bar
  export default {
    props: ["age", "race"],
    computed: {
      lifeBreakpoints() {
        switch(this.race) {
          case "Dwarf": 
            return {
              utterMax: 400,
              averageLifeExpectency: 350,
              adult: 50,
            };
          case "Elf": 
            return {
              utterMax: 1200,
              averageLifeExpectency: 750,
              adult: 100
            }
          case "High Elf":
            return {
              utterMax: 1200,
              averageLifeExpectency: 750,
              adult: 100,
            }
          case "Wood Elf": 
            return {
              utterMax: 1200,
              averageLifeExpectency: 750,
              adult: 100,
            }
          case "Halfling":
            return {
              utterMax: 200,
              averageLifeExpectency: 150,
              adult: 20
            }
          case "Human":
            return {
              utterMax: 120,
              averageLifeExpectency: 80,
              adult: 18
            }
          case "Dragonborn": 
            return {
              utterMax: 100,
              averageLifeExpectency: 80,
              adult: 15,
            }
          case "Gnome":
            return {
              utterMax: 500,
              averageLifeExpectency: 350,
              adult: 40,
            }
          case "Half-Elf":
            return {
              utterMax: 500,
              averageLifeExpectency: 200,
              adult: 20
            }
          case "Half-Orc": 
            return {
              utterMax: 90,
              averageLifeExpectency: 75,
              adult: 14
            }
          case "Tiefling": 
            return {
              utterMax: 130,
              averageLifeExpectency: 100,
              adult: 18
            }
        }
      },
      percentage() {
        return this.calculatePercentage(this.age)
      },
      averagePercentage() {
        const percent = this.lifeBreakpoints.averageLifeExpectency / this.lifeBreakpoints.utterMax;
        return Math.ceil(percent * 100);
      }, 
      adultPercentage() {
        const percent = this.lifeBreakpoints.adult / this.lifeBreakpoints.utterMax;
        return Math.ceil(percent * 100);
      }
    },
    methods: {
      calculatePercentage(age) {
        const breakpoints = this.lifeBreakpoints;
        const maximum = this.lifeBreakpoints.utterMax;
        const percentage = Math.ceil((age / maximum) * 100);
        return percentage;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .progress-bar {
    display: inline-block;
    height: 0.75rem;
    width: 30rem;
    position: relative;
    background :#D8C3A5;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px; 
    border-radius: 25px; 
    padding: 10px;
    box-shadow: inset 0 -1px -1px rgba(255,255,255,0.3);
  }

  .age {
      display: block;
      height: 100%;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      box-shadow: 
        inset 0 2px 9px  rgba(255,255,255,0.3),
        inset 0 -2px 6px rgba(0,0,0,0.4);
      position: relative;
      overflow: hidden;
      background-color: #E85A4F;
      background-image: linear-gradient(to right, #E98074, #E85A4F);
  }

  .average {
    position:relative;
    display: inline;
  }

</style>