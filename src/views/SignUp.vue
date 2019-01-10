<template>
  <div class="sign-up">
    <p>Let's create a new account</p>
    <input type="text" placeholder="Email" v-model="email" name="user-email" id="user-email">
    <input type="password" placeholder="Password" v-model="password" name="user-password" id="user-password"><br>
    <button @click="signUp">Sign Up</button>
    <span> <router-link to="/login"> go back to login.</router-link></span>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        () => {
          this.$router.replace('home');
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
  .signUp {
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

  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
