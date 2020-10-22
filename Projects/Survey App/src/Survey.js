import React, { Component } from 'react';

var firebase = require('firebase');
var uuid = require('uuid');

var firebaseConfig = {
    apiKey: "AIzaSyCcIB4cOQqmHtkmBOt-eRvVB2ukOTHgUEY",
    authDomain: "simple-survey-ea969.firebaseapp.com",
    databaseURL: "https://simple-survey-ea969.firebaseio.com",
    projectId: "simple-survey-ea969",
    storageBucket: "simple-survey-ea969.appspot.com",
    messagingSenderId: "506429789472",
    appId: "1:506429789472:web:76884de2c7ca31b07f3345",
    measurementId: "G-REJNVNGS3J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class Survey extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''

            },
            isSubmitted: false
        };
    }

    render() {
        
        return (
            <div>
                <h1>Hello, I am from survey Component</h1>
            </div>
        );
    }
}

export default Survey;