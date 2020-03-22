import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAFVX7ckiJpKYiosqVbiOIbXWmH5ZNdeck",
    authDomain: "vue-chat-ffda1.firebaseapp.com",
    databaseURL: "https://vue-chat-ffda1.firebaseio.com",
    projectId: "vue-chat-ffda1",
    storageBucket: "vue-chat-ffda1.appspot.com",
    messagingSenderId: "1002711588864",
    appId: "1:1002711588864:web:25c184d88c2e11334038e5"
};

firebase.initializeApp(firebaseConfig);

export default firebase