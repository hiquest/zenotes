// Resources
require("../manifest.json");
require("../icons/128.png");
require("../icons/48.png");

// Some styles
require("normalize.css");
require("milligram");
require("simplemde/dist/simplemde.min.css");

import Vue from 'vue';

// Components
import App from './components/App.vue';
import Editor from './components/Editor.vue';

// Define components
Vue.component('editor', Editor);

new Vue({
  el: 'body',
  render: h => h(App)
});
