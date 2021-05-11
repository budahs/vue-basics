// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// const axios = require('axios').default

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    book: {
      title: 'Getting to Know Vue.js',
      publisher: 'Apress',
      year: 2018
    }
  },
  watch: {
    book: {
      handler: function (newBook, oldBook) {
        console.log('Book Changed')
      },
      inmediate: true
    }
  },
  template: `
    <div>
    <label>Search:
    <input type="text" v-model="book.title" /></label>
    <ul>
      <li v-for="(value, prop) in book">
      {{prop}}: {{value}}
      </li>
    </ul>
    </div>
    `
})
