import * as THREE from "three";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Reflector,
  Text,
  Text3D,
  useTexture,
  useGLTF,
  Html,
  Billboard,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import StaticWebsite from "./StaticWebsite";
import { useSpring, a } from "@react-spring/three";

export default function Experience() {
  // add a useState to see if the intro has been played
  const [introPlayed, setIntroPlayed] = useState(false);

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
          {/* <Carla
            rotation={[0, Math.PI - 0.4, 0]}
            position={[-1.2, 0, 0.6]}
            scale={[0.26, 0.26, 0.26]}
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
      <NavBillboard />
    </Canvas>
  );
}

function Intro({ introPlayed, setIntroPlayed }) {
  const [vec] = useState(() => new THREE.Vector3());

  return useFrame((state) => {
    const x = Math.round(state.camera.position.x);
    const y = Math.round(state.camera.position.y);
    const z = Math.round(state.camera.position.z);
    console.log(x, y, z);
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

// function Carla(props) {
//   const { scene } = useGLTF("/carla-draco.glb");
//   return <primitive object={scene} {...props} />;
// }

function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: props.clip,
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <Text font="/Inter-Bold.woff" letterSpacing={-0.06} {...props}>
      {props.text}
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
}

function Ground() {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[10, 10]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

const ScrollControl = () => {
  const { camera } = useThree();
  const minY = -6; // Define minimum Z value
  const maxY = 1; // Define maximum Z value
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

const NavBillboard = () => {
  const { camera } = useThree();
  const thresholdY = -1.5; // Define the threshold Y position
  const [billboardY, setBillboardY] = useState(-2);

  useFrame(() => {
    if (camera.position.y <= thresholdY) {
      setBillboardY(camera.position.y);
    } else {
      setBillboardY(-2);
    }
  });

  return (
    <Billboard position={[-3, billboardY, 0]}>
      <Text3D scale={0.2} font={"/Roboto_Regular.json"}>
        <meshNormalMaterial />
        {"Weston Bushyeager"}
      </Text3D>
    </Billboard>
  );
};

// const NavBillboard = () => {
//   const { camera } = useThree();
//   const thresholdY = -1.5; // Define the threshold Y position
//   const [billboardY, setBillboardY] = useState(-2);

//   const props = useSpring({
//     position: [-3, billboardY, 0],
//   });

//   useFrame(() => {
//     if (camera.position.y <= thresholdY) {
//       setBillboardY(camera.position.y);
//     } else {
//       setBillboardY(-2);
//     }
//   });

//   return (
//     <a.Billboard {...props}>
//       <Text3D scale={0.2} font={"/Roboto_Regular.json"}>
//         <meshNormalMaterial />
//         {"Weston Bushyeager"}
//       </Text3D>
//     </a.Billboard>
//   );
// };
