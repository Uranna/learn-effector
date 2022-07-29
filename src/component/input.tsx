import { useState } from "react";

interface IProps {
  name: string;
  defaultValue?: string;
  type?: "text" | "password";
  _ref?: ({}: any) => void;
}

function Input({ type = "text", _ref, name, defaultValue = "" }: IProps) {
  const [value, setValue] = useState(defaultValue);

  const getValue = () => value;
  const update = (newValue: string) => setValue(newValue);

  if (_ref) {
    _ref({ getValue, update });
  }

  return <input type={type} name={name} value={value} onChange={(e) => update(e.target.value)}/>;
}

export default Input;
