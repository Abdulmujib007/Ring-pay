import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BackSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 13 1 7l6-6"
    />
  </Svg>
);
export default BackSvg;
