//var ref = new Firebase('https://slide-realtime.firebaseio.com');

var config = {
    apiKey: "AIzaSyAZfEw0Ea0yQeZnBWrwTJSNsC3oyOZFPmk",
    authDomain: "slide-realtime.firebaseapp.com",
    databaseURL: "https://slide-realtime.firebaseio.com",
    projectId: "slide-realtime",
    storageBucket: "",
    messagingSenderId: "176054045528"
  };
  firebase.initializeApp(config);

var database = firebase.database();

function writeUserData(slideId, slide){
  database.ref('slide/'+slideId).set({
    indeximg: slide
  });
  console.log('firebase data is seved');
}

var app = new Vue({
    el: '#app',
    data: {
        nomor: 0,
        indeximg: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
    },
    methods: {
        nextslide(){
        var slide = this.indeximg.length;
            if(this.nomor >= slide - 1){
                this.nomor  = slide - 1
            } else {
                this.nomor += 1
            }
            writeUserData('001', this.nomor);
            console.log(this.nomor);
        },
        previousslide(){
            if(this.nomor > 0){
                this.nomor -= 1
            } else {
                this.nomor = 0
            }
        }
    },
    created () {
        var self = this
            var slideId = '001'
            var readSlide = database.ref('slide/'+slideId);
            readSlide.on('value', (data)=>{
                self.nomor = data.val().indeximg
            });
    }
});
