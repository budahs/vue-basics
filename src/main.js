// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
const axios = require('axios').default

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    fileName: '',
    text:'',
    select:'',
    multiSelect:''
  },
  methods: {
    fileChanged: function(event) {
      console.log(event);
      this.fileName = event.target.files[0].name;
    }
  },
  template: `
    <div>
      <h4>File</h4>
      <!-- <input type="file" v-model="inputs.file" /> -->
      <input type="file" v-on:change="fileChanged($event)" />
      <p>
          <strong>File:</strong> {{fileName}}
      </p>
      <h4>Text</h4>
      <textarea v-model="text" cols="50" style="height: 200px;"></textarea>
      <p style="white-space: pre-line;">
          {{text}}
      </p>
      <h4>Select</h4>
      <select v-model="select">
          <option disabled value="">Select your Show</option>
          <option value="startrek">Star Trek</option>
          <option value="starwars">Star Wars</option>
          <option value="firefly">Firefly</option>
          <option value="drwho">Dr. Who</option>
      </select>
      <p>
          <strong>Selected:</strong> {{select}}
      </p>
      <h4>Multi-Select</h4>
      <select v-model="multiSelect" multiple>
          <option value="startrek">Star Trek</option>
          <option value="starwars">Star Wars</option>
          <option value="firefly">Firefly</option>
          <option value="drwho">Dr. Who</option>
      </select>
      <p>
          <strong>Multi-Selected:</strong> {{multiSelect}}
      </p>
    </div>
  `
})
