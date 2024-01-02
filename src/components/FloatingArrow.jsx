import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import theme from "./Theme";

export default function FloatingArrow() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    groupRef.current.position.y = 0.1 * Math.sin(a * 2) - 0.55;
    groupRef.current.position.z = 5;
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI]} scale={0.4}>
      {/* Cylinder (shaft of the arrow) */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 32]} />
        <meshStandardMaterial
          color={theme.colors.grey}
          emissive={theme.colors.grey}
          emissiveIntensity={0.6}
        />
      </mesh>
      {/* Cone (tip of the arrow) */}
      <mesh position={[0, 0.55, 0]}>
        <coneGeometry args={[0.05, 0.2, 32]} />
        <meshStandardMaterial
          color={theme.colors.primary}
          emissive={theme.colors.primary}
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}
