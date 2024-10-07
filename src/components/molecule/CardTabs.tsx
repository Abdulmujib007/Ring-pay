import { createStackNavigator } from "@react-navigation/stack";
import Cards from "../../screens/Cards";
import SIngleCardPage from "../../screens/SingleCardPage";


const Stack = createStackNavigator()


const CardTabs = () => {
  const {Navigator,Screen} = Stack
    return (
        <Navigator screenOptions={{headerShown:false}} >
            <Screen name="card" component={Cards} />
           <Screen name="singlecard" component={SIngleCardPage}  /> 
        </Navigator>
  )
}

export default CardTabs