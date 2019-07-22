import React, { Component } from 'react';
import ValidationError from '../validationError';
import { Link } from 'react-router-dom'
import AuthApiService from '../services/auth-api-service'

class RegistrationForm extends Component {

//  state = {
//    error:null,
//       user_name: '',
//       password: '',
//       repeatPassword: '',
//       nameValid: false,
//       passwordValid: false,
//       passwordMatch: false,
//       formValid: false,
//       validationMessages: {
//         user_name: '',
//         password: '',
//         repeatPassword: ''
//       }
//     }
  

//   updateName(user_name) {
//     this.setState({user_name}, () => {this.validateName(user_name)});
//   }

//   updatePassword(password) {
//     this.setState({password}, () => {this.validatePassword(password)});
//   }

//   updateRepeatPassword(repeatPassword) {
//     this.setState({repeatPassword}, () => {this.matchPasswords(repeatPassword)});
//   }

  handleSubmit(event) {
    event.preventDefault();
    const { user_name, password, repeatPassword } = this.state;
    AuthApiService.postUser({
           user_name: user_name.value,
           password: password.value,
           
         })
           .then(user => {
                
                user_name.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
           })
           .catch(res => {
             this.setState({ error: res.error })
           })
  }
   
  

  // validateName(fieldValue) {
  //   const fieldErrors = {...this.state.validationMessages};
  //   let hasError = false;

  //   fieldValue = fieldValue.trim();
  //   if(fieldValue.length === 0) {
  //     fieldErrors.name = 'Name is required';
  //     hasError = true;
  //   } else {
  //     if (fieldValue.length < 3) {
  //       fieldErrors.name = 'Name must be at least 3 characters long';
  //       hasError = true;
  //     } else {
  //       fieldErrors.name = '';
  //       hasError = false;
  //     }
  //   }

  //   this.setState({
  //     validationMessages: fieldErrors,
  //     nameValid: !hasError
  //   }, this.formValid );

  // }

  // validatePassword(fieldValue) {
  //   const fieldErrors = {...this.state.validationMessages};
  //   let hasError = false;

  //   fieldValue = fieldValue.trim();
  //   if(fieldValue.length === 0) {
  //     fieldErrors.password = 'Password is required';
  //     hasError = true;
  //   } else {
  //     if (fieldValue.length < 6 || fieldValue.length > 72) {
  //       fieldErrors.password = 'Password must be between 6 and 72 characters long';
  //       hasError = true;
  //     } else {
  //       if(!fieldValue.match(new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/))) {
  //         fieldErrors.password = 'Password must contain at least one number and one letter';
  //         hasError = true;
  //       } else {
  //         fieldErrors.password = '';
  //         hasError = false;
  //       }
  //     }
  //   }

  //   this.setState({
  //     validationMessages: fieldErrors,
  //     passwordValid: !hasError
  //   }, this.formValid );

  // }

  // matchPasswords(fieldValue) {
  //   const fieldErrors = {...this.state.validationMessages};
  //   let hasError = false;

  //   const password = this.state.password;

  //   if(fieldValue !== password) {
  //     fieldErrors.repeatPassword = 'Passwords do not match';
  //     hasError = true;
  //   } else {
  //     fieldErrors.repeatPassword = '';
  //     hasError = false;
  //   }

  //   this.setState({
  //     validationMessages: fieldErrors,
  //     passwordMatch: !hasError
  //   }, this.formValid );

  // }

  // formValid() {
  //   this.setState({
  //     formValid: this.state.nameValid && this.state.passwordValid && this.state.passwordMatch
  //   });
  // }

  render () {
    return (
     <form className="registration" onSubmit={e => this.handleSubmit(e)}>
       <h2>Register</h2>
       <div className="registration__hint">* required field</div>  
       <div className="form-group">
         <label htmlFor="user_name">Name *</label>
         <input type="text" className="registration__control"
           name="user_name" id="user_name" onChange={e => this.updateName(e.target.value)}/>
         {/* <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessages.name}/>   */}
       </div>
       <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input type="password" className="registration__control"
           name="password" id="password" onChange={e => this.updatePassword(e.target.value)}/>
          <div className="registration__hint">6 to 72 characters, must include a number</div>
          {/* <ValidationError hasError={!this.state.passwordValid} message={this.state.validationMessages.password}/> */}
       </div>
       <div className="form-group">
         <label htmlFor="repeatPassword">Repeat Password *</label>
         <input type="password" className="registration__control"
           name="repeatPassword" id="repeatPassword" onChange={e => this.updateRepeatPassword(e.target.value)}/>
           <ValidationError hasError={!this.state.passwordMatch} message={this.state.validationMessages.repeatPassword}/>
       </div>

       <div className="registration__button__group">
        <button type="reset" className="registration__button">
            Cancel
        </button>
        <button type="submit" className="registration__button" disabled={!this.state.formValid}><Link to='/homepage'>
            Save
      </Link></button>
       </div>
     </form>
   )
 }
}
export default RegistrationForm;