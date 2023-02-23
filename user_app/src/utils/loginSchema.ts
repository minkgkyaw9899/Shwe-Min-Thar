import * as yup from "yup"

export const LoginSchema = yup
    .object({
        email: yup
            .string()
            .email("Invalid email format")
            .required("Email is required"),
        password: yup
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(120, "Password must be lower than 120 characters")
            .required("Password is required"),
    })
    .required()
