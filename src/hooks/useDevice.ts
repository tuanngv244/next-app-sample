import { useEffect, useState } from "react";

export enum EDevice {
  Mobile = "MOBILE",
  Tablet = "TABLET",
  Laptop = "LAPTOP",
  LaptopLarge = "LAPTOP_LARGE",
}

export const useDevice = () => {
  const [screenW, setScreenW] = useState<number>();
  const device = () => {
    if (!screenW) return EDevice.Mobile;
    if (screenW <= 768) return EDevice.Mobile;
    if (768 < screenW && screenW <= 992) return EDevice.Tablet;
    if (992 < screenW && screenW <= 1366) return EDevice.Laptop;
    if (1366 < screenW) return EDevice.LaptopLarge;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenW(window.screen.width);
    }
  }, []);

  return {
    currentScreen: screenW,
    device: device(),
  };
};
