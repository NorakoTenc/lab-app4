import { useEffect } from 'react';

const useConsoleLogger = (data) => {
  useEffect(() => {
    console.log('Data from hook:', data);
  }, [data]);
};

export default useConsoleLogger;