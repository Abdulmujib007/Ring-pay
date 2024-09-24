import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RingPaySvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M13.828 6.805c.459-1 1.658-1.452 2.546-.803a9.958 9.958 0 1 1-12.369.493c.834-.718 2.065-.362 2.602.597.538.96.16 2.158-.571 2.98a5.976 5.976 0 0 0 4.702 9.94A5.974 5.974 0 0 0 14.634 9.73c-.793-.761-1.266-1.926-.806-2.925ZM13.053 2.553a2.553 2.553 0 1 1-5.106 0 2.553 2.553 0 0 1 5.106 0Z"
    />
  </Svg>
);
export default RingPaySvg;
