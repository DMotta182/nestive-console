import firebase from './firebase.utils';
//import { useHistory } from 'react-router-dom';



class Auth {
    constructor() {
        this.authenticated = false;
        this.currentUser = '';
    }
  
    async login(email, password, cb) {
        try {
            await firebase.login(email, password)
            .then (this.authenticated = true)
            .then (this.currentUser = email)
            .then(cb());
        } catch (error) {
            alert(error.message)
        }
    }
  
    async logout(cb) {
        try {
            await firebase.logout()
            .then(this.authenticated = false)
            cb()
        } catch (error) {
            alert(error.message)
        }
    }
  
    isAuthenticated() {
        return this.authenticated;
    }

    getCurrentUser() {
        return this.currentUser
    }
  }
  
  export default new Auth();