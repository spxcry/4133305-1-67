import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"; 

export type ValidationFields =
  | "name"
  | "email"
  | "url"
  | "exp"
  | "pass"
  | "confirmPass";

export type FormData = {
  name: string;
  email: string;
  url: string;
  exp: number;
  pass: string;
  confirmPass: string;
};

export type FormFieldProps = {
  register: UseFormRegister<FormData>;
  name: ValidationFields;
  error: FieldError | undefined;
  type: string;
  placeholder: string;
  valueAsNumber?: boolean;
  required?: boolean;
};

export const loginSchema: ZodType<FormData> = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  url: z
    .string()
    .url({ message: "Invalid URL" })
    .includes("github.com", { message: "URL must include 'github.com'" }),
  exp: z.number().positive({ message: "Experience must be a positive number" }),
  pass: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  confirmPass: z.string().min(6, { message: "Confirm password must be at least 6 characters long" }),
});
