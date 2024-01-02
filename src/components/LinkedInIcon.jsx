import { useGLTF } from "@react-three/drei";
import theme from "./Theme";

export default function LinkedInIcon(props) {
  const { nodes } = useGLTF("/models/linkedin.glb");

  const handleClick = (event) => {
    event.stopPropagation();
    console.log("clicked");
    window.open("https://www.linkedin.com/in/westonbushyeager/", "_blank");
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "auto";
  };

  return (
    <group
      {...props}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <mesh
        geometry={nodes.Cube.geometry}
        position={[1.794, 2.483, 0.204]}
        rotation={[0, -0.351, 0]}
        scale={[1.679, 1.75, 0.33]}
      >
        <meshBasicMaterial color={theme.colors.white} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Curve004.geometry}
        position={[-0.101, 0.601, -0.404]}
        rotation={[Math.PI / 2, 0, 0.351]}
        scale={[26.806, 76.801, 26.806]}
      >
        <meshBasicMaterial color={"#0077b5"} toneMapped={false} />
      </mesh>
    </group>
  );
}
