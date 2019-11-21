import React, { Component } from 'react';
import Questions from "../Components/Questions";
import { Card, Icon } from 'semantic-ui-react';


export default class QuestionContainer extends Component {

    // seeAnswers = (e) => {
    //     console.log(this.props);
    //     this.props.seeAnswers(e)
    // }

    state = {
        query: ''
    }

    handleSearch = (evt) => {
        this.setState({
            query: evt.target.value
        }, () => { console.log(this.state)})
    }

    componentDidMount = () => {
        console.log("triggered");
    }

    // readQ = (e) => {
    //     props.readQuestion
    // }

    render() {
        // console.log(this.props.questions.question)
        const quesArray = this.props.questions
        // console.log(quesArray);
        const searchArray = quesArray.filter(question => {
            return question.question.toLowerCase().includes(this.state.query.toLowerCase())
        })
    

        // filter the quesArray to the result ques, which matches the query string in the question.question
        const quesItem = searchArray.map(question => <Questions question={question.question} 
            questionID={question.id} seeAnswers={this.props.seeAnswers} backButton={this.componentDidMount()} readQuestion={this.props.readQuestion} readQ ={this.props.readQ} />)
        
        return (
            <React.Fragment>
                <div>
                    <input 
                        // name="query"
                        value={this.state.query}
                        placeholder="Search question..."
                        onChange={this.handleSearch}
                        />
                </div>

                <div style={{'display': 'flex', 'flex-direction': 'row', 'flex-wrap': 'wrap', 'justify-content': 'space-around', 'align-items': 'space-around', 'height': '100%', 'margin-top': '16px'}}>
                    {quesItem}
                </div>
            </React.Fragment>
        )
    }
}
