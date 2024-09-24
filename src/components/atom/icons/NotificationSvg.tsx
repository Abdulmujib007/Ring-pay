import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";
const NotificationSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.857 17.082c1.863-.22 3.694-.66 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.259 24.259 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    />
    <Circle cx={17} cy={5} r={3} fill="red" />
  </Svg>
);
export default NotificationSvg;
