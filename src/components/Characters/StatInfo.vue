<template>
  <div class="stats-info">
    <div class="stat" v-for="stat in stats">
      <h3 class="subtitle">{{ stat.name }}</h3>
      <h1 class="modifier">{{ stat.modifier }}</h1>
      <h3 class="score">{{ stat.score }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["stats"]
  }
</script>

<style lang="scss" scoped>
.stats-info {
    margin-left: 0.8rem;
    border-left: 1px #E85A4F solid;
    padding: 1.5rem;
  }

  .stat {
    line-height: 2.5rem;
    margin-right: 1.5rem;
    padding: 1rem;
    width: 7rem;
    height: 7rem;
    background-color: #E85A4F;
    color: #EAE7DC;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    .subtitle {
      font-size: 1rem;
    }
    .modifier {
      font-size: 3rem;
    }
    .score {
      font-size: 1rem;
    }
  }
</style>