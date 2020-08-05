<template>
  <div>
    <div v-if="showIdros">
        <h1 class="title">
            Idros
            <button class="expand-button" @click="triggerPhandalin">View Phandalin Map</button>  
        </h1>
        <img class="map" src="/img/Idros.jpg" alt="Idros Map" />
    </div>
    <div v-if="showPhandalin">
        <h1 class="title">
            Phandalin
            <button class="expand-button" @click="triggerPhandalin">View Idros Map</button>  
        </h1>
        <img class="map" src="/img/Phandalin.jpg" alt="Phandalin Map" />
    </div>
  </div>
</template>


<script>
  import "animate.css";
  import Fuse from "fuse.js";
  import ExpansionPanel from "../components/Characters/ExpansionPanel";
  export default {
    props: ["character"],
    components: {
      ExpansionPanel
    },
    data() {
      return {
        showPhandalin: false,
        showIdros: true,
        characterSearchQuery: "",
        autoOpened: "",
        queryResults: null,
      }
    },
    methods: {
      triggerPhandalin() {
        this.showPhandalin ? this.showPhandalin = false : this.showPhandalin = true;
        this.showIdros ? this.showIdros = false : this.showIdros = true;
      },
    }
  }
</script>

<style scoped>
.title {
  padding: 1.5rem;
  color: #D68C7B;
  font-size: 2rem;
}

.map {
  display: inline-block;
  width:99%;
  height:99%;
  padding: .5rem;
}

.expand-button {
    font-family: "Fira Sans", sans-serif;
    font-size: 1rem;
    background: none;
    border-style: solid;
    border-radius: 5px;
    border-color: #5A393E;
    color: #5A393E;
    cursor: pointer;
}
  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .expand-button:hover {
  background-color: #ccc;
}
</style>