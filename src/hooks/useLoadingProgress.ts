import { useState, useEffect } from "react";

const useLoadingProgress = (intervalTime = 30) => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setLoadingComplete(true);
          return 100;
        }
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [intervalTime]);

  return { progress, loadingComplete };
};

export default useLoadingProgress;
