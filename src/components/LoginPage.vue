<template>
  <div id='todo'>
  <div class="container">
    <div class="content-container">
      <form v-on:submit.prevent='login'>
        <label for='email'>Email</label>
        <input v-model='email' type='email'>
        <label for='password'>Password</label>
        <input v-model='password' type='password'>
        <button type="submit" class='login'>submit</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',

  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      axios({
        method: 'post',
        url: 'http://localhost:3000/auth/login',
        data: {
          email: this.email,
          password: this.password
        }
      }).then(response => {
        this.$store.commit('addAuthToken', response.data['auth_token'])
        this.$router.push('/todos')
      }).catch(e => {
        this.error.push(e)
      })
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
 background: #614385;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #516395, #614385);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #516395, #614385); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.1em;
}

  .container {
    width: 400px;
    height: 400px;
    background: #EDEDED;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  }

    .content-container {
      width: 95%;
      height: 100%;
      position: relative;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
        label {
          color: #E74C3C;
          text-transform: uppercase;
        }
        input {
          width: 100%;
          height: 30px;
          margin-bottom: 20px;
          background: none;
          color: #E74C3C;
          border: none;
          border-bottom: 1px solid #69c773;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        input:hover {
          opacity: 1;
        }
        input:focus {
          outline: none;
        }
      .frg-password {
        text-decoration: none;
        color: #E74C3C;
      }
      .frg-password:hover {
        color: black;
      }
      .frg-password:visited {
        color: #E74C3C;
      }
      .login {
        width: 100%;
        height: 30px;
        border: none;
        margin-bottom: 20px;
        border-radius: 25px;
        font-family: 'Raleway', sans-serif;
        letter-spacing: 0.2em;
        color: #E74C3C;
        transition: background 1s, color 1s;
      }
      .login:hover {
        background: #E74C3C;
        color: #ECF0F1;
        cursor: pointer;
      }
      .media {
        width: 100%;
        height: 30px;
        border: none;
        margin: 5px 0;
        border-radius: 25px;
        opacity: 0.8;
        transition: opacity 0.3s;
      }
      .media:hover {
        opacity: 1;
        cursor: pointer;
      }
      .fb {
        background: #3A5A98;
        color: white;
      }
      .g {
        background: #DC4437;
        color: white;
      }
      button:focus {
        outline: none;
      }
</style>
