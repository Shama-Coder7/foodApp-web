import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    });

    window.addEventListener('online', () => {
      setOnlineStatus(true);
    });
  });

  //   The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

  return onlineStatus;
};

export default useOnlineStatus;
