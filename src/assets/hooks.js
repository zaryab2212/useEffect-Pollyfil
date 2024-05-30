import { useRef } from "react";

export const usemyEffect = (fn, dep) => {
  const isFirstRender = useRef(true);
  const depRef = useRef([]);

  // check if it is first render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanUp = fn();

    return () => {
      cleanUp && typeof cleanUp === "function" && cleanUp();
    };
  }

  //check if dep is not change or no dep
  if (dep ? JSON.stringify(dep) !== JSON.stringify(depRef.current) : true) {
    const cleanUp = fn();

    return () => {
      cleanUp && typeof cleanUp === "function" && dep && cleanUp();
    };
  }

  //setting new dep as dep
  depRef.current = dep || [];
};
