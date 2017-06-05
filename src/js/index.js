// Resources
require("../manifest.json");
require("../icons/128.png");
require("../icons/48.png");

require("normalize.css");
require("milligram");
require("simplemde/dist/simplemde.min.css");

import Vue from 'vue';
import App from './App/component.vue';
import Editor from './Editor/component.vue';

Vue.component('editor', Editor);

new Vue({
  el: 'main',
  render: h => h(App)
});