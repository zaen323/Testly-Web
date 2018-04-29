import firebase from 'firebase'
require('firebase/firestore');

global.firebase = firebase

if (!firebase.apps.length) {

  var config = {
    apiKey: "AIzaSyA0QmcOG63RA40RJ140SYDDxBUOh8L7w9w",
    authDomain: "testly-c61bb.firebaseapp.com",
    databaseURL: "https://testly-c61bb.firebaseio.com",
    projectId: "testly-c61bb",
    storageBucket: "testly-c61bb.appspot.com",
    messagingSenderId: "176438694337"
  }

  firebase.initializeApp(config)

}

export default firebase