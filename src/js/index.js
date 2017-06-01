require("../manifest.json");
require("normalize.css");
require("milligram");

import Vue from 'vue';
import App from './App/component.vue';

new Vue({
  el: 'main',
  render: h => h(App)
});
