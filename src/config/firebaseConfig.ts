import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyD0N63f5S9zqOnVUIdHGLpkibrjZ1iJzS8",
   authDomain: "food-market-baby-2c.firebaseapp.com",
   databaseURL: "https://food-market-baby-2c.firebaseio.com",
   projectId: "food-market-baby-2c",
   storageBucket: "food-market-baby-2c.appspot.com",
   messagingSenderId: "142064178412"
};

export function start() {
   !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
}
