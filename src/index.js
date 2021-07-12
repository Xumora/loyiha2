import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './Components/App/App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const menu = document.getElementById("menu");
const submenu = document.getElementById("submenu");
menu.onclick = function () {
  let j;
  console.log(submenu.classList);
  j = submenu.classList.value.indexOf("d-none");
  if (j == -1) {
    submenu.classList.add("d-none");
  } else {
    submenu.classList.remove("d-none");
  }
  return false;
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
