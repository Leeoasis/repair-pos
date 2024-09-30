// app/screens/home.js

import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Home() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Text style={tw`text-2xl font-bold`}>Home Screen</Text>
    </View>
  );
}
