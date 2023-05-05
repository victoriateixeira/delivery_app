const passwordLenght = 6;

const validationInputs = (email, password) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const validationEmail = emailRegex.test(email);
  const validationGeneral = validationEmail && password.length > passwordLenght;
  return validationGeneral;
};

export default validationInputs;
