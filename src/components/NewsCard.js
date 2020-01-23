import React, { Component } from 'react';
import axios from 'axios';
import NewsList from './NewsList';


export default class NewsCard extends Component {
 
      
    render() {
        return (
            <div>
           <h1>{this.state.news.length} </h1>
            </div>
        )
    }
}
