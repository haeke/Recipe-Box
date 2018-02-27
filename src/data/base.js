import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: 'AIzaSyD1QjaMp93d7Ryy1PqAMAGFsdKq52ksPyM',
    authDomain: 'data-guestbook.firebaseapp.com',
    databaseURL: 'https://data-guestbook.firebaseio.com',
    projectId: 'data-guestbook',
    storageBucket: '',
  };

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;