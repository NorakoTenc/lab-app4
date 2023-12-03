import { useState, useEffect } from 'react';

const useStatus = () => {
  const [status, setStatus] = useState('initial');

  useEffect(() => {
    setStatus('loaded');
  }, []);

  return status;
};

export default useStatus;
