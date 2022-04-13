import React                      from 'react';
import PropTypes                  from 'prop-types';
import { useFormAndValidation }   from '../../hooks/useFormAndValidation';
import PopupWithForm              from '../PopupWithForm/PopupWithForm';
import './Login.css';

function Login(props){
  const {
    isLoginPopupOpen,
    onSubmit,
    onClose,
    onSignUpClick,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
  }  = props;
  const {
    isValid,
    errors,
    inputsTouched,
    handleInputChange,
    handleInputBlur,
    handleInputFocus,
    resetForm }       = useFormAndValidation(['login-email', 'login-password']);

  // Reset form values every time the popup opens
  React.useEffect(() => {
    const initialValues = {
      'login-email': '',
      'login-password': '',
    };
    setLoginEmail('');
    setLoginPassword('');
    resetForm({...initialValues}, {...initialValues}, true);
  }, [isLoginPopupOpen, resetForm, setLoginEmail, setLoginPassword]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(isValid || (loginEmail && loginPassword)){
      onSubmit();
    }
  }

  const handleChange = (e) => {
    let customValidationMessage = '';
    if(e.target.name === 'login-email'){
      setLoginEmail(e.target.value);
      customValidationMessage = 'Invalid email address';
    }
    if(e.target.name === 'login-password'){
      setLoginPassword(e.target.value);
      customValidationMessage = 'Invalid password';
    }
    handleInputChange(e, customValidationMessage);
  };

  const handleBlur = (e) => handleInputBlur(e);
  const handleFocus = (e) => handleInputFocus(e);

  const emailInputErrorClass    = `login-form__error ${(!isValid && errors['login-email'] && inputsTouched['login-email']) && `login-form__error_visible`}`;
  const passwordInputErrorClass = `login-form__error ${(!isValid && errors['login-password'] && inputsTouched['login-password']) && `login-form__error_visible`}`;

  return (
    <PopupWithForm
      name="login"
      title="Sign in"
      btnLabel="Sign in"
      inlineBtnLabel="Sign up"
      isOpen={isLoginPopupOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      onInlineBtnClick={onSignUpClick}>
        <div className="login-form">
          <div className="login-form__input-group">
            <label className="login-form__label" htmlFor="login-email">
              <span className="login-form__label-text">Email</span>
              <input
                className="login-form__input"
                type="email"
                id="login-email"
                name="login-email"
                placeholder="Enter Email"
                value={loginEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                required />
              <span id="login-email-error" className={emailInputErrorClass}>
                {errors['login-email']}
              </span>
            </label>
          </div>
          <div className="login-form__input-group">
            <label className="login-form__label" htmlFor="login-password">
              <span className="login-form__label-text">Password</span>
              <input
                className="login-form__input"
                type="password"
                id="login-password"
                name="login-password"
                placeholder="Enter Password"
                value={loginPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                minLength='8'
                required />
              <span id="login-password-error" className={passwordInputErrorClass}>
                {errors['login-password']}
              </span>
            </label>
          </div>
        </div>
    </PopupWithForm>
  );
}

export default Login;
