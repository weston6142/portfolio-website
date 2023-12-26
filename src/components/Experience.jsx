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
  ScreenSpace,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import StaticWebsite from "./StaticWebsite";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import { useSpring, animated } from "@react-spring/three";

const AnimatedText3D = animated(Text3D);

const AnimatedLinkedInIcon = animated(LinkedInIcon);

export default function Experience() {
  // add a useState to see if the intro has been played
  const [introPlayed, setIntroPlayed] = useState(false);
  // const gltf = useGLTF("/models/model.glb");

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
    </Canvas>
  );
}

function Intro({ introPlayed, setIntroPlayed }) {
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
  const minY = -10; // Define minimum Z value
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
  const [showScreen, setShowScreen] = useState(false);
  const previousY = useRef(camera.position.y);
  const aboutSectionHeight = -1.5;
  const experienceSectionHeight = -3.5;
  const projectsSectionHeight = -6.5;
  const [aboutSectionText, setAboutSectionText] = useState("--- About");
  const [experienceSectionText, setExperienceSectionText] =
    useState("--- Experience");
  const [projectsSectionText, setProjectsSectionText] =
    useState("--- Projects");

  const [spring, setSpring] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 180, friction: 12 },
  }));

  const [linkedInSpring, setLinkedInSpring] = useSpring(() => ({
    rotation: [0, 0.5, 0],
    config: { mass: 1, tension: 180, friction: 12 },
  }));

  useFrame(() => {
    const deltaY = camera.position.y - previousY.current;
    previousY.current = camera.position.y;

    setShowScreen(camera.position.y <= thresholdY);

    // Define the spring effect you want. Here's an example:
    // If the camera moves down, rotate the text forward.
    if (deltaY < 0) {
      setSpring({ rotation: [-0.5, 0, 0] });
      setLinkedInSpring({ rotation: [-0.5, 0.5, 0] });
    } else if (deltaY > 0) {
      // If the camera moves up, rotate the text backward.
      setSpring({ rotation: [0.5, 0, 0] });
      setLinkedInSpring({ rotation: [0.5, 0.5, 0] });
    } else {
      // Return to the original rotation when movement stops
      setSpring({ rotation: [0, 0, 0] });
      setLinkedInSpring({ rotation: [0, 0.5, 0] });
    }

    if (
      (camera.position.y <= aboutSectionHeight) &
      (camera.position.y > experienceSectionHeight)
    ) {
      setAboutSectionText("------ About");
      setExperienceSectionText("--- Experience");
      setProjectsSectionText("--- Projects");
    } else if (
      (camera.position.y <= experienceSectionHeight) &
      (camera.position.y > projectsSectionHeight)
    ) {
      setAboutSectionText("--- About");
      setExperienceSectionText("------ Experience");
      setProjectsSectionText("--- Projects");
    } else if (camera.position.y <= projectsSectionHeight) {
      setAboutSectionText("--- About");
      setExperienceSectionText("--- Experience");
      setProjectsSectionText("------ Projects");
    } else {
      setAboutSectionText("--- About");
      setExperienceSectionText("--- Experience");
      setProjectsSectionText("--- Projects");
    }
  });

  if (!showScreen) {
    return null;
  }
  return (
    <>
      <ScreenSpace depth={1}>
        <AnimatedText3D
          scale={0.01}
          font={"/Roboto_Regular.json"}
          position={[-0.2, 0.05, 0]}
          {...spring}
        >
          <meshBasicMaterial color={"#00b2d2"} toneMapped={false} />
          {"Weston Bushyeager"}
        </AnimatedText3D>
        <AnimatedText3D
          scale={0.009}
          font={"/Roboto_Regular.json"}
          position={[-0.2, 0.035, 0]}
          {...spring}
        >
          <meshBasicMaterial color={"#00b2d2"} toneMapped={false} />
          {"Software Engineer"}
        </AnimatedText3D>
        <AnimatedText3D
          scale={0.007}
          font={"/Roboto_Regular.json"}
          position={[-0.2, 0.02, 0]}
          {...spring}
        >
          <meshBasicMaterial color={"white"} toneMapped={false} />
          {"I build software that solves problems."}
        </AnimatedText3D>
        <AnimatedText3D
          scale={0.006}
          font={"/Roboto_Regular.json"}
          position={[-0.2, 0.0, 0]}
          {...spring}
        >
          <meshBasicMaterial color={"white"} toneMapped={false} />
          {aboutSectionText}
        </AnimatedText3D>
        <AnimatedText3D
          scale={0.006}
          font={"/Roboto_Regular.json"}
          position={[-0.2, -0.01, 0]}
          {...spring}
        >
          <meshBasicMaterial color={"white"} toneMapped={false} />
          {experienceSectionText}
        </AnimatedText3D>
        <AnimatedText3D
          scale={0.006}
          font={"/Roboto_Regular.json"}
          position={[-0.2, -0.02, 0]}
          {...spring}
        >
          <meshBasicMaterial color={"white"} toneMapped={false} />
          {projectsSectionText}
        </AnimatedText3D>

        <AnimatedLinkedInIcon
          position={[-0.2, -0.1, 0]}
          scale={0.005}
          {...linkedInSpring}
        />
      </ScreenSpace>
      <EffectComposer multisampling={8}>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={0.3}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.2}
        />
      </EffectComposer>
    </>
  );
};

export function LinkedInIcon(props) {
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
        <meshBasicMaterial color={"white"} toneMapped={false} />
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
