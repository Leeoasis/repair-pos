import React from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router'; // Used for navigation

const Home = () => {
  return (
    <ScrollView style={tw`p-4`}>
      {/* Dashboard Overview */}
      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold`}>Dashboard Overview</Text>
        <View style={tw`flex-row justify-between my-2`}>
          <View style={tw`bg-blue-200 p-4 rounded-lg flex items-center`}>
            <Icon name="briefcase-outline" size={30} color="blue" />
            <Text style={tw`text-lg`}>Open Jobs</Text>
            <Text style={tw`text-2xl font-bold`}>12</Text>
          </View>
          <View style={tw`bg-green-200 p-4 rounded-lg flex items-center`}>
            <Icon name="checkmark-done-outline" size={30} color="green" />
            <Text style={tw`text-lg`}>Jobs Completed Today</Text>
            <Text style={tw`text-2xl font-bold`}>5</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between my-2`}>
          <View style={tw`bg-yellow-200 p-4 rounded-lg flex items-center`}>
            <Icon name="wallet-outline" size={30} color="goldenrod" />
            <Text style={tw`text-lg`}>Pending Invoices</Text>
            <Text style={tw`text-2xl font-bold`}>4</Text>
          </View>
          <View style={tw`bg-red-200 p-4 rounded-lg flex items-center`}>
            <Icon name="alert-circle-outline" size={30} color="red" />
            <Text style={tw`text-lg`}>Low Stock Alerts</Text>
            <Text style={tw`text-2xl font-bold`}>3</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions with Icons */}
      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold mb-2`}>Quick Actions</Text>
        <View style={tw`flex-row justify-around`}>
          <Link href="/add-job" style={tw`flex items-center`}>
            <Icon name="add-circle-outline" size={30} color="blue" />
            <Text style={tw`text-base`}>Add New Job</Text>
          </Link>
          <Link href="/add-customer" style={tw`flex items-center`}>
            <Icon name="person-add-outline" size={30} color="green" />
            <Text style={tw`text-base`}>Add Customer</Text>
          </Link>
        </View>
        <View style={tw`flex-row justify-around mt-2`}>
          <Link href="/create-invoice" style={tw`flex items-center`}>
            <Icon name="receipt-outline" size={30} color="purple" />
            <Text style={tw`text-base`}>Create Invoice</Text>
          </Link>
          <Link href="/update-inventory" style={tw`flex items-center`}>
            <Icon name="cart-outline" size={30} color="orange" />
            <Text style={tw`text-base`}>Update Inventory</Text>
          </Link>
        </View>
      </View>

      {/* Recent Activities */}
      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold mb-2`}>Recent Activities</Text>
        <View style={tw`bg-gray-100 p-4 rounded-lg`}>
          <Text>New job added: Screen Replacement for John Doe</Text>
          <Text>Completed: Battery Replacement for Jane Smith</Text>
        </View>
      </View>

      {/* Upcoming Jobs */}
      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold mb-2`}>Upcoming Repair Jobs</Text>
        <View style={tw`bg-gray-100 p-4 rounded-lg`}>
          <Text>Screen Repair for Alex Johnson - Due: Tomorrow</Text>
          <Text>Battery Replacement for Mike Lee - Due: Today</Text>
        </View>
      </View>

      {/* Inventory Alerts */}
      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold mb-2`}>Inventory Alerts</Text>
        <View style={tw`bg-red-100 p-4 rounded-lg`}>
          <Text>Low Stock: iPhone Batteries - Stock: 3</Text>
          <Text>Low Stock: Screen Protectors - Stock: 2</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
