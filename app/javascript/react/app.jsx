import React from 'react'
import {createRoot} from 'react-dom/client'
import Flash from './flash.jsx'

const App = () => {
  return (
    <>
      <Flash>Hello World!</Flash>
      <br />
      <Flash variant="success">Successful World</Flash>
      <br />
      <Flash variant="warning">Uh oh World</Flash>
      <br />
      <Flash variant="danger">Bad World!</Flash>
    </>
  );
}

const root = createRoot(document.querySelector('#react-root'))
root.render(<App />)
