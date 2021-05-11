// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// const axios = require('axios').default

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  },
  template: `
    <div>
        <h1 v-on:click="toggle">
            Toggle
        </h1>
        <p v-show="show">
            Hide and show this message by clicking the word "Toggle"
        </p>
    </div>
    `
})
