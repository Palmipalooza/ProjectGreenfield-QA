import React from 'react';

function RightArrow(props) {
  const { goToNextSlide } = props;
  return (
    <div
      className="nextArrow arrow"
      role="button"
      tabIndex={0}
      onKeyDown={goToNextSlide}
      onClick={goToNextSlide}
    >
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
}

export default RightArrow;
