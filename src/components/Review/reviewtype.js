import React from 'react';

function ReviewType () {
    return(
      <div>
        <select className="browser-default custom-select">
          <option>Choose your Review Type</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    );
}

export default ReviewType;