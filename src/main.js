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
    setShow: function(newValue, event) {
      if (event) {
        console.log(event.type);
      }
      this.show = newValue;
    }
  },
  template: `
    <div>
    <h1 v-on:click="setShow(true, $event)">
        Show
    </h1>
    <h1 @click="setShow(false, $event)">
        Hide
    </h1>
        <p v-show="show">
            Hide and show this message by clicking "Hide" or "Show"
        </p>
    </div>
    `
})

