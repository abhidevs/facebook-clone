import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyArpqzYGXy2BPhbCPh0y1X9oM9OFJdd35w",
  authDomain: "facebook-clone-01.firebaseapp.com",
  databaseURL: "https://facebook-clone-01.firebaseio.com",
  projectId: "facebook-clone-01",
  storageBucket: "facebook-clone-01.appspot.com",
  messagingSenderId: "511208777862",
  appId: "1:511208777862:web:b5742ef9bad51c8cc14907",
  measurementId: "G-6LZWZ8C6XG",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db