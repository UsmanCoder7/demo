
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react'
// import Login from './Navigation-screens/Log'
// import Home from './Navigation-screens/Home'
// import About from './Navigation-screens/About'

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//   <NavigationContainer>
//    <Stack.Navigator>
//     <Stack.Screen name='Login' component={Login}
//     />
//     <Stack.Screen name="Home" component={Home} options={{headerShown:false}}
//     />
//     <Stack.Screen name='About' component={About}
//     />
//    </Stack.Navigator>
//   </NavigationContainer>
//   );
// };
// export default App;
import React from 'react'
import Home from './Navigation-screens/Home'
import Log from './Navigation-screens/Log'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'
const Stack=createNativeStackNavigator();
const App = () => {
  return (
   
   <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
         backgroundColor:'blue'
        },
        headerTintColor:'white',
      headerTitleStyle:{
        fontSize:25
      }, 
    }}
    >
       <Stack.Screen name='Log' component={Log}
      //  options={{
      //   headerStyle:{
      //    backgroundColor:'blue'
      //   },
      //   headerTintColor:'white',
      // headerTitleStyle:{
      //   fontSize:25
      // },

      //  }}
       />
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
    

   </NavigationContainer>
  )
}

export default App