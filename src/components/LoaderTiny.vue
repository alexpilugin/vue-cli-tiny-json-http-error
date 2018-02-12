<template>
  <div class="hello">
    <h1>{{msg}} </h1>
    <hr />
    <button v-on:click="getData">Get Data</button>

  <ul v-if="post && posts.length">
    <li v-for="(post, index) in posts" :key="`prj-${index}`">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul>

  <ul v-if="errors && errors.length">
    <li v-for="(error, index) in errors" :key="`error-${index}`">
      {{error.message}}
    </li>
  </ul>
</div>

</template>

<script>
import axios from 'tiny-json-http';

export default {
  name: 'LoaderTiny',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: [],
      errors: []
    }
  },
  methods: {
    getData: function (event) {
		  const reqURL = `http://jsonplaceholder.typicode.com/posts`
			tiny.get( {reqURL} ).then(response => {
				// JSON responses are automatically parsed.
        this.posts = response.body.Items;
        console.log(this.posts);
			}).catch(err => {
				this.errors.push(err)
			})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
