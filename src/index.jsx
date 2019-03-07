import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, global.document.getElementById('index'));

function CreateEl (props) {
  return React.createElement(
    "h1",
    { align: "left" },
    props.message
  );
}

ReactDOM.render(
    React.createElement(CreateEl, {message: 'Hello from Create.Element!'}),
    global.document.getElementById('node')
)
