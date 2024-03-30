import { useState } from "preact/hooks";

const useSwitch = (initialState = false) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return { isOn, toggle };
};

export default useSwitch;
