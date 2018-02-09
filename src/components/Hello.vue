<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click='logOut'>Log out</button>  
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome KWC Portal'
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
