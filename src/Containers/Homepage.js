import React, { Component } from 'react';
import MainTiles from '../Components/MainTiles';
import AnswerContainer from './AnswerContainer';
import QuestionContainer from './QuestionContainer';
import {Animated} from 'react-animated-css'


export default class Homepage extends Component {

    state = {
        answers: [],
        questions: [],
        searchTerm: "",
        selectedQuestion: "",
        readQuestion:[]
    }

    handleChange = (e) => {
        this.setState({ 
            searchTerm: e.target.value
        })
    }

componentDidMount(){
    fetch('http://localhost:3000/api/v1/questions')
    .then(res => res.json())
    .then(questionsData => {
        this.setState({
            questions: questionsData.question
        })
    })
}    

readQuestion = (question) => {
    this.setState({
        readQuestion: [...this.state.readQuestion, question]
    }, ()=> {
        console.log(this.state.readQuestion);
    })
}

backButton = () => {
    // this.props.backButton
    // this.state.selectedQuestion === "";
    this.setState({
        selectedQuestion: ""
    })
    console.log("backbutton homepage");
}

seeAnswers = (e) => {
    this.setState({
        selectedQuestion: e
    })
}

renderAnswer =() => {
    if (this.state.selectedQuestion === ""){
        return <QuestionContainer search={this.handleChange} questions={this.state.questions} seeAnswers={this.seeAnswers} backButton={this.backButton}  readQuestion={this.readQuestion} readQ={this.state.readQuestion}/>
    } 
    else {
        return <AnswerContainer selectedQuestion={this.state.selectedQuestion} backButton={this.backButton}/>
    }
}



    render() {
        return (
            
            <div style={{"margin-top":"200 px", "padding":"80 px"}}>
                <h1 id="title">Rhetort Fort 🏴‍☠️</h1>
                <MainTiles />
                {this.renderAnswer()}
            </div>
        )
    }
}
