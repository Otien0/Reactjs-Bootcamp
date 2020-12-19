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

    answerSelected() {

    }

    questionSubmit() {

    }

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
        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
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
            questions = <div>
                <h2>Hey {this.state.studentName}, here are some questions:</h2>
                <form onSubmit={this.questionSubmit} >
                    <div className="card">
                        <label>What type of courses do you prefer mostly? </label> <br />
                        <input type="radio" name="answer1" value="Tech/IT" onChange={this.answerSelected} /> Tech/IT
                        <input type="radio" name="answer1" value="Medicine" onChange={this.answerSelected} /> Medicine
                        <input type="radio" name="answer1" value="Commerce" onChange={this.answerSelected} /> Commerce
                    </div>

                    <div className="card">
                        <label>What are the reasons for your answer above? </label> <br />
                        <input type="radio" name="answer2" value="Most Paying" onChange={this.answerSelected} /> Most Paying
                        <input type="radio" name="answer2" value="High Demand" onChange={this.answerSelected} /> High Demand
                        <input type="radio" name="answer2" value="Easy to Learn" onChange={this.answerSelected} /> Easy to Learn
                    </div>

                    <div className="card">
                        <label>After how long does one successfully secure a job with this course? </label> <br />
                        <input type="radio" name="answer3" value="Immediately" onChange={this.answerSelected} /> Immediately
                        <input type="radio" name="answer3" value="After a little strugle" onChange={this.answerSelected} /> After a little strugle
                        <input type="radio" name="answer3" value="It depends on connections" onChange={this.answerSelected} /> It depends on connections
                    </div>

                    <input className="feedback-button" type="submit" value="submit" />
                </form>
            </div>
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