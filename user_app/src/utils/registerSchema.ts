import * as yup from "yup"

export const RegisterSchema = yup
    .object({
        name: yup
            .string()
            .min(3, "Name must be at least 3 characters")
            .max(120, "Name must be lower than 120 characters")
            .required("Name is required"),
        email: yup
            .string()
            .email("Invalid email format")
            .required("Email is required"),
        password: yup
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(120, "Password must be lower than 120 characters")
            .required("Password is required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), ""], "Password must match")
            .required("Confirm Password is required"),
    })
    .required()
