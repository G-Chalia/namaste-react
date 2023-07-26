import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handlOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handlOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handlOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
