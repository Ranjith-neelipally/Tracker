import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import home from '../screens/Home';
import Expenses from '../screens/Expenses';
import {enableScreens} from 'react-native-screens';
import TabNavigator from './TabNavigator';
import {NavItems} from './Routes';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

enableScreens();

export default function AppNavigator() {
  const [navPreference, setNavPreference] = useState<'tab' | 'drawer'>('tab');

  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{padding: 12}}>
          <Text>Hello,</Text>
          <Text>Username</Text>
        </View>
        <View style={{padding: 4}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <NavigationContainer>
      {navPreference === 'drawer' ? (
        <Drawer.Navigator
          initialRouteName="Expenses"
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#C1D6D9',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerStyle: {
              borderTopEndRadius: 14,
              borderBottomEndRadius: 14,
              maxWidth: '47%',
            },
            drawerIcon: ({focused, color, size}) => (
              <Text style={{color: color, fontSize: size}}>🏠</Text>
            ),
          }}>
          {NavItems.map((item, index) => (
            <Drawer.Screen
              key={index}
              name={item.name}
              component={item.component}
            />
          ))}
          {/* <Drawer.Screen name="Home" component={home} />
          <Drawer.Screen name="Expenses" component={Expenses} /> */}
        </Drawer.Navigator>
      ) : (
        <Tab.Navigator
          tabBar={props => <TabNavigator {...props} />}
          initialRouteName="Expenses"
          screenOptions={{
            headerShown: false,
          }}>
          {NavItems.map((item, index) => (
            <Tab.Screen
              key={index}
              name={item.name}
              component={item.component}
            />
          ))}
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
