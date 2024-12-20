import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const CopySvg = (props: SvgProps) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <G
      
      stroke="#D7D7D7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M10 4.5H5.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1Z" />
      <Path d="M2.5 7.5H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v.5" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CopySvg;
