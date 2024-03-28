import { useCallback } from "react";
import { useState } from "react";

export const useCount = ({ defaultValue = 0, step = 1 } = {}) => {
  const [amount, setAmount] = useState(defaultValue);

  const decrement = useCallback(
    () => setAmount((currentAmount) => currentAmount - step),
    [step]
  );
  const increment = useCallback(
    () => setAmount((currentAmount) => currentAmount + step),
    [step]
  );

  return { amount, decrement, increment };
};
