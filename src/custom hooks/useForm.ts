import { ChangeEvent,   useState } from "react";

export const useForm = <T>(initialValues:T) => {
  const [values, setValues] = useState(initialValues);

  const handleInput = (event : ChangeEvent<HTMLInputElement>):void  => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const reset= ():void  => {
    setValues(initialValues);
  };

  return [values, handleInput, reset];
};
