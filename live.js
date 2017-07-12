var config = {
  apiKey: "AIzaSyBU_6zXRGvtyICn1CcTpMOPQuF5Qp8IsY4",
  authDomain: "websocket-slide-andrew.firebaseapp.com",
  databaseURL: "https://websocket-slide-andrew.firebaseio.com",
  projectId: "websocket-slide-andrew",
  storageBucket: "websocket-slide-andrew.appspot.com",
  messagingSenderId: "1040088082658"
};
firebase.initializeApp(config);

  let databaseLink = firebase.database().ref('test/')

  function writeUserData(hash) {
    databaseLink.set({
      hash: hash
    });
    console.log('masuk');
  }

  databaseLink.on('value', function(newUrl) {
    var data = newUrl.val()
    // console.log(data.hash);
    window.location.hash = data.hash
    // console.log(newUrl.val());
  })

  $(window).on('hashchange', function(){
    console.log('masukhash');
    writeUserData(window.location.hash)
  });