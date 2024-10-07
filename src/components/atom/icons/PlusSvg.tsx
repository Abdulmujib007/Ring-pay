import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PlusSvg = (props: SvgProps) => (
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
      d="M9.5 3.75v10.5M4.25 9h10.5"
    />
  </Svg>
);
export default PlusSvg;
