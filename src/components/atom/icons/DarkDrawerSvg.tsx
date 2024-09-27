import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const DarkDrawerSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M.6 2A1.2 1.2 0 0 1 1.8.8h14.4a1.2 1.2 0 1 1 0 2.4H1.8A1.2 1.2 0 0 1 .6 2Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H1.8A1.2 1.2 0 0 1 .6 8Zm0 6a1.2 1.2 0 0 1 1.2-1.2H9a1.2 1.2 0 0 1 0 2.4H1.8A1.2 1.2 0 0 1 .6 14Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default DarkDrawerSvg;
