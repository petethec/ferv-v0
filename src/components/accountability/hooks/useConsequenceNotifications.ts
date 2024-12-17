import { useState, useEffect } from 'react';
import { getConsequenceNotification } from '../../../utils/accountability/notificationUtils';
import type { Consequence } from '../../../types/accountability';

export const useConsequenceNotifications = (consequence: Consequence) => {
  const [notification, setNotification] = useState<any>(null);

  useEffect(() => {
    const checkNotifications = () => {
      const newNotification = getConsequenceNotification(consequence);
      setNotification(newNotification);
    };

    checkNotifications();
    const interval = setInterval(checkNotifications, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [consequence]);

  return { notification };
};