// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
const axios = require('axios').default

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    inputs: {
      text: '',
      numberAsString: 0,
      numberAsNumber: 0,
      date: '',
      password: '',
      checkbox: false,
      checkboxes: [],
      radios: '',
      radiosPreset: 'rollout',
      radiosDynamic: '',
      radiosDynamicOptions: [
        {
          label: 'Blue',
          value: 'Light'
        },
        {
          label: 'Red',
          value: 'Dark'
        }
      ],
      file: '',
      select: '',
      multiselect: []
    }
  },
  template: `
      <div>
        <h4>Text</h4>
        <input type="text" v-model="inputs.text" />
        <p>
            <strong>Text:</strong> {{inputs.text}}
        </p>
        <h4>Number as String</h4>
        <input type="number" v-model="inputs.numberAsString" />
        <p>
            <strong>Number:</strong> {{inputs.numberAsString}}
        </p>
        <p>
            <strong>Typeof numberAsString:</strong> {{typeof inputs.
        numberAsString}}
        </p>
        <h4>Number as Number</h4>
        <input type="number" v-model="inputs.numberAsNumber" />
        <p>
            <strong>Number:</strong> {{inputs.numberAsNumber}}
        </p>
        <p>
            <strong>Typeof numberAsNumber:</strong> {{typeof inputs.
        numberAsNumber}}
        </p>
        <h4>Date</h4>
        <input type="date" v-model="inputs.date" />
        <p>
            <strong>Date:</strong> {{inputs.date}}
        </p>
        <h4>Password</h4>
        <input type="password" v-model="inputs.password" />
        <p>
            <strong>Password:</strong> {{inputs.password}}
        </p>
        <h4>Checkbox</h4>
        <input type="checkbox" v-model="inputs.checkbox" value="myCheckBox" id="myCheckBox" />
        <label for="myCheckBox">My Check Box</label>
        <p>
            <strong>Checkbox:</strong> {{inputs.checkbox}}
        </p>
        <h4>Checkboxes</h4>
        <input v-model="inputs.checkboxes" type="checkbox" value="eeny" id="eeny" />
        <label for="eeny">Enny</label>
        <input v-model="inputs.checkboxes" type="checkbox" value="meeny" id="meeny" />
        <label for="meeny">Meenny</label>
        <input v-model="inputs.checkboxes" type="checkbox" value="miny" id="miny" />
        <label for="miny">Miny</label>
        <input v-model="inputs.checkboxes" type="checkbox" value="mo" id="mo" />
        <label for="mo">Mo</label>
        <p>
            <strong>Checkboxes:</strong> {{inputs.checkboxes}}
        </p>
        <h4>Radios</h4>
        <input v-model="inputs.radios" type="radio" value="rollout" id="rollout" />
        <label for="rollout">Autobots, transform and roll out!</label>
        <br>
        <input v-model="inputs.radios" type="radio" value="decepticons-retreat" id="retreat" />
        <label for="retreat">Decepticons, retreat!</label>
        <br>
        <input v-model="inputs.radios" type="radio" value="go-joe" id="go-joe" />
        <label for="go-joe">Go Joe!</label>
        <br>
        <input v-model="inputs.radios" type="radio" value="cobra-retreat" id="cobraretreat" />
        <label for="cobraretreat">Cobra retreat. RETREAT!</label>
        <p>
            <strong>Radios:</strong> {{inputs.radios}}
        </p>
        <h4>Radios Preset</h4>
        <input v-model="inputs.radiosPreset" type="radio" value="rollout" id="rollout" />
        <label for="rollout">Autobots, transform and roll out!</label>
        <br>
        <input v-model="inputs.radiosPreset" type="radio" value="decepticons-­retreat" id="retreat" />
        <label for="retreat">Decepticons, retreat!</label>
        <br>
        <input v-model="inputs.radiosPreset" type="radio" value="go-joe" id="go-­joe" />
        <label for="go-joe">Go Joe!</label>
        <br>
        <input v-model="inputs.radiosPreset" type="radio" value="cobra-retreat" id="cobraretreat" />
        <label for="cobraretreat">Cobra retreat. RETREAT!</label>
        <p>
            <strong>Radios:</strong> {{inputs.radiosPreset}}
        </p>
        <h4>Radios Dynamic Options</h4>
        <template v-for="(option, index) in inputs.radiosDynamicOptions">
            <input v-model="inputs.radiosDynamic" type="radio" v-bind:value="option.value" v-bind:id="option.value" />
            <label v-bind:for="option.value">{{option.label}}</label>
            <br v-if="index < inputs.radiosDynamicOptions.length">
        </template>
        <p>
            <strong>Radios:</strong> {{inputs.radiosDynamic}}
        </p>
      </div>
      `
})
