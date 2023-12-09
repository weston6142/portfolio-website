import React, { useRef } from "react";
import * as THREE from "three";
import { OrbitControls, Stage } from "@react-three/drei";
import { Vector3 } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";
import { useControls } from "leva";

// setup Experience component

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
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2, 7], fov: 50, near: 1, far: 20 }}
    >
      {/* <color attach="background" args={["#202020"]} /> */}
      <color attach="background" args={["black"]} />

      {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
      <fog attach="fog" args={["black", 5, 20]} />

      <ambientLight intensity={0.095} />
      <Scene x1={x1} y1={y1} z1={z1} x2={x2} y2={y2} z2={z2} />
      <axesHelper args={[1]} />
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
        color="#000077"
        position={[x1, y1, z1]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#6A2ECD"
        position={[x2, y2, z2]}
      />
      {/* <mesh
        position={[0, -1.03, 0]}
        castShadow
        receiveShadow
        geometry={nodes.dragon.geometry}
        material={materials["Default OBJ.001"]}
        dispose={null}
      /> */}
      <primitive receiveShadow castShadow object={scene} />
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color={"#eeeeee"} />
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
      castShadow
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
