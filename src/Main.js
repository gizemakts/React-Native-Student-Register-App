import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class Main extends Component {
    UNSAFE_componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyApe0ikXlfJkVEajBbts8Uc7vj-MXGcSoA',
            authDomain: 'ogrencikayit-98f94.firebaseapp.com',
            databaseURL: 'https://ogrencikayit-98f94.firebaseio.com',
            projectId: 'ogrencikayit-98f94',
            storageBucket: 'ogrencikayit-98f94.appspot.com',
            messagingSenderId: '302844397692',
            appId: '1:302844397692:web:ba0125123ead7046ab61f9',
            measurementId: 'G-8R67FC0K6B'
        });
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default Main;