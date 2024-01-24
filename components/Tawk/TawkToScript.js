// TawkToScript.js
import { useEffect } from "react";

export const TawkToScript = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = "https://embed.tawk.to/65b140e78d261e1b5f5780df/1hku7oter";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    s0.parentNode.insertBefore(s1, s0);

    return () => {
      // Cleanup if needed when the component is unmounted
      s1.remove();
    };
  }, []);

  return null;
};
