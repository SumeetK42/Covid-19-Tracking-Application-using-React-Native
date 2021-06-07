import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import Helpline from "./Helpline"
import Survey from "./Survey"

const Screens = {
    Helpline:{
        screen:Helpline 
    } , 
    Survey:{
        screen:Survey
    }
}
const Help = createStackNavigator(Screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"coral"
        }
    }
})

export default createAppContainer(Help)
