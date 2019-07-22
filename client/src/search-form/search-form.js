import React, { Component } from  'react';
import config from '../config';
import { Link } from 'react-router-dom'


class SearchForm extends Component {
    state = {
        city:"",
        date:"",
        restaurants:[],
        restaurant:[]
      };

      cityChanged(city) {
        this.setState({
          city
        });
      }
      
      dateChanged(date) {
        this.setState({
          date
        });
      }
          
  handleSubmit(e) {
    e.preventDefault();
    // const API_KEY='config.API_KEY;'
    const baseUrl = 'config.API_ENDPOINT';
    const params = [
      `q=${this.state.city}`,
      `filter=${this.state.date}`,
      // `key=${API_KEY}`
     ];
  
    const query = params.join("&");
    const url = `${baseUrl}?${query}`;
  
    const options= {
      method: 'GET',
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${config.API_KEY}`
      }}
  
    fetch(url,options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          restaurants: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });  
  }
    
  render() {
    return (
      <>
    
         <div className="searchForm">
          <form className="searchForm" onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="sortByCity">Choose The City: </label>
            <select
              id="city"
              name="city"
              onChange={e => this.props.cityChanged(e.target.value)}
            >
               <option value="New Jersey">New Jersey</option>
                <option value="New York">New York</option>
                <option value="Patomac">Patomac</option>
                 <option value="Orange County">Orange County</option>
                 <option value="Dallas">Dallas</option>
                  <option value="Atlanta">Atlanta</option>
                <option value="Beverly Hills" selected>Beverly Hills</option>
            </select>

            <label htmlFor="sortByDate">Sort By Date: </label>
            <select
              id="date"
              name="date"
              onChange={e => this.props.dateChanged(e.target.value)}
            >
               <option value="Most Recent">Most Recent</option>
                <option value="Least Recent">Least Recent</option>
            </select>
            <button type="reset">Cancel</button>
            <button type="submit"><Link to='/displayresults'>
               Submit
          </Link></button>
          </form>
        </div>
      </>
    );
  }
}

export default SearchForm;
