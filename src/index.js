// import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';
// import { Header } from './components/Header/Header';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.scss';
import reportWebVitals from './reportWebVitals';
import { ContactDetailsPage } from './pages/ContactDetailsPage/ContactDetailsPage';
import { HomePage } from './pages/HomePage/HomePage';
import { StatisticPage } from './pages/StatisticPage/StatisticPage';
import { ContactPage } from './pages/ContactPage/ContactPage';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    {/* <ContactPage/>
    <StatisticPage/>
    <ContactDetailsPage/> */}
    {/* <ContactEditPage/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
