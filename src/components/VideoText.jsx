import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";

export default function VideoText(props) {
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
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </Text>
  );
}
