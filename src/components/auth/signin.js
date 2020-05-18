import React, { Component } from 'react';
import SignInForm from './signinForm'

import {reduxForm, Field} from 'redux-form'

export default class SignIn extends Component {
    render() {
        return (
            <div className='sign-in'>
                <SignInForm className='sing-in__form'/>
            </div>
        );
    }
}