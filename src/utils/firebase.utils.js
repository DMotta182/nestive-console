import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyBHudR0hXvMf2pvVss6QVdirEEH4QY14q8",
    authDomain: "nesstive-console-dev.firebaseapp.com",
    databaseURL: "https://nesstive-console-dev.firebaseio.com",
    projectId: "nesstive-console-dev",
    storageBucket: "nesstive-console-dev.appspot.com",
    messagingSenderId: "683644316048",
    appId: "1:683644316048:web:348b9b655bb9d4946b6b15"
  };

  class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}
}

export default new Firebase()