import './libs/index'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import { Routes } from './app/routes/index'
import './app/webfont.font.js'
import './sass/style.scss'
// import App from './app/flows/home/AppComponent';
// import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('root'));
// registerServiceWorker();
