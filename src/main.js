// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',  
  data: {
    book: {
      title: 'Overly Complex Story',
      price: 7.99,
      id: 3,
      genres: ['adult', 'science fiction', 'fiction'],
      action: function() {
        return 'I did an action';
      }
    }
  },
  template: `    
    <ul>
      <li v-for="(prop, key, index) in book">
        {{index}}) {{key}}: {{prop}}
        <p v-if="typeof prop == 'function'">{{prop()}}</p>
      </li>
    </ul>    
    `
})
