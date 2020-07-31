<template>
  <div class="skill-info">
    <div class="skill" v-for="skill in skills">
      <div class="skill-amount">
        {{ skill.modifier }}
      </div>
      {{ skill.name }}<span class="subtitle">
        {{ skill.statKey }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["skills"],
  }
</script>

<style lang="scss" scoped>
  .skill-info {
    margin-left: 0.8rem;
    border-left: 1px #E85A4F solid;
    padding: 1.5rem;
    display: flex;
    flex-wrap: wrap;
  }

  .skill {
    flex: 1 0 15%;
  }

  .skill-amount {
    display: inline-block;
    padding: 0.2rem;
    border: 1px #E85A4F solid;
    border-radius: 50%;
    line-height: 1.5rem;
    width: 1.5rem;
    text-align: center;
  }
  
  .subtitle {
    font-size: 0.5rem;
  }
</style>