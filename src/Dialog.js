import React from 'react';
import ReactDOM from 'react-dom';

export default function Dialog({ open, handleClick }) {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="dialog">
      <div className="inner">
        <span>Content inside dialog</span>
        <button onClick={handleClick}>close dialog</button>
      </div>
    </div>,
    document.getElementById('portal')
  );
}
