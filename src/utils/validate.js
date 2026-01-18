export const checkValidData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmailValid) {
    return { isValid: false, message: "Please enter a valid email address." };
  }

  if (!isPasswordValid) {
    return { isValid: false, message: "Please enter a valid password." };
  }

  return { isValid: true, message: null };
};
