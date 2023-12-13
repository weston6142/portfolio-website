import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import {
  Billboard,
  Center,
  GradientTexture,
  Html,
  OrbitControls,
  Stage,
  Text3D,
} from "@react-three/drei";
import { Vector3 } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";
import { useControls } from "leva";
import StaticWebsite from "./StaticWebsite";

// setup Experience component

const ScrollControl = () => {
  const { camera } = useThree();
  const minY = -10; // Define minimum Z value
  const maxY = 2; // Define maximum Z value
  const moveAmount = 0.002; // Adjust move sensitivity

  // Touch state reference
  const touchState = useRef({
    isTouching: false,
    startTouchY: 0,
    endTouchY: 0,
  });

  // Handler for mouse wheel scroll
  const handleWheel = (event) => {
    const delta = event.deltaY * moveAmount;
    camera.position.y = Math.max(
      minY,
      Math.min(camera.position.y + delta, maxY)
    );
  };

  // Handlers for touch events
  const handleTouchStart = (event) => {
    touchState.current.isTouching = true;
    touchState.current.startTouchY = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    if (!touchState.current.isTouching) return;
    touchState.current.endTouchY = event.touches[0].clientY;
    const delta =
      (touchState.current.startTouchY - touchState.current.endTouchY) *
      moveAmount;
    camera.position.y = Math.max(
      minY,
      Math.min(camera.position.y + delta, maxY)
    );
  };

  const handleTouchEnd = () => {
    touchState.current.isTouching = false;
  };

  useEffect(() => {
    console.log(camera);
    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
    // Ensure effect runs once on mount and cleanup on unmount
  }, []);

  return null;
};

const Experience = (props) => {
  const { x1, y1, z1 } = useControls({
    x1: {
      value: -3,
      min: -10,
      max: 10,
      step: 0.1,
    },
    y1: {
      value: 3.1,
      min: -10,
      max: 10,
      step: 0.1,
    },
    z1: {
      value: 1.7,
      min: -10,
      max: 10,
      step: 0.1,
    },
  });

  const { x2, y2, z2 } = useControls({
    x2: {
      value: 2.4,
      min: -10,
      max: 10,
      step: 0.1,
    },
    y2: {
      value: 3.2,
      min: -10,
      max: 10,
      step: 0.1,
    },
    z2: {
      value: 1.7,
      min: -10,
      max: 10,
      step: 0.1,
    },
  });

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 2, 7], fov: 50, near: 1, far: 20 }}
    >
      {/* <color attach="background" args={["#202020"]} /> */}
      <color attach="background" args={["black"]} />

      {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
      <fog attach="fog" args={["black", 5, 20]} />

      <ambientLight intensity={1} />
      {/* <ambientLight intensity={0.095} /> */}

      <Scene x1={x1} y1={y1} z1={z1} x2={x2} y2={y2} z2={z2} />
      {/* <Html as="div" position={[0, 0, 0]} /> */}
      <Billboard position={[-5, 2, 0]}>
        <Text3D font={"/Roboto_Regular.json"} size={0.25}>
          Weston Bushyeager
          <meshStandardMaterial>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshStandardMaterial>
        </Text3D>
      </Billboard>
      <Billboard position={[-5, 1.5, 0]}>
        <Text3D font={"/Roboto_Regular.json"} size={0.15}>
          Software Engineer
          <meshStandardMaterial>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshStandardMaterial>
        </Text3D>
      </Billboard>
      <Html position={[-5, -0.5, 0]} scale={100}>
        <StaticWebsite />
      </Html>

      <axesHelper args={[1]} />
      {/* <OrbitControls /> */}
      <ScrollControl />
    </Canvas>
  );
};

function Scene({ x1, y1, z1, x2, y2, z2 }) {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
  const depthBuffer = useDepthBuffer({ frames: 1 });
  // const { nodes, materials } = useGLTF(
  //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dragon/model.gltf"
  // );

  // create use controls for MovingSpot position

  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/react-logo/model.gltf"
  );
  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        // color="#000077"
        color="#00b2d2"
        position={[x1, y1, z1]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        // color="#6A2ECD"
        color="#00b2d2"
        position={[x2, y2, z2]}
      />
      <primitive object={scene} color={"white"} />
      <mesh position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
    </>
  );
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={10}
      {...props}
    />
  );
}

export default Experience;
