import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const TransactionSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 4.5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2ZM3 10.5h18M16 2.5v4M8 2.5v4"
    />
  </Svg>
);
export default TransactionSvg;
