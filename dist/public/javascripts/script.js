var config = {
   apiKey: "AIzaSyBJ0HnGJ6mExSwYBRi67dUqV7eJtVtNmnM",
   authDomain: "remote-slideshow-de63c.firebaseapp.com",
   databaseURL: "https://remote-slideshow-de63c.firebaseio.com",
   projectId: "remote-slideshow-de63c",
   storageBucket: "remote-slideshow-de63c.appspot.com",
   messagingSenderId: "402655177398"
};
firebase.initializeApp(config);

firebase.database().ref('pos/').on('value', function(pos) {
  console.log(pos.val().url);
  window.location.hash = pos.val().url
  ignore = true;
})

window.onhashchange = function() {
  firebase.database().ref('pos/').set({
    url : window.location.hash
  })
}
