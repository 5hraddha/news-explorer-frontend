import React                      from 'react';
import PropTypes                  from 'prop-types';
import { useFormAndValidation }   from '../../hooks/useFormAndValidation';
import PopupWithForm              from '../PopupWithForm/PopupWithForm';
import './Register.css';

function Register(props){
  const {
    isRegisterPopupOpen,
    onSubmit,
    onClose,
    onSignInClick,
    registerUsername,
    setRegisterUsername,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
  }  = props;
  const {
    isValid,
    errors,
    inputsTouched,
    handleInputChange,
    handleInputBlur,
    handleInputFocus,
    resetForm }       = useFormAndValidation(['register-email', 'register-password', 'register-username']);

  // Reset form values every time the popup opens
  React.useEffect(() => {
    const initialValues = {
      'register-email': '',
      'register-password': '',
      'register-username': '',
    };
    setRegisterEmail('');
    setRegisterPassword('');
    setRegisterUsername('');
    resetForm({...initialValues}, {...initialValues}, true);
  }, [isRegisterPopupOpen, resetForm, setRegisterEmail, setRegisterPassword, setRegisterUsername]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(isValid || (registerEmail && registerPassword && registerUsername)){
      onSubmit();
    }
  }

  const handleChange = (e) => {
    let customValidationMessage = '';
    if(e.target.name === 'register-email'){
      setRegisterEmail(e.target.value);
      customValidationMessage = 'Invalid email address';
    }
    if(e.target.name === 'register-password'){
      setRegisterPassword(e.target.value);
      customValidationMessage = 'Invalid password';
    }
    if(e.target.name === 'register-username'){
      setRegisterUsername(e.target.value);
      customValidationMessage = 'Invalid username';
    }
    handleInputChange(e, customValidationMessage);
  };

  const handleBlur = (e) => handleInputBlur(e);
  const handleFocus = (e) => handleInputFocus(e);

  const emailInputErrorClass    = `register-form__error ${(!isValid && errors['register-email'] && inputsTouched['register-email']) && `register-form__error_visible`}`;
  const passwordInputErrorClass = `register-form__error ${(!isValid && errors['register-password'] && inputsTouched['register-password']) && `register-form__error_visible`}`;
  const usernameInputErrorClass = `register-form__error ${(!isValid && errors['register-username'] && inputsTouched['register-username']) && `register-form__error_visible`}`;

  return (
    <PopupWithForm
    name="register"
    title="Sign up"
    btnLabel="Sign up"
    inlineBtnLabel="Sign in"
    isOpen={isRegisterPopupOpen}
    onClose={onClose}
    onSubmit={handleFormSubmit}
    onInlineBtnClick={onSignInClick}>
      <div className="register-form">
        <div className="register-form__input-group">
          <label className="register-form__label" htmlFor="register-email">
            <span className="register-form__label-text">Email</span>
            <input
              className="register-form__input"
              type="email"
              id="register-email"
              name="register-email"
              placeholder="Enter email"
              value={registerEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              required />
            <span id="register-email-error" className={emailInputErrorClass}>
              {errors['register-email']}
            </span>
          </label>
        </div>
        <div className="register-form__input-group">
          <label className="register-form__label" htmlFor="register-password">
            <span className="register-form__label-text">Password</span>
            <input
              className="register-form__input"
              type="password"
              id="register-password"
              name="register-password"
              placeholder="Enter password"
              value={registerPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              minLength='8'
              required />
            <span id="register-password-error" className={passwordInputErrorClass}>
              {errors['register-password']}
            </span>
          </label>
        </div>
        <div className="register-form__input-group">
          <label className="register-form__label" htmlFor="register-username">
            <span className="register-form__label-text">Username</span>
            <input
              className="register-form__input"
              type="text"
              id="register-username"
              name="register-username"
              placeholder="Enter your username"
              value={registerUsername}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              minLength='2'
              required />
            <span id="register-username-error" className={usernameInputErrorClass}>
              {errors['register-username']}
            </span>
          </label>
        </div>
      </div>
    </PopupWithForm>
  )
}

export default Register;