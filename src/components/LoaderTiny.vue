<template>
  <div class="hello">
    <h1>{{msg}} </h1>
    <hr />
    <button v-on:click="getData">Get Data</button>

  <ul v-if="posts && posts.length">
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
import tiny from "tiny-json-http";
import axios from 'axios';

export default {
  name: "LoaderTiny",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      posts: [],
      errors: []
    };
  },
  methods: {
    getData: function(event) {
      const reqURL = `http://jsonplaceholder.typicode.com/posts`;

      /*
      this.posts = [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
      ];
      */

      /*
      tiny.get( {reqURL} ).then(response => {
        // JSON responses are automatically parsed.
        console.log(response);
        this.posts = response.body.Items;
      }).catch(err =>  this.errors.push(err))
      */

      axios.get(reqURL)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data;
        })
        .catch(e =>  this.errors.push(e))
    }
  }
};
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
a a {
  color: #42b983;
}
</style>
