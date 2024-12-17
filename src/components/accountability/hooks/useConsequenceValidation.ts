import { useState, useEffect } from 'react';
import { validateConsequenceConfig } from '../../../utils/accountability/validationUtils';
import type { Consequence } from '../../../types/accountability';

export const useConsequenceValidation = (consequence: Consequence) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const validationErrors = validateConsequenceConfig(consequence);
    setErrors(validationErrors);
    setIsValid(validationErrors.length === 0);
  }, [consequence]);

  return {
    errors,
    isValid,
    firstError: errors[0] || null
  };
};