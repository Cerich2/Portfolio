import { useSpring, animated } from "react-spring";

const LoopProp = ({ absolute }) => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });

  return (
    <animated.div
      style={{
        width: "4vh",
        height: "4vh",
        backgroundColor: "#46e891",
        borderRadius: "1vh",
        position: absolute && "absolute",
        top: "1.6vh",
        left: "12vh",
        ...styles,
      }}
    />
  );
};

export default LoopProp;
