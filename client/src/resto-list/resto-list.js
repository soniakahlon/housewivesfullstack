import React from "react";

class RestoList extends React.Component {
  render() {
    const restaurants = this.props.restaurants.map((restaurant, i) => <restaurant {...restaurant} key={i} />);

    return <div className="restaurantList">{restaurants}</div>;
  }
}

export default RestoList;
