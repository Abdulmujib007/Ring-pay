import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ExpensesSvg = (props: SvgProps) => (
  <Svg
    width={18}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M.22.222a.75.75 0 0 1 1.06 0L6 4.942l3.768-3.769a.75.75 0 0 1 1.113.058 20.909 20.909 0 0 1 3.813 7.254l1.574-2.727a.75.75 0 1 1 1.3.75l-2.475 4.286a.75.75 0 0 1-1.025.275L9.782 8.594a.75.75 0 0 1 .75-1.3l2.708 1.565a19.425 19.425 0 0 0-3.012-6.024L6.53 6.533a.75.75 0 0 1-1.06 0L.22 1.283a.75.75 0 0 1 0-1.061Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ExpensesSvg;
