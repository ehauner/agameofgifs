import { MRWData } from './ReactionPrompts.js'
var firebase = require('firebase');

/**
* This function can be called to add the contents of ReactionPrompts.js to
* the firebase database.
**/
function populateFromReddit() {
  const config = {
    apiKey: "AIzaSyDxZeKOuO8GBsxCRdx2VZNZYoMuC5WVgQw",
    authDomain: "gameofgifs-ad3d4.firebaseapp.com",
    databaseURL: "https://gameofgifs-ad3d4.firebaseio.com",
    storageBucket: "gameofgifs-ad3d4.appspot.com",
  };
  firebase.initializeApp(config);
  const database = firebase.database();
  firebase.database().ref('ReactionPrompts').set(MRWData);
}

export { populateFromReddit };
