import React      from 'react';
import PropTypes  from 'prop-types';
import './PopupWithForm.css';

/**
 * The **PopupWithForm** component representing a popup with a form in it
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function PopupWithForm(props) {
  const { children }                                       = props;
  const { onClose, onSubmit, onInlineBtnClick }            = props;
  const { name, title, btnLabel, isOpen, inlineBtnLabel }  = props;
  const formRef                                            = React.createRef();
  const [isFormValid, setIsFormValid]                      = React.useState(false);

  React.useEffect(() => {
    setIsFormValid(formRef.current.checkValidity());
  }, [isOpen, formRef]);

  const handleChange = () => {
    setIsFormValid(formRef.current.checkValidity());
  }

  const submitButtonClassName = `popup__submit ${!isFormValid && `popup__submit_disabled`}`;

  return (
    <div className={`popup popup_rel_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <form
          className="popup__form"
          name={name}
          action="#"
          ref={formRef}
          onSubmit={onSubmit}
          onChange={handleChange}
          noValidate>

            <h2 className='popup__title'>{title}</h2>

            {children}

            <button className={submitButtonClassName} type="submit" aria-label={`${btnLabel} ${name}`}>
              {btnLabel}
            </button>

        </form>
        <button className="popup__close-btn" type="button" aria-label="Close popup" onClick={onClose} />
        <p className="popup__msg">
          or 
          <button className="popup__inline-btn" type="button" aria-label={inlineBtnLabel}  onClick={onInlineBtnClick}>
            {inlineBtnLabel}
          </button>
        </p>
      </div>
    </div>
  );
}

PopupWithForm.propTypes = {
  children  : PropTypes.any,
  onClose   : PropTypes.func.isRequired,
  onSubmit  : PropTypes.func.isRequired,
  name      : PropTypes.string.isRequired,
  title     : PropTypes.string.isRequired,
  btnLabel  : PropTypes.string.isRequired,
  isOpen    : PropTypes.bool,
}

export default PopupWithForm;
