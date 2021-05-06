// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    yes: true,
    no: false
  },
  template: `
    <div>
        <h1>1: <span v-if="yes">Yes</span></h1>
        <h1>2: <span v-if="no">No</span></h1>
        <h1 v-if="no">Don't Show</h1>
        <h1 v-else>Show!</h1>
        <hr>
        <h1>Show v-else-if</h1>
        <h2 v-if="no">If</h2>
        <h2 v-else-if="yes">Else If</h2>
        <h2 v-else>Else</h2>
        <hr>
        <h1>Show v-else</h1>
        <h2 v-if="no">If</h2>
        <h2 v-else-if="no">Else If</h2>
        <h2 v-else>Else</h2>
    </div>
    `
})
