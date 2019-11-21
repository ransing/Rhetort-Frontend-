import React, { Component, useState } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { Card, Icon, Grid } from 'semantic-ui-react'
import '../App.css'



const Questions = (props) =>  {

    const [q , setq] = useState('')
    const [read , setRead] = useState(false)
    
        // console.log(props);

        const handleClick = (e) => {
            // setq(e)
            // debugger
            // console.log(e);
            // props.history.push('/answers')
            props.seeAnswers(e)
            props.readQuestion(e)
            setRead(true)
            console.log(props.readQ);
        }

        return (
        <div>
            {/* { q === '' ? ( */}
            <div class="animated infinite bounce delay-2s" className="ui piled raised segment nick-card" style={{'width': '200px', 'padding': '20px', 'height': '300px', 'margin': '24px 16px', 'border': '1px solid #99278b'}} >
                <div class = "animated shake bounce delay-2s" style={{'display': 'flex', 'flex-direction': 'column', 'align-content': 'space-between', 'height': '100%'}}>
                    <div style={{"font-size":"14 px"}}>{props.question}</div>

                    <div>{props.readQ.includes(props.questionID)? <p class="animated infinite jello delay-2s" style={{"font-size": "24px"}}> 👀🏴 </p> : null}
                       </div>

                    <div>{read === true ? <text> Read </text> : null}</div>
                    <div><button id={props.questionID} class="the-fucking-button" onClick= {()=> handleClick(props.questionID)} style={{'padding': '4px 12px', 
                    'border-radius': '50px', 'margin-top': '16px', "font-family":"Special Elite"}}>See All Answers</button></div>
                </div>
            </div> 
        </div>

            
            
            )

/*         
         /* :
        /* //     (
        /* //     // <div onClick= {() => handleClick("")} class="animated infinite bounce delay-2s" className="ui column">
        //     // <>
        //     // <Route path= {'/answers'} component ={Answers}/>
            
            
        //     // <Redirect to = '/answers'/>
        //     // </>
        //     // <div className= "ui card">
        //     // <h1>{props.question}</h1>
        //     // <button>Try Your Best</button>
        //     // <button>try</button>
        //     // </div>
        //     // </div>  }
        //     )
        } */

        }
        


export default Questions 
