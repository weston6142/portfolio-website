import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Stage } from "@react-three/drei";

const Room = () => {
  const roomMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 }); // Gray color
  const roomGeometry = new THREE.BoxGeometry(1, 1, 1); // Adjust size to your needs

  return (
    <mesh
      geometry={roomGeometry}
      material={roomMaterial}
      position={[100, 0, 0]}
    />
  );
};

const BlueLight = () => (
  <pointLight position={[0, 0, 0]} color={"blue"} intensity={1000} />
);

const PurpleLight = () => (
  <pointLight position={[0, 0, 0]} color={"purple"} intensity={1000} />
);

// setup Experience component
const Experience = (props: any) => {
  return (
    <Canvas>
      <Stage>
        <Room />
      </Stage>
    </Canvas>
  );
};

export default Experience;
