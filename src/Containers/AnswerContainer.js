import React, { Component } from 'react';
import Answers from '../Components/Answers';
import AnswerForm from '../Components/AnswerForm'

export default class AnswerContainer extends Component {

        state = {
            selectedQ: [],
            parentQ: [],
            token: localStorage.token
        }



        componentDidMount = () => {
            fetch(`http://localhost:3000/api/v1/questions/${this.props.selectedQuestion}`)
            .then(r => r.json())
            .then(r => {
                console.log(r.question.question)
                this.setState({
                    selectedQ: r.question.answers.sort((answerA, answerB) => {
                        return answerB.like - answerA.like
                      }),
                    parentQ: r.question.question

                })
                console.log(this.state.selectedQ[0]);
            })
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("updated answercontainer");

    }

    updateAnswerComponent = () => {
        
    }

    handleSubmit = (e) => {
        // console.log(e, this.props.selectedQuestion, this.state.token);
        fetch(`http://localhost:3000/api/v1/questions/${this.props.selectedQuestion}/answers`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "Accept":"Application/json",
                "Authorization": this.state.token
              },
              body: JSON.stringify({ 
                  answer: {
                  answer: e, 
                  user_id: localStorage.loggedInUserId,
                  like: 0,
                  question_id: this.props.selectedQuestion
                  }
            })
        })
            .then(res => res.json())
              .then(r => {
                //   console.log(e, r);
                //   this.setState({
                //       selectedQ: [...this.state.selectedQ, r.answer ]
                //   })
                this.setState(prevState => {
                    return {
                        selectedQ: [ ...prevState.selectedQ, r.answer ]
                    }
                })
              })
              .then(r => {
                  this.componentDidMount()
              })
        }
    
        // sortAnswersByLikes = () => {
        //     let copiedAnswers = [...this.state.selectedQ]
        //     copiedAnswers.sort((answerA, answerB) => {
        //         return answerA.like - answerB.like
        //       })
        // }  


    render() {
        // console.log(this.props);
        let ansArray = this.state.selectedQ 

        return (
            <div>
                <button class="backtoq" style={{'padding': '4px 12px', 'border-radius': '50px', 'margin-top': '16px', "font-family":"Special Elite", "margin-bottom":"16 px"}}onClick={this.props.backButton}>Back to Questions</button><br/><br/>
                <div>
                    <AnswerForm question={this.state.parentQ} questionID={this.props.selectedQuestion} handleSubmit={this.handleSubmit}/>
                </div>
                {/* {ans} */}
                {ansArray.map(answer => { 
                    // console.log(answer);
            return <Answers mount={this.componentDidMount} answer={answer} questionID={this.props.selectedQuestion} ans_id={answer.id} likes={answer.like} winner={this.state.selectedQ[0]} />
                
        })}
                {/* <Answers selectedQuestion={this.props} /> */}

            </div>
        )
    }
}

