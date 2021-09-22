import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleInput = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const reset = () => {
    setValues(initialValues);
  };

  return [values, handleInput, reset];
};
