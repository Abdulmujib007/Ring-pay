import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const UseAnotherAccountSvg = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <G
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" />
      <Path d="M16 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <Path d="M7.975 24.925a9.001 9.001 0 0 1 16.05 0" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UseAnotherAccountSvg;
