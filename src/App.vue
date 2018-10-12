<template>
  <div id="app">
    <ul class='cul'>
      <li class='cli'><router-link to="/todos">Todos</router-link></li>
      <li class='cli'><router-link to="/todos/new">New Todo</router-link></li>
    </ul>
    <div id='logo'><img src="./assets/logo.png" style='height: 30px; padding-top: 100px'></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
#logo {
  text-align: center
}
.cul {
	position: absolute;
  top: 10%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: 0;
	padding: 0;
	display: flex;
}

.cul .cli {
	list-style: none;
}

.cul .cli a {
	font-family: 'Raleway', sans-serif;
	font-size: 1.2rem;
	position: relative;
	display: block;
	padding: 10px 20px;
	margin: 0 10px;
	text-decoration: none;
	color: #000;
}

.cul .cli a:before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 0%;
	height: 100%;
	border-bottom: 1px solid #000;
	transition: all 300ms ease-in-out;
	opacity: 0;
}

.cul .cli a:hover:before {
	opacity: 1;
	width: 100%;
}
</style>
