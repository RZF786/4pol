// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyCzRLx1MtGrxrIuUyqyBcWnFan6OFb-VZg",
  authDomain: "pol-ipms.firebaseapp.com",
  databaseURL: "https://pol-ipms.firebaseio.com",
  projectId: "pol-ipms",
  storageBucket: "",
  messagingSenderId: "56639594200"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});


