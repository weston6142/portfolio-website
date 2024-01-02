import { useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Intro({ introPlayed, setIntroPlayed }) {
  const [vec] = useState(() => new THREE.Vector3());

  return useFrame((state) => {
    const x = Math.round(state.camera.position.x);
    const y = Math.round(state.camera.position.y);
    const z = Math.round(state.camera.position.z);
    if (introPlayed === true) {
      return;
    } else if (x === 0 && y === 1 && z === 14) {
      setIntroPlayed(true);
      return;
    } else {
      state.camera.position.lerp(
        //   vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
        vec.set(0, 1, 14),

        0.05
      );
      state.camera.lookAt(0, 0, 0);
    }
  });
}
