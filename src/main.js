// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    yes: 'Yes it is',
    no: 'No it is not',
    falseValue: false,
    myName: 'Cool Name',
    someHTML: '<h1 style="color:#41b883; background-­color:#35495e;">Getting to Know Vue.js</h1>'
  },
  template: `
    <div>
      <div>{{ 1 + 1 }}</div>
      <div>{{ falseValue === false ? yes : no }}</div>
      <div>{{ 1 == 2 ? yes : no }}</div>
      <div>{{ 1 + 1 + 1 > 2 ? yes : no }}</div>
      <div>{{ 'Getting to Know Vue.js'.toUpperCase() }}</div>
      <div v-bind:name="myName"></div>
      <div>{{ someHTML }}</div>
      <div v-html:name="someHTML"></div>
    </div>
  `
})
