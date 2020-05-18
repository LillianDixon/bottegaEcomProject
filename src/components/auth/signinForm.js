import React, { Component } from 'react';

import {reduxForm, Field} from 'redux-form'

export default class SignInForm extends Component {
    render() {
        const{className} = this.props
        return (
            <div className={`${className} sign-in-form`}>
                sign in form
            </div>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);