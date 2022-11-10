import React from 'react';
import './style.css';
import Dialog from './Dialog';

export default function App() {
  const [open, setOpen] = React.useState(false);

  function handleDialogOpen() {
    setOpen(true);
  }

  function handleDialogClose() {
    setOpen(false);
  }

  return (
    <div>
      <h1>React Portal Demo</h1>
      <button onClick={handleDialogOpen}>open dialog</button>
      <div id="dialog-wrapper">
        <Dialog open={open} handleClick={handleDialogClose} />
      </div>
    </div>
  );
}
