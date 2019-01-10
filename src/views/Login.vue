<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email" v-model="email" name="user-email" id="user-email">
    <input type="password" placeholder="Password" v-model="password" name="user-password" id="user-password"><br>
    <button @click="login">Connection</button>
    <p>You dont't have an account? You can <router-link to="/signup"> create one.</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        // eslint-disable-next-line
        (user) => {
          this.$router.replace('home');
        },
        // eslint-disable-next-line
        (err) => {
          alert('Oops. ' + err.message)
        } 
      )
    }
  }
}
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }

  input {
    margin-right: 10px;
    width: 20%;
    padding: 15px;
  }

  button {
    margin: 10px 0;
    padding: 15px 10px;
    width: 10%;
    cursor: pointer;
  }

  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
