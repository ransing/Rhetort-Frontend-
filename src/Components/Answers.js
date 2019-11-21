import React, { Component } from 'react'
import {Animated} from 'react-animated-css'

export default class Answers extends Component {

    // const qid = parseInt(this.props.selectedQuestion.selectedQuestion)

    // componentDidMount(){
    //     fetch(`http://localhost:3000/questions/${qid}`)
    //     .then(res => res.json())
    //     .then(questionData => {
    //         console.log(questionData);
    //     })
    // }
    
    // renderAnswers = (props) => {
    //     fetch(`http://localhost:3000/api/v1/questions/${this.props.selectedQuestion.selectedQuestion}`)
    //     .then(r => r.json())
    //     .then(r => {
    //         // console.log(r.question.answers);
    //         r.question.answers.map(x => {
    //             console.log(x.answer);
    //         })
    //     })
    // }

    state ={
        like: this.props.likes
    }



    increaseLikes = () => {
        fetch(`http://localhost:3000/api/v1/questions/${this.props.questionID}/answers/${this.props.ans_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
                "Accept":"Application/json",
                "Authorization": this.state.token
              },
              body: JSON.stringify({ 
                  answer: {
                  like: this.state.like + 1
                  }
            })
        })
        .then(r => r.json())
        .then(r => {
            this.setState({
                like: this.state.like + 1
            })
        })
        this.componentDidUpdate()
        console.log("increase");
    }

    // renderDelete = () => {
    //     if(this.props.answer.user_id === localStorage.loggedInUserID)

    // }
    componentWillUnmount() {
        console.log("I died")
    }
    
    componentDidUpdate = () => {
        console.log("updated ans component");
    }

    

    deleteAnswer = () => {
        console.log("delete");
        fetch(`http://localhost:3000/api/v1/questions/${this.props.questionID}/answers/${this.props.ans_id}`, {
            method: "DELETE",
        })
        .then(r => {
            this.props.mount()
        })
        // this.props.mount()
    }

    winner = () => {
        // console.log(this.props.answer.id);
        // console.log(this.props.winner.id);
        if(this.props.answer.id === this.props.winner.id){
            // render() {
                return <h3 style={{"font-family":"Special Elite", "font-size":"16 px"}}>🔥Conqueror💥</h3>
                    // }
                }
        else {
            return null 
        }
    }


    
    render() {
        // console.log(parseInt(this.props.answer.user_id) === parseInt(localStorage.loggedInUserId));
        // console.log(this.props.answer.user_id);
        // // console.log(parseInt(localStorage.loggedInUserID);
        return (
            
            <div className="just to see">
               
                        <br/>
                            <h3 class="animated wobble delay-5s"><b>{this.winner()}</b></h3>
                        

                        <div>
                            <h4>{this.props.answer.answer} </h4>
                            {this.props.sort}
                        </div>  
                        <br/>
                            <button className="like-button" style={{"font-family":"Special Elite", 'padding': '4px 12px', 'border-radius': '50px', "border-radius": "72px", "font-size":"16px", "margin-right":"40 px", }} onClick={this.increaseLikes}> 😂Like:{this.state.like}</button>
                        <br/>
                
                    { parseInt(this.props.answer.user_id) == parseInt(localStorage.loggedInUserId) ? 
                        <button className="delete-button" style={{"font-family":"Special Elite", 'padding': '4px 12px', 'border-radius': '50px', 'margin-top': '16px', "font-size":"16px"}} onClick={this.deleteAnswer}>Delete this Answer</button>
                            :
                         null
                    }   
            </div>
        )
    }
}
