import { createStackNavigator } from "@react-navigation/stack";
import Cards from "../../screens/Cards";
import SIngleCardPage from "../../screens/SingleCardPage";
import FundCard from "../../screens/FundCard";
import AddCard from "../../screens/AddCard";
import EnterPin from "../../screens/EnterPin";
import WithdrawFund from "../../screens/WithdrawFund";
import ChangePin from "../../screens/ChangePin";


const Stack = createStackNavigator()


const CardTabs = () => {
  const {Navigator,Screen} = Stack
    return (
        <Navigator screenOptions={{headerShown:false}} >
            <Screen name="card" component={Cards} />
           <Screen name="singlecard" component={SIngleCardPage}  /> 
           <Screen name="addCard" component={AddCard} />
           <Screen name="fundCard" component={FundCard} />
           <Screen name='enterPin' component={EnterPin} />
           <Screen name='withdrawal' component={WithdrawFund} />
           <Screen name='changePin' component={ChangePin}  />
        </Navigator>
  )
}

export default CardTabs