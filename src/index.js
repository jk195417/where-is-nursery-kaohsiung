// import js
import $ from 'jquery/dist/jquery.js'
import Popper from 'popper.js/dist/esm/popper.js'
require('bootstrap')
import Vue from 'vue/dist/vue.esm.js'

// import css
import './css/index.scss'

// append template to body
window.loadTemplate = function(dom) {
  let content = dom.import.querySelector('template').cloneNode(true)
  document.body.appendChild(content)
}

// vue instance
import nurserys from './js/nurserys.js'
window.initVue = function() {
  new Vue({
    el: "#app",
    components: {
      nurserys: nurserys
    }
  })
}
