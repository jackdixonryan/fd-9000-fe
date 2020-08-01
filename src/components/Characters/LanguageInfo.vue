<template>
  <div class="language-info">
    <ul>
      <li v-for="language in languages">
        {{ language }}
        <!-- <span> TODO: Other NPCs / Players with this language (eg, who are you communicable with?)</span> -->
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ["languages"]
  }
</script>

<style lang="scss" scoped>
.language-info {
    margin-left: 0.8rem;
    border-left: 1px #E85A4F solid;
    padding: 1.5rem;
  }
</style>