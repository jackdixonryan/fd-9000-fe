<template>
  <div class="home">
    <div id="main-display">
      <div id="logo" class="content-area">
        <!-- temporary -->
        <div id="logo-circle" class="animate__animated animate__flipInX">
          <h1 id="logo-content">
            FD9K
          </h1>
        </div>
      </div>
      <div id="links" class="content-area">
        <div id="link-list">
          <router-link to="/characters" class="link animate__animated animate__flipInX" style="animation-delay:0.5s;">
            <span>&rarr;</span>
            Characters
          </router-link>
          <router-link to="/monsters" class="link animate__animated animate__flipInX" style="animation-delay:1s;">
            <span>&rarr;</span>
            Monsters
          </router-link>
          <router-link to="/notes" class="link animate__animated animate__flipInX" style="animation-delay:1.5s;">
            <span>&rarr;</span>
            Notes
          </router-link>
          <router-link to="/story" class="link animate__animated animate__flipInX" style="animation-delay:2s;">
            <span>&rarr;</span>
            Story
          </router-link>
          <router-link to="/map" class="link animate__animated animate__flipInX" style="animation-delay:2.5s;">
            <span>&rarr;</span>
            Map
          </router-link>
          <router-link to="/spells" class="link animate__animated animate__flipInX" style="animation-delay:3s;">
            <span>&rarr;</span>
            Spells
          </router-link>
          <p class="link animate__animated animate__flipInX" style="animation-delay:3.5s;" @click="signOut">
            <span>&rarr;</span>
            Sign Out
          </p>
        </div>
      </div>
    </div>
    <!-- <div id="bottom-bar">
      <a href="/about">
      <span>&rarr;</span>
        About
      </a>
    </div>   -->
  </div>
</template>

<script>
import "animate.css";
export default {
  name: 'Home',
  methods: {
    signOut() {
      localStorage.removeItem("Authorization");
      this.$store.commit("changeAuthState");
    }
  }
}
</script>

<style lang="scss" scoped>

  #main-display {
    background-color: #EAE7DC;
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .content-area {
    flex: 1;
  }

  #logo-circle {
    background-color: #D8C3A5;
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
    border-radius: 50%;
  }

  #logo-content {
    color: #E85A4F;
    font-family: "Fira Code", sans-serif;
    font-size: 10rem;
    text-align: center;
    line-height: 30rem;
  }

  .link {
    display: block;
    color: #E85A4F;
    padding: 1rem;
    text-decoration: none;
    font-family: "Fira Code", sans-serif;
    &:hover {
      font-size: 1.2rem;
    }
    span {
      color: #E98074
    }
  }

  #link-list {
    width: 11rem;
    margin: 0 auto;
  }

  #bottom-bar {
    /* width: 100%; */
    position: absolute;
    bottom: 0;
    background-color: #8E8D8A;
    padding: 1rem;
    a {
      color: #EAE7DC;
      text-decoration: none;
      font-size: 1rem;
      margin: 1rem;
      font-family: "Fira Code", sans-serif;
    }
  }
</style> 
