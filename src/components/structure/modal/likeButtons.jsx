/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './likeButtons.scss';

const LikeButtons = () => (
  <div>
    {/* <button className="dislike">
      <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
    </button>

    <button className="like">
      <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
    </button>
     */}
    <div className="like-content">
      <span>
        Did you like this review? Press like to make it easier for others to see
      </span>
      <div className="like-buttons">
        <button className="btn-secondary like-review">
          <i className="fa fa-heart" aria-hidden="true"></i> Like
        </button>
        <span className="like-counter">сподобалося 0</span>
        <button className="btn-secondary unlike-review">
          <i className="fa fa-heart" aria-hidden="true"></i> UnLike
        </button>
      </div>
    </div>
  </div>
);
export default LikeButtons;
