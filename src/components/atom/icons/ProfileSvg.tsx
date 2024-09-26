import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ProfileSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M8 8A3.75 3.75 0 1 0 8 .5 3.75 3.75 0 0 0 8 8Zm5.919 7.5c.772 0 1.366-.701 1.09-1.424a7.502 7.502 0 0 0-14.019 0c-.275.723.318 1.424 1.09 1.424H13.92Z"
    />
  </Svg>
);
export default ProfileSvg;
