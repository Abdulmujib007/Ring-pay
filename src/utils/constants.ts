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

interface PropParams {
    lastFourDigits:number;
    image : ImageSourcePropType;
    balance:number;
    expiryDate:string;
    cvv:number;
    cardName:string;
    id:number
}

export const CardData : PropParams[] = [
    {
        image: require('../assets/debit-cards1.png'),
        balance:250.03,
        cardName:'John Doe',
        cvv:143,
        expiryDate:'11/25',
        lastFourDigits:4589,
        id:0
    },
     {
        image: require('../assets/debit-cards2.png'),
        balance:150.00,
        cardName:'Mujib Doe',
        cvv:123,
        expiryDate:'11/27',
        lastFourDigits:7678,
        id:1
    },
     {
        image: require('../assets/debit-cards3.png'),
        balance:500.00,
        cardName:'John Mujib',
        cvv:812,
        expiryDate:'12/24',
        lastFourDigits:1234,
        id:2
    },
     {
        image: require('../assets/debit-cards4.png'),
        balance:1000,
        cardName:'Abdul Mujib',
        cvv:143,
        expiryDate:'05/24',
        lastFourDigits:9876,
        id:3
    },
     {
        image: require('../assets/debit-cards5.png'),
        balance:10.00,
        cardName:'Dumb Ass',
        cvv:419,
        expiryDate:'01/60',
        lastFourDigits:4191,
        id:4
    }
]