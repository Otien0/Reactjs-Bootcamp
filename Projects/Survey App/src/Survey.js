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

    nameSubmit(event) {
        var studentName = this.refs.name.value;
        this.setState({ studentName: studentName }, () => {
            console.log(this.state);
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: 'Morris',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''

            },
            isSubmitted: false
        };
        this.nameSubmit = this.nameSubmit.bind(this);
    }

    render() {
        var studentName;
        var questions;

        if (this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h1>Hey Student, please let us know your name: </h1>

                <form onSubmit={this.nameSubmit}>
                    <input className="myname" type="text" placeholder="Enter your name" ref="name" />
                </form>
            </div>;
            questions = ''
        }
        else if (this.state.studentName !== '' && this.state.isSubmitted === false) {
            studentName = <h1>Hello {this.state.studentName}, welcome to Student Survey App</h1>;
            questions = <p>Hey be ready!</p>;
        }

        return (
            <div>
                {studentName}
                --------------------------------
                {questions}
            </div>
        );
    }
}

export default Survey;