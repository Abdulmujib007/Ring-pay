import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CancelSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2.92.33a1.125 1.125 0 0 0-1.59 1.59L5.41 6l-4.08 4.08a1.125 1.125 0 1 0 1.59 1.59L7 7.59l4.08 4.08a1.126 1.126 0 1 0 1.59-1.59L8.59 6l4.08-4.08A1.125 1.125 0 0 0 11.08.33L7 4.41 2.92.33Z"
    />
  </Svg>
);
export default CancelSvg;
