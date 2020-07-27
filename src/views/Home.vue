<template>
  <div class="home">
    <graph-client></graph-client>
  </div>
</template>

<script>
import GraphClient from "../components/GraphClient";
export default {
  name: 'Home',
  components: {
    GraphClient,
  }
}
</script>
