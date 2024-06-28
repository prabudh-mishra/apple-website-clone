import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import { models, sizes } from "../constants";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const Model = () => {
  // TODO: change the text for Pro max versions while selecting bigger size
  const [size, setSize] = useState("small");
  const [model, setModel] = useState(models[0]);

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);

  //   camera control for model view
  const cameraControlPro = useRef();
  const cameraControlProMax = useRef();

  //   model
  const iphonePro = useRef(new THREE.Group());
  const iphoneProMax = useRef(new THREE.Group());

  //   rotation
  const [iphoneProRotation, setIphoneProRotation] = useState(0);
  const [iphoneProMaxRotation, setIphoneProMaxRotation] = useState(0);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={iphonePro}
              gsapType="view1"
              controlRef={cameraControlPro}
              setRotationState={setIphoneProRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={iphoneProMax}
              gsapType="view2"
              controlRef={cameraControlProMax}
              setRotationState={setIphoneProMaxRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full fixed top-0 bottom-0 left-0 right-0"
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((model) => (
                  <li
                    key={model.id}
                    className="w-6 h-6 rounded-full mx-3 cursor-pointer"
                    style={{ backgroundColor: model.color[0] }}
                    onClick={() => setModel(model)}
                  />
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      background: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
