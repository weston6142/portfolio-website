import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import theme from "./Theme";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useSpring, animated } from "@react-spring/three";
import { KernelSize } from "postprocessing";
import { ScreenSpace } from "@react-three/drei";
import LinkedInIcon from "./LinkedInIcon";
import { Text3D } from "@react-three/drei";

const AnimatedText3D = animated(Text3D);
const AnimatedLinkedInIcon = animated(LinkedInIcon);

export default function NavBillboard() {
  const { camera } = useThree();
  const thresholdY = -1.5; // Define the threshold Y position
  const [showScreen, setShowScreen] = useState(false);
  const [aboutSectionText, setAboutSectionText] = useState("--- About");

  const [experienceSectionText, setExperienceSectionText] =
    useState("--- Experience");
  const [projectsSectionText, setProjectsSectionText] =
    useState("--- Projects");

  const previousY = useRef(camera.position.y);
  const aboutSectionHeight = -1.5;
  const experienceSectionHeight = -3.5;
  const projectsSectionHeight = -6.5;

  const handleAboutClick = (event) => {
    event.stopPropagation();
    camera.position.y = aboutSectionHeight - 1;
  };
  const handleExperienceClick = (event) => {
    event.stopPropagation();
    camera.position.y = experienceSectionHeight - 3;
  };

  const handleProjectsClick = (event) => {
    event.stopPropagation();
    camera.position.y = projectsSectionHeight - 3;
  };
  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "auto";
  };

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
          <meshBasicMaterial color={theme.colors.primary} toneMapped={false} />
          {"Weston Bushyeager"}
        </AnimatedText3D>
        <AnimatedText3D
          scale={0.009}
          font={"/Roboto_Regular.json"}
          position={[-0.2, 0.035, 0]}
          {...spring}
        >
          <meshBasicMaterial color={theme.colors.primary} toneMapped={false} />
          {"Software Engineer"}
        </AnimatedText3D>
        <AnimatedText3D
          scale={0.007}
          font={"/Roboto_Regular.json"}
          position={[-0.2, 0.02, 0]}
          {...spring}
        >
          <meshBasicMaterial color={theme.colors.white} toneMapped={false} />
          {"I build software that solves problems."}
        </AnimatedText3D>
        <group
          position={[-0.2, 0.0, 0]}
          onClick={handleAboutClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <AnimatedText3D
            scale={0.006}
            font={"/Roboto_Regular.json"}
            {...spring}
          >
            <meshBasicMaterial color={theme.colors.white} toneMapped={false} />
            {aboutSectionText}
          </AnimatedText3D>
        </group>
        <group
          position={[-0.2, -0.01, 0]}
          onClick={handleExperienceClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <mesh scale={0.1} position={[0.025, 0.003, 0]}>
            <planeGeometry args={[0.5, 0.1]} />
            <meshBasicMaterial visible={false} />
          </mesh>
          <AnimatedText3D
            scale={0.006}
            font={"/Roboto_Regular.json"}
            {...spring}
          >
            <meshBasicMaterial color={theme.colors.white} toneMapped={false} />
            {experienceSectionText}
          </AnimatedText3D>
        </group>
        <group
          position={[-0.2, -0.02, 0]}
          onClick={handleProjectsClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <mesh scale={0.1} position={[0.025, 0.003, 0]}>
            <planeGeometry args={[0.5, 0.1]} />
            <meshBasicMaterial visible={false} />
          </mesh>
          <AnimatedText3D
            scale={0.006}
            font={"/Roboto_Regular.json"}
            {...spring}
          >
            <meshBasicMaterial color={theme.colors.white} toneMapped={false} />
            {projectsSectionText}
          </AnimatedText3D>
        </group>

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
}
