export const registerValidationRules = {
  firstName: {
    required: "First name is required"
  },
  lastName: {
    required: "Last name is required"
  },
  email: {
    required: "Email address is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Please include a valid email format"
    }
  },
  password: {
    required: "Password is required",
    validate: {
      hasLength: (val) => val.length >= 8 || "Must be at least 8 characters long",
      hasNumber: (val) => /\d/.test(val) || "Must contain at least one digit",
      hasSpecial: (val) => /[^A-Za-z0-9]/.test(val) || "Must contain at least one special character"
    }
  },
  terms: {
    required: "You must accept the terms and conditions to continue"
  }
};
