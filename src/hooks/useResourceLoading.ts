import { useState, useEffect } from "react";

const useResourceLoading = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    
    const trackProgress = () => {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) {
            return Math.min(prev + 1, 90);
          }
          return prev;
        });
      }, 30);
    };

    const handleLoad = () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      
      const finalInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1;
          }
          clearInterval(finalInterval);
          setTimeout(() => {
            setLoadingComplete(true);
          }, 500);
          return 100;
        });
      }, 50);
    };

    trackProgress();

    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        setTimeout(handleLoad, 2000);
      } else {
        window.addEventListener('load', handleLoad);
      }
    }

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!loadingComplete) {
        setProgress(100);
        setLoadingComplete(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [loadingComplete]);

  return { progress, loadingComplete };
};

export default useResourceLoading; 