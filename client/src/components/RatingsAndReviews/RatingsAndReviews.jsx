/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import ReviewList from './ReviewList.jsx';
import NewReview from './NewReview.jsx';
import SideGraph from './SideGraph.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import exampleData from '../../../../sampleData/RAR/reviewsList.json';
import './RAR.scss';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: exampleData.results,
    };
  }

  render() {
    return (
      <div className="ratingsComp">
        Ratings and Reviews
        <br />
        <br />
        <div className="rar">
          {/* <SideGraph data={this.state.data} /> */}
          <ReviewBreakdown data={this.state.data} className="reviewColumn" />
          <ReviewList data={this.state.data} className="reviewColumn" />
          <br />
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;

// things to take in a review list
// the review graphic on the sideß
// teakes in new review
