import { useEffect, useState } from "react";

const useImagesLoaded = (imageUrls: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const loadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => {
        if (!isCancelled) setLoaded(true);
      })
      .catch(() => {
        if (!isCancelled) setLoaded(true); // mesmo se alguma falhar, considera como "terminado"
      });

    return () => {
      isCancelled = true;
    };
  }, [imageUrls]);

  return loaded;
};

export default useImagesLoaded;