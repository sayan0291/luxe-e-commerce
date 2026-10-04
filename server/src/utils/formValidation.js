import { z } from 'zod';

const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 📝 1. BACKEND REGISTRATION SCHEMA
export const registerBackendSchema = z.object({
  body: z.object({
    firstName: z.string().min(1, "First name is required").trim(),
    lastName: z.string().min(1, "Last name is required").trim(),
    email: z
      .string()
      .min(1, "Email is required")
      .trim()
      .email("Invalid email structure")
      .regex(strictEmailRegex, "Please enter a valid email address"),
    password: z
      .string()
      .min(5, "Minimum 5 characters required")
      .max(12, "Maximum 12 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  })
});

// 🔑 2. BACKEND LOGIN SCHEMA (Minimal & Safe)
export const loginBackendSchema = z.object({
  body: z.object({
    email: z.string().min(1, "Email is required").trim().email("Invalid email structure"),
    password: z.string().min(1, "Password is required"), // No regex here!
  })
});
