import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AddSvg = (props: SvgProps) => (
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
      strokeWidth={2}
      d="M12 5v14M5 12h14"
    />
  </Svg>
);
export default AddSvg;
