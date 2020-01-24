import React, { Component } from 'react'
import { useAuth0 } from "../react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Profile from "../components/Profile";
import history from "../utils/history";
import NavBar from './NavBar';
import Welcome from './Welcome';
import NewsList from './NewsList';
import PrivateRoute from "../components/PrivateRoute";




class App extends Component {
    constructor(props){
        super(props)
        this.state={news: []}  
                      }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5aaebfe73fa04a4abcd241c6b66ec792')
          .then(response => this.setState({news: response.data.articles}))
          .catch(err => console.log(err));
                   }

                  
    render() {
        return (
            <div>
                <Router history={history}>
                    <header>
                    <NavBar/>
                    </header>
                    <Switch>
                    {/* <PrivateRoute path="/" component={Profile} /> */}
                    
                    </Switch>
                    <Welcome/>  
                    <NewsList articles={this.state.news}/>                             
                    </Router>
             





            </div>
        )
    }
}

export default App;