import React from 'react';

/**
 * A custom hook to use form and enable validation on form fields
 *
 * @param {Array} inputNamesArr - An array of names of all the input fields of the form.
 * @returns {Object} - An object having all the necessary properties and methods to work with the form and enable validation.
 */
export function useFormAndValidation(inputNamesArr) {
  // Set initial values for inputs of the form
  const initialValues = {};
  const initialInputsState = {};
  inputNamesArr.map(inputName => initialValues[inputName] = '');
  inputNamesArr.map(inputName => initialInputsState[inputName] = false);
  const [ values, setValues ]              = React.useState(initialValues);
  const [ errors, setErrors ]              = React.useState(initialValues);
  const [ inputsTouched, setInputsTouched] = React.useState(initialInputsState);

  const [ isValid, setIsValid ] = React.useState(true);

  // Event handler for change event on form inputs
  const handleInputChange = (e, customValidationMessage) => {
    const {name, value, validity } = e.target;
    const validationMessage = `${(!validity.valid) ? customValidationMessage : ``}`
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: validationMessage});
    setIsValid(e.target.closest('form').checkValidity());
  };

  // Event handler for blur event on form inputs
  const handleInputBlur = (e) => {
    const { name } = e.target;
    setInputsTouched({...inputsTouched, [name]: true});
  }

  // Event handler for focus event on form inputs
  const handleInputFocus = (e) => {
    const { name } = e.target;
    setInputsTouched({...inputsTouched, [name]: false});
  }

  // Reset all the form inputs
  const resetForm = React.useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { isValid, values, errors, inputsTouched, handleInputChange, handleInputBlur, handleInputFocus, resetForm };
}
