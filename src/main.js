// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    books: [
      {
        title: 'Entertaining Kids Book',
        price: 4.99,
        id: 0,
        genres: ['kids', 'fiction']
      },
      {
        title: 'Teen Drama',
        price: 5.99,
        id: 1,
        genres: ['teen', 'fiction']
      },
      {
        title: 'Boring Facts',
        price: 6.99,
        id: 2,
        genres: ['adult', 'non-fiction']
      },
      {
        title: 'Overly Complex Story',
        price: 7.99,
        id: 3,
        genres: ['adult', 'science fiction', 'fiction']
      },
      {
        title: 'Facts for Teens',
        price: 3.99,
        id: 4,
        genres: ['teen', 'non-fiction']
      }
    ]
  },
  template: `    
    <ul>
      <li v-for="book in books" :key="book.id">
        <p><strong>Id:</strong> {{ book.id }}</p>
        <p><strong>title:</strong> {{ book.title }}</p>
        <p><strong>price:</strong> {{ book.price }}</p>
        <p>
          <strong>genres:</strong>
          <span v-for="(genre, index) in book.genres">
            {{genre}}
            <span v-if="index < book.genres.length -1">, </span>
          </span>
        </p>
      </li>
    </ul>
    `
})
