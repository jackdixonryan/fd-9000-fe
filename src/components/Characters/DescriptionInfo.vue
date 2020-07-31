<template>
  <div>
    <div class="characteristics">
      Age: {{ characteristics.age }}
      Height: {{ characteristics.height }}
      Weight: {{ characteristics.weight }}lbs
      Eyes: {{ characteristics.eyes }}
      Skin: {{ characteristics.skin }}
      Hair: {{ characteristics.hair }}
      Size: {{ characteristics.size }}
      Faith: {{ characteristics.faith }}
      Gender: {{ characteristics.gender }}
      Alignment: {{ characteristics.alignment }}
    </div>
    <div class="notes">
      Allies: {{ notes.allies }}
      Enemies: {{ notes.enemies }}
      Organizations: {{ notes.organizations }}
      Other Holdings: {{ notes.otherHoldings }}
      Other Notes: {{ notes.otherNotes }}
      Personal Possessions: {{ notes.personalPossessions }}
      <h1>
        <button class="expand-notes" v-if="notes.backstory">+</button>
        Backstory
      </h1>
      <div class="backstory" v-if="backstoryExpanded">
        {{ notes.backstory }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["charactestics", "notes"]
  }
</script>

<style lang="scss" scoped>

</style>