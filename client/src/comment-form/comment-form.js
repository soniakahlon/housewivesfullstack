import React, { Component } from  'react';
import SearchForm from '../search-form/search-form';
import config from '../config'



class CommentForm extends Component {
  state = {
       comment: "",
     };
  
 commentAdded(comment) {
    this.setState({
     comment
    });
  }

  

   handleSubmit(e) {
    e.preventDefault();
    const {comment} = this.state;
    const url ='config.API_ENDPOINT';
    const options = {
      method: 'POST',
      body: JSON.stringify(comment),
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
          comment: ""
        });
        this.props.handleAddComment(comment);
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
      <div className="addComment">
      <SearchForm/>
        <h2>Add Comment</h2>
        { error }
        <form className="addComment__form" onSubmit={e => this.handleSubmit(e)}>

          <label htmlFor="comment">Comment: </label>
          <input
            type="number"
            name="comment"
            id="comment"
            value={this.state.comment}
            onChange={e => this.commentAdded(e.target.value)}/>

          <div className="addComment__buttons">
            <button type="reset">Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default CommentForm;