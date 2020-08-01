<template>
  <div>
    <div class="login-form">
      <h1>Login to FD9K</h1>
      <input type="text" name="username" id="username" class="text-input" v-model="username">
      <input type="password" name="password" id="password" class="text-input" v-model="password">
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
  import auth from "../utils/auth";
  export default {
    data() {
      return {
        username: null,
        password: null,
      }
    },
    methods: {
      async login() {
        const call = await auth.signIn(this.username, this.password);
        if (call.accessToken) {
          localStorage.setItem("fd9000token", call.accessToken);
          this.username = "";
          this.password = "";
        }
        this.$store.commit("changeAuthState")
        this.$router.push("/");
        // O1nkD13DF0Rur5in5
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 1.25rem;  
  }

  .login-form {
    width: 40rem;
    margin: 0 auto;
    margin-top: 10rem;
    text-align: center;
    button {
      background: none;
      border: none;
      padding: 1rem;
      font-size: 1.25rem;
      margin-top: 1.5rem;
      color: #E85A4F;
      cursor: pointer;
    }
  }

  .text-input {
    width: 60%;
    display: block;
    background: none;
    margin: 0 auto;
    margin-top: 4rem;
    border: none;
    font-size: 1rem;
    color: #E85A4F;
    border-bottom: 1px #E85A4F solid;
    outline: none;
    padding: 0.25rem;
    &:focus {
      padding: 0.5rem;
    }
  }
</style>