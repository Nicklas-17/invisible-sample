import React from "react";
import Rive, {
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
  useRive,
} from "@rive-app/react-canvas";
import Styles from "./Menu.module.css";

const Menu = () => {
  const { rive, RiveComponent } = useRive({
    src: "/assets/rive/invisible.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.TopCenter }),
  });

  return (
    <div className={Styles.container}>
      <RiveComponent />
    </div>
  );
};

export default Menu;
