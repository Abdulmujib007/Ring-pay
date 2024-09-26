import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LogoutSvg = (props: SvgProps) => (
  <Svg
    width={17}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#707070"
      d="M5.25 7a.625.625 0 0 1 .625-.625H11.5V2.312c0-1.25-1.32-2.187-2.5-2.187H3.062A2.19 2.19 0 0 0 .876 2.313v9.374a2.19 2.19 0 0 0 2.188 2.188h6.25a2.19 2.19 0 0 0 2.187-2.188V7.625H5.875A.625.625 0 0 1 5.25 7Zm11.692-.442-3.125-3.125a.625.625 0 0 0-.884.884l2.058 2.058H11.5v1.25h3.491l-2.058 2.058a.625.625 0 1 0 .884.884l3.125-3.125a.625.625 0 0 0 0-.884Z"
    />
  </Svg>
);
export default LogoutSvg;
