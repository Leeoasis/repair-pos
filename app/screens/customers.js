// app/screens/customers.js

import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Customers() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Text style={tw`text-2xl font-bold`}>Customers Screen</Text>
    </View>
  );
}
