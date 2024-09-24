import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const AvatarSvg = (props: SvgProps) => (
  <Svg
    width={45}
    height={42}
    fill="none"
    {...props}
  >
    <Circle cx={20.5} cy={20.5} r={20.5} fill="#D9D9D9" />
  </Svg>
);
export default AvatarSvg;
