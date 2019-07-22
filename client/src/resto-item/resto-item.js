import React from "react";

class RestoItem extends React.Component {
  render() {
    
    const comments = comments.map((comment, i) => <span key={i}>{comment}</span>);
  

    return (
      <div className="Restaurant">
        <h2>{this.props.restoName}</h2>
       
        <div className="resto__details">

            <div>City: {this.props.city}</div>
            <div>Name of Housewife: {this.props.nameofhw} </div>
            <div>Comments: {this.props.comments}</div>
          </div>
       
      </div>
    );
  }
}
export default RestoItem;