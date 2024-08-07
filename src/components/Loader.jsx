import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  // TODO: try implementing 3D loaders. Search on internet
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vh] rounded-full">
          Click and turn to explore iPhone.
        </div>
      </div>
    </Html>
  );
};

export default Loader;
