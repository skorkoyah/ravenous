import React from 'react';
import './Business.css';


class Business extends React.Component {

  render(props) {
    const {name, image_url, location, category, rating, review_count} = this.props.business;
    return (
      <div className="Business">
        <div className="image-container">
          <img src= {image_url} alt=''/>
        </div>
        <h2>{name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{location.address1}</p>
            <p>{location.city}</p>
            <p>{location.state + ' ' + location.zip_code}</p>
          </div>
          <div className="Business-reviews">
            <h3>{category}</h3>
            <h3 className="rating"> {`${rating} stars`} </h3>
            <p>{review_count} reviews</p>
          </div>
        </div>
      </div>
      );
  }
}



export default Business;

