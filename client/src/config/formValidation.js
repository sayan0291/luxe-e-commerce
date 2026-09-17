// export const registerValidationRules = {
//   firstName: {
//     required: "First name is required"
//   },
//   lastName: {
//     required: "Last name is required"
//   },
//   email: {
//     required: "Email address is required",
//     pattern: {
//       value: /\S+@\S+\.\S+/,
//       message: "Please include a valid email format"
//     }
//   },
//   password: {
//     required: "Password is required",
//     validate: {
//       hasLength: (val) => val.length >= 8 || "Must be at least 8 characters long",
//       hasNumber: (val) => /\d/.test(val) || "Must contain at least one digit",
//       hasSpecial: (val) => /[^A-Za-z0-9]/.test(val) || "Must contain at least one special character"
//     }
//   },
//   terms: {
//     required: "You must accept the terms and conditions to continue"
//   }
// };

import { z } from "zod"
const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerValidationRules = z.object({
  firstName: z
              .string()
              .min(1, "First name is required")
              .max(10),
  lastName: z
              .string()
              .min(1, "Second name is required")
              .max(10),
  email: z 
            .string()
            .min(1, "Email is required")
            .trim()
            .email("Invalid email strucuture")
            .regex(strictEmailRegex, "Please enter a valid, strict email address (e.g., name@domain.com)"),
  password: z
              .string()
              .min(5, "Minimum 5 charaters required")
              .max(12, "Maximum 12 characters")
              .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
              .regex(/[a-z]/, "Password must contain at least one lowercase letter")
              .regex(/[0-9]/ , "Password must contain at least one number")
              .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character (@, #, $, etc.)"),
  confirmPassword: z
                      .string()
                      .min(1, "Confirm Your Password"),
  terms: z
          .literal(true, {
            errorMap: () => ({ message: "You must accept the terms and conditions to continue" }),
          }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password does not match",
  path: ["confirmPassword"]
})