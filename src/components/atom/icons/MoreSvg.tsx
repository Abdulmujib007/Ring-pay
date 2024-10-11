import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MoreSvg = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.5 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.5 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
    />
  </Svg>
);
export default MoreSvg;
