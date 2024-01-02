import * as THREE from "three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import StaticWebsite from "./StaticWebsite";
import VideoText from "./VideoText";
import Intro from "./Intro";
import Ground from "./Ground";
import ScrollControl from "./ScrollControl";
import NavBillboard from "./NavBillboard";
import FloatingArrow from "./FloatingArrow";

export default function Experience() {
  // add a useState to see if the intro has been played
  const [introPlayed, setIntroPlayed] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  // const gltf = useGLTF("/models/model.glb");

  //create a useEffect to wait 3 seconds after introplayed is set to true to set showArrow to true
  useEffect(() => {
    if (introPlayed === true) {
      setTimeout(() => {
        setShowArrow(true);
      }, 2000);
    }
  });

  return (
    <Canvas
      concurrent
      gl={{ alpha: false }}
      pixelRatio={[1, 1.5]}
      camera={{ position: [0, 3, 100], fov: 15 }}
    >
      <color attach="background" args={["black"]} />
      <fog attach="fog" args={["black", 15, 20]} />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          {/* <primitive
            rotation={[0, Math.PI - 0.4, 0]}
            position={[-1.2, 0, 0.6]}
            scale={[0.26, 0.26, 0.26]}
            object={gltf.scene}
          /> */}
          <VideoText
            position={[-0.7, 1.5, -2]}
            text={"Weston Bushyeager"}
            fontSize={0.7}
            clip={"/waves.mp4"}
          />
          <VideoText
            position={[1, 0.5, 0]}
            text={"Software Engineer"}
            fontSize={0.5}
            clip={"/nebula.mp4"}
          />
          <Ground />
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        <Intro introPlayed={introPlayed} setIntroPlayed={setIntroPlayed} />
      </Suspense>
      {introPlayed ? (
        <Html position={[-2.77, -1.95, 0]} scale={100}>
          <StaticWebsite />
        </Html>
      ) : null}
      <ScrollControl />
      {introPlayed ? <NavBillboard /> : null}
      {showArrow ? <FloatingArrow /> : null}
    </Canvas>
  );
}

// function Carla(props) {
//   const { scene } = useGLTF("/carla-draco.glb");
//   return <primitive object={scene} {...props} />;
// }
