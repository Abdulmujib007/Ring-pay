import React, { forwardRef, ReactNode, useMemo } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'

type Ref = BottomSheet
interface Props {
    // startIndex : 0 | 1 | 2 | 3 ;
    children: ReactNode
}

const CustomButtomSheet = forwardRef<Ref,Props>((props,ref) => {
            const snapPoint = useMemo(() => [ '75%'],[])
  return (
        <BottomSheet
        // waitFor={}
        // backgroundStyle={}
        style={{shadowColor:'#a4a4a4',shadowOffset:{height:4,width:0},shadowRadius:5,shadowOpacity:2,}}
        snapPoints={snapPoint} 
         ref={ref}
        //  index={props.startIndex}
        //  enablePanDownToClose
         >
            {props.children}
        </BottomSheet>
  )
})

export default CustomButtomSheet