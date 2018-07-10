import React from 'react'
import { render } from 'react-dom'
// import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import './app/webfont.font.js'
import './sass/style.scss'
// import App from './app/flows/home/AppComponent';
import { Routes } from './app/routes/index'
// import registerServiceWorker from './registerServiceWorker';


// registerServiceWorker();

it('App renders without crashing', () => {
    const div = document.createElement('div');
    render(
        <Provider store={store}>
            <Routes />
        </Provider>
    , div);
    // ReactDOM.unmountComponentAtNode(div);
  });
