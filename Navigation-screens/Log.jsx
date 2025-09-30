// import { View, Text } from 'react-native'
// import React from 'react'

// const Log = () => {
//   return (
//     <View>
//       <Text>Log</Text>
//     </View>
//   )
// }

// export default Log

import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

const Log = ({navigation}) => {
  return (
    <View>
      <Text>Log</Text>
      <Button title='Go to home screen'onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}

export default Log;