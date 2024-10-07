import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const DetailsSvg = (props: SvgProps) => (
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
      d="M8.5 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
    />
  </Svg>
);
export default DetailsSvg;
