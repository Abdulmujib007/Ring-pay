import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowDownSvg = (props: SvgProps) => (
  <Svg
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11.666 1.5-5 5-5-5"
    />
  </Svg>
);
export default ArrowDownSvg;
