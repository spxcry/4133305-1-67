import { FC } from "react";
import { FormFieldProps } from "./types";

const FormField: FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  required,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      {...register(name, { valueAsNumber })}
    />
    {error && <span>{error.message}</span>}
  </>
);

FormField.defaultProps = {
  required: false,
};

export default FormField;
