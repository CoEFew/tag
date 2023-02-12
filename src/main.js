import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import VueLazyLoad from 'vue3-lazyload';

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import "datatables.net-dt/js/dataTables.dataTables";
import 'datatables.net-bs5'
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5/js/dataTables.bootstrap5.min.js";

import 'datatables.net-fixedcolumns-bs5'
import 'datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css'
import 'datatables.net-fixedcolumns-bs5/js/fixedColumns.bootstrap5.min.js'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "@fancyapps/ui/dist/fancybox.css";

import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

import '@fortawesome/fontawesome-free'


// createApp(App).mount('#app')
const app = createApp(App);
app.use(VueLazyLoad,{
  loading: '',
  error: '',
  // lifecycle:{
  //   loading: (el) => {
  //     console.log('loading', el)
  //   },
  //   error: (el) => {
  //     console.log('error', el)
  //   },
  //   loaded: (el) => {
  //     console.log('loaded', el)
  //   }
  // }
});
app.use(VueSweetalert2);
app.use(router);
app.mount('#app');
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
