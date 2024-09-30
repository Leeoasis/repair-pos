// app/_layout.js

import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" href="/screens/home" />
      <Tabs.Screen name="customers" href="/screens/customers" />
    </Tabs>
  );
}
