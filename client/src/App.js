import React, { Component } from 'react';
import HomePage from './homepage/homepage';
import LoginForm from './login-form/login-form'
import RegistrationForm from './register-form/register-form';
import SearchForm from './search-form/search-form';
import CommentForm from './comment-form/comment-form';
import SightingForm from './sighting-form/sighting-form';
import RestoList from './resto-list/resto-list';
import RestoItem from './resto-item/resto-item';
import LandingPage from './landing-page/landing-page'
import {  Route   } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import config from './config'
import DisplayRestoResults from './display-restoresults/display-restoresults'

class App extends Component {
  state = {
    date: "",
    city: "",
    restaurants:[],
    restaurant:[],
    comments:[]
};

  

addRestaurant(restaurant) {
  this.setState({
    restaurants: [...this.state.restaurants, restaurant],
  });
}

addComment(comment) {
  this.setState({
    comments: [...this.state.comments, comment],
  });
}


render() {
  return (
   <div>
  
    <Router>
    <div className="App">
     <main>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/restolist" component={RestoList} />
        <Route exact path="/restoitem/:restoId" component={RestoItem} />
        <Route exact path="/login"  component={LoginForm}/>
        <Route exact path="/register" component={RegistrationForm}/>
           

        <Route exact path="/comment" 
        render={( routerProps ) => {
              return <CommentForm
              handleAddComment={comment => this.addComment(comment)}
              />  }} />
        
        <Route exact path="/sighting" 
        render={( routerProps ) => {
             return <SightingForm
             handleAddResto={restaurant => this.addRestaurant(restaurant)}
            /> }} />

         <Route exact path="/search" 
              render={( routerProps ) => {
              return <SearchForm
               onSubmit={this.handleSubmit}
               />
           }} />
<Route exact path="/displayresults" render={( routerProps ) => {
              return <DisplayRestoResults/>
           }} />
        </main>
      </div>
    </Router>
    </div>
  );
}
}
export default App


