import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CardSvg= (props: SvgProps) => (
  <Svg
    width={18}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M.25 11.688a2.187 2.187 0 0 0 2.188 2.187h13.124a2.188 2.188 0 0 0 2.188-2.188V5.673H.25v6.016Zm2.578-2.97A1.172 1.172 0 0 1 4 7.548h1.875a1.172 1.172 0 0 1 1.172 1.172V9.5a1.172 1.172 0 0 1-1.172 1.172H4A1.172 1.172 0 0 1 2.828 9.5v-.781ZM15.563.126H2.437A2.188 2.188 0 0 0 .25 2.313v1.015h17.5V2.313A2.188 2.188 0 0 0 15.562.124Z"
    />
  </Svg>
);
export default CardSvg;
