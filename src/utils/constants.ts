import { ImageSourcePropType } from "react-native";

export const quickAccessData = [
    {
        text:'Virtual Cards',
        imageSource :require('../assets/cardSvg.png')
    },
    {
        text:'Bank Accounts',
        imageSource :require('../assets/bank.png')
    },
     {
        text:'Expenses',
        imageSource :require('../assets/zigzag.png')
    }
]

interface TransactionProps {
  time: string;
  method: "Payroll" | "Expenses" | "Fund Wallet" | "Receive Fund";
  amount: string;
  image: ImageSourcePropType;
  amountColor: "#F04343" | "#41B63E";
}

export const transactionData : TransactionProps[] = [
    {
        amount:'$7,200',
        amountColor:"#F04343",
        method :"Payroll",
        image:require('../assets/icon (1).png'),
        time:'2mins ago'
    },
     {
        amount:'$7,200',
        amountColor:"#F04343",
        method :"Payroll",
        image:require('../assets/icon (1).png'),
        time:'2mins ago'
    },
     {
        amount:'$910',
        amountColor:"#F04343",
        method :"Expenses",
        image:require('../assets/icon (2).png'),
        time:'10mins ago'
    },
     {
        amount:'$310',
        amountColor:"#41B63E",
        method :"Fund Wallet",
        image:require('../assets/icon (3).png'),
        time:'10mins ago'
    },
     {
        amount:'$350',
        amountColor:"#41B63E",
        method :"Receive Fund",
        image:require('../assets/icon (4).png'),
        time:'10mins ago'
    }
]