import React, { useState } from 'react';
import './likeButtons.scss';

function LikeButtons() {
  const [count, setCount] = useState(25);

  return (
    <div className="like-content">
      <span>Подобається подія? Відвідайте і запросіть друзів!!</span>
      <div className="like-buttons">
        <button
          className="btn-secondary like-review"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          <i className="fa fa-heart" aria-hidden="true"></i> Like
        </button>
        <span className="like-counter">сподобалося {count} </span>
        <button
          className="btn-secondary unlike-review"
          type="button"
          onClick={() => setCount(count - 1)}
        >
          <i className="fa fa-heart" aria-hidden="true"></i> UnLike
        </button>
      </div>
    </div>
  );
}

export default LikeButtons;
