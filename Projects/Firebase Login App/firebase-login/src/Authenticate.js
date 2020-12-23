import React, { Component } from 'react';
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

// var firebase = require('firebase/app');
//                require('firebase/auth');
//                require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyA1SfcklO-ZC__OGtHWOIEQk0G-wRlY72E",
    authDomain: "fir-login-ccda3.firebaseapp.com",
    databaseURL: "https://fir-login-ccda3-default-rtdb.firebaseio.com",
    projectId: "fir-login-ccda3",
    storageBucket: "fir-login-ccda3.appspot.com",
    messagingSenderId: "600842934232",
    appId: "1:600842934232:web:801cb6361186710a1e44ad",
    measurementId: "G-GRV43MS3ZW"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.default.initializeApp(firebaseConfig);

class Authenticate extends Component {

    login(event) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password);

        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({ err: err });
        });

    }

    signup() {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password);

        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, password);

        promise.then(user => {
            var err = "Welcome " + user.email;
            firebase.database().ref('users/' + user.uid).set({
                email: user.email
            });
            console.log(user);
            this.setState({ err: err });
        });

        promise.catch(e => {
            var err = e.message;
            console.log(err);
            this.setState(({ err: err }));
        });
    }

    constructor(props) {
        super(props);

        this.state = {

        };
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    render() {
        return (
            <div>
                <input id="email" ref="email" type="email" placeholder="Enter your email" /> <br />
                <input id="pass" ref="password" type="password" placeholder="Enter your password" /> <br />

                <p>{this.state.err}</p>

                <button onClick={this.login}>Log In</button>
                <button onClick={this.signup}>Sign Up</button>
                <button>Log Out</button>


            </div>
        );
    }
}

export default Authenticate;

