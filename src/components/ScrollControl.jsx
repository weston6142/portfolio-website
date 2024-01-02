import { useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function ScrollControl() {
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
}
