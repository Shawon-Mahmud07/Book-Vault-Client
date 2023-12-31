import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const useAos = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    return () => {
      AOS.refresh();
    };
  }, []);
};

export default useAos;
