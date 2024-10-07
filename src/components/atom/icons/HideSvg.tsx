import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const HideSvg = (props: SvgProps) => (
  <Svg
    width={11}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      stroke="#D7D7D7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.99 4.112A5.239 5.239 0 0 0 .967 6a5.253 5.253 0 0 0 6.465 3.553M3.114 3.114A5.253 5.253 0 0 1 11.032 6a5.26 5.26 0 0 1-2.146 2.886M3.114 3.114 1.5 1.5m1.614 1.614 1.825 1.825m3.947 3.947L10.5 10.5M8.886 8.886 7.061 7.061A1.5 1.5 0 1 0 4.94 4.939m2.12 2.122L4.94 4.94"
    />
  </Svg>
);
export default HideSvg;
