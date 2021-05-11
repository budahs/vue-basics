// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
const axios = require('axios').default

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    searchText: 'Insert search text',
    results: []
  },
  methods: {
    search: function () {
      axios
        .get(`https://swapi.dev/api/people/?search=${this.searchText}`)
        .then(response => {
          this.results = response.data
        })
    }
  },
  watch: {
    searchText: function (newSearchText, oldSearchText) {
      this.search()
    }
  },
  template: `
    <div>
    <label>Search:
    <input type="text" v-model="searchText" /></label>
    <h5>Results: <small>{{results.count}}</small></h5>
    <ul>
      <li v-for="result in results.results">
        {{result.name}}
      </li>
    </ul>
    </div>
    `
})
