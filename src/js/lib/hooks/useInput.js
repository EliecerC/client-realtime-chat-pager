import { useState } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    inputProps: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

export default useInput;
