import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PasswordHideSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#7F7F7F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.25 1.533a7.6 7.6 0 0 1 1.75-.2C15.834 1.333 19.167 8 19.167 8a15.414 15.414 0 0 1-1.8 2.658m-5.6-.891a2.5 2.5 0 1 1-3.534-3.534m6.717 6.717A8.391 8.391 0 0 1 10 14.667C4.167 14.667.833 8 .833 8A15.375 15.375 0 0 1 5.05 3.05l9.9 9.9Z"
    />
  </Svg>
);
export default PasswordHideSvg;
