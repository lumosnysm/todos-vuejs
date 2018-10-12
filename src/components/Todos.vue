<template>
  <div id="todo">
    <div id="page-wrapper">
      <h3 style='text-align: center'>TODOS</h3>
      <div v-for="(todo, index) in todos" class='list'>
        <a href="#" class='content'>{{todo.title}}</a>
        <div style='text-align: right'>
          <router-link :to="{ name: 'EditTodo', params: { id: todo.id }}">update</router-link>
          <a href="#" v-on:click="deleteTodo(todo.id)">delete</a>
        </div>
        <div v-for="(item, index) in todo.items" class='item'>
          <a href="#" class='content'>{{item.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Todos',

  data () {
    return {
      todos: '',
      errors: [],
    }
  },

  created () {
    axios({
      method: 'get',
      url: 'http://localhost:3000/todos',
      headers: {
        Authorization: this.$store.state.auth_token
      }
    }).then(response => {
      this.$store.commit('saveTodos', response.data)
      this.todos = this.$store.state.todos
    }).catch(e => {
      this.errors.push(e)
    })
  },

  methods: {
    updateResource(data){
      this.todos = data
    },
    deleteTodo(id){
      axios({
        method: 'delete',
        url: 'http://localhost:3000/todos/'+id,
        headers: {
          Authorization: this.$store.state.auth_token
        }
      }).then(response => {
        this.$router.push('/todos')
      }).catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style scoped>
*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 100%;
  background: #333;
  -webkit-font-smoothing: antialiased;
}

#page-wrapper {
  width: 640px;
  background: #FFFFFF;
  padding: 1em;
  margin: 1em auto;
  border-top: 5px solid #69c773;
  box-shadow: 0 2px 10px rgba(0,0,0,0.8);
}

h1 {
  margin-top: 0;
}

pre {
  background: #EEE;
  padding-top: 1em;
  border-left: 5px solid #69c773;
}

#disc {
  list-style-type: disc;
}

#circle {
  list-style-type: circle;
}

#square {
  list-style-type: square;
}

#decimal {
  list-style-type: decimal;
}

#decimal-leading-zero {
  list-style-type: decimal-leading-zero;
}

#lower-roman {
  list-style-type: lower-roman;
}

#upper-roman {
  list-style-type: upper-roman;
}

#lower-greek {
  list-style-type: lower-greek;
}

#lower-latin {
  list-style-type: lower-latin;
}

#upper-latin {
  list-style-type: upper-latin;
}

#armenian {
  list-style-type: armenian;
}

#georgian {
  list-style-type: georgian;
}

#lower-alpha {
  list-style-type: lower-alpha;
}

#upper-alpha {
  list-style-type: upper-alpha;
}

#none {
  list-style-type: none;
}

#outside {
  list-style-position: outside;
}

#inside {
  list-style-position: inside;
}

#image {
  line-height: 1.5em;
  list-style-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/treehouse-marker.png);
}

a, a:before {
  transition: all .7s;

}
.list {
  max-width: 500px;
  margin: 2em auto;
}

.item {
  padding-left: 50px;
}

.content {
  position: relative;
  display: block;
  max-width: 500px;
  padding: 20px 20px 20px 45px;
  box-sizing: border-box;
  color: #777;
  background: #fAfAfA;
  text-decoration: none;
  font-family: "Open Sans", "Segoe UI", Arial, sans-serif;
}
.content:before {
  content: "";
  position: absolute;
  left:0; bottom:0; top:0;
  width: 20px;
  background: #69c773;
}

.item .content:before {
  content: "";
  position: absolute;
  left:0; bottom:0; top:0;
  width: 20px;
  background: #E74C3C;
}
.content:nth-child(even):before {
  background: #34495E;
}
.content + .content {
  border-top: 2px solid #ededed;
}
div .content:hover,
div .content:focus {
  opacity: 1;
  padding-left: 55px;
}
div .content:hover:before,
div .content:focus:before {
  width: 30px;
}
</style>
