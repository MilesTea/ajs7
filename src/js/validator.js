class Validator {
  validateUsername(username) {
    return (new RegExp(`${
      /^([a-zA-Z])/.source // Начало строки (содержит только латинские буквы)
    }${/([a-zA-Z-_]|[0-9]{0,2}(?![0-9]))+/.source // Середина (латинские буквы, цифры, тире, нижнее подчеркивание, не допускается 3 цифры подряд)
    }${/([a-zA-Z])$/.source}`)) // Конец строки (содержит только латинские буквы)
      .test(username);
  }
}

export default Validator;
