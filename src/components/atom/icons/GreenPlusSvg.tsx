import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const GreenPlusSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#41B63E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 3.75v10.5M4.25 9h10.5"
    />
  </Svg>
);
export default GreenPlusSvg;
