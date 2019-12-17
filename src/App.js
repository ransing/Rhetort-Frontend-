import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Containers/Homepage';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom'
import Answers from './Components/Answers';
import Questions from './Components/Questions'
import Login from './Components/Login'


class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null,
    username: null
  }

  gotToken = (token, loggedInUserId, username) => {
    // debugger
    // console.log("logged in", token)
    localStorage.token = token
    localStorage.loggedInUserId = loggedInUserId
    localStorage.username = username
    this.setState({
      token,
      loggedInUserId,
      username
    })
  }

  logOutClicked = () => {
    localStorage.clear()
    // localStorage.token = null
    // localStorage.loggedInUserId = null
    // debugger
    this.setState({
      token: null,
      loggedInUserId: null,
      username: null
    })
    // console.log(props);
    
    this.props.history.push('/')
  }

  componentDidMount(){
    console.log("componentDidMount", localStorage.token);
    if (localStorage.token) {
      this.setState({
        token: localStorage.token,
        loggedInUserId: localStorage.loggedInUserId,
        username: localStorage.username
      })
    }
  }

  goBack = () => {
    this.props.history.go(-1)
  }

  // welcome = () => {
  //   const name = this.state.username 
  //   if (this.state.username){
  //       return name <Text>Welcome</Text>
  //   }
  //   else{
  //     return null
  //   }

  // }

  render() {
    const name = this.state.username
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* <NavLink> 
       
        Login
      </NavLink> */}

      {/* {<NavLink
        // render={(routerProps)=> {return <NavLink logOutClicked={this.logOutClicked}{...routerProps}/>}}
        > 
        Sign Out
      </NavLink> */} 
      {/* <NavLink to="/login"> link</NavLink> */}
      {/* <NavBar></NavBar> */}

        {/* // NavBar begins */}
            
              <nav class="navbar" style={{'margin-bottom': '24px'}}>
                {/* <span class="navbar-toggle" id="js-navbar-toggle"> */}
                        {/* <i class="fas fa-bars"></i> */}
                {/* <a img src="rhetort.jpg" href="#" class="logo">logo</a>
                    </span> */}
                    <div className= "logo1" style = {{"width":"20px"}} >
                        <img src="rhetort.jpg" alt="Trulli" width="130" height="60" style={{"margin":"-9px"}}></img>
                    </div>
                <ul class="main-nav" id="js-menu">
                  <li>
                    <a  href="#" class="nav-links">{this.state.username ? <text>Welcome {this.state.username} </text> : null}
                       </a>
                  </li>
                  <li>
                    <a onClick={this.logOutClicked} href="#" class="nav-links">Log Out </a>
                  </li>
                  <li>
                    <a onClick={this.goBack} href="#" class="nav-links"> Go Back </a>
                  </li>
                  <li>
                  
                  <a href="https://github.com/ransing/Rhetort-Backend-" class="nav-links">Git Backend </a>
                  <i class="fa fa-github" style={{"font-size":"20px"}}></i>
                  </li>
                  <li>
                 
                    <a href="https://github.com/ransing/Rhetort-Frontend-" class="nav-links">Git Frontend</a>
                    
                  </li>
                </ul>
              </nav>
            {/* </body> */}
          {/* // NavBar ends  */}
      <Switch>
        <Route exact path='/'  render={(routerProps) => {return <Login gotToken={this.gotToken} {...routerProps}/>}} />
        <Route path={'/questions'} component={Questions} />
        <Route path={'/answers'} component={Answers} />
        <Route exact path={'/main'} component={Homepage} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  )
  }

}
export default withRouter(App);
