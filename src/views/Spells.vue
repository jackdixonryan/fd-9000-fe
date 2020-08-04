<template>
  <div class="spells">
    <graph-client></graph-client>
  </div>
</template>

<script>
import GraphClient from "../components/GraphClient";
export default {
  name: 'spells',
  components: {
    GraphClient,
  }
}
</script>