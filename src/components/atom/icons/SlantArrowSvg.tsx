import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SlantArrowSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#4CB4F6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.75 12.75 7.5-7.5M5.75 5.25h7.5v7.5"
    />
  </Svg>
);
export default SlantArrowSvg;
