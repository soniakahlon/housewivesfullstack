import React, { Component } from  'react';
import config from '../config'


class SightingForm extends Component {
  state = {
      restoName: "",
      city:"",
      nameOfHw:"",
      comments: "",
     
    };
  

  nameChanged(restoName) {
    this.setState({
      restoName
    });
  }

  cityChanged(city){
    this.setState({
      city
    });
  }

  commentChanged(comment) {
    this.setState({
     comment
    });
  }

  nameOfHwChanged(nameOfHw) {
    this.setState({
      nameOfHw
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const restaurant = (({restoName, city, comment, nameOfHw}) => ({restoName, city, comment, nameOfHw}))(this.state);
    const url ='config.API_ENDPOINT';
    const options = {
      method: 'POST',
      body: JSON.stringify(restaurant),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.API_KEY}`
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          restoName: "",
          city: "",
          comment: "",
          nameOfHw: ""
        });
        this.props.handleAddResto(restaurant);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
   

  render() {
    const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : "";

    return (
      <div className="addSighting">
        <h2>Add Sighting</h2>
        { error }
        <form className="addSighting__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={this.state.restoName}
            onChange={e => this.nameChanged(e.target.value)}/>
             <label htmlFor="city"> City: </label>
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
          
          <label htmlFor="nameOfHw">Name of Housewife:</label>  
          <textarea
            name="nameOfHw"
            id="nameOfHw"
            placeholder="nameOfHw"
            value={this.state.nameOfHw}
            onChange={e => this.nameOfHwChanged(e.target.value)}/>
          <label htmlFor="comment">Comment: </label>
          <input
            type="text"
            name="comment"
            id="comment"
            value={this.state.comment}
            onChange={e => this.commentChanged(e.target.value)}/>

          <div className="addSighting__buttons">
            <button type="reset">Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default SightingForm;