import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {useState} from 'react';
import {enableScreens} from 'react-native-screens';
import TabNavigator from './TabNavigator';
import {NavItems} from './Routes';
import DrawerNavigator from './DrawerNAvigator';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

enableScreens();
const FallbackScreen = () => <Text>Component not found</Text>;

export default function AppNavigator() {
  const [navPreference, setNavPreference] = useState<'tab' | 'drawer'>('tab');

  return (
    <NavigationContainer>
      {navPreference === 'drawer' ? (
        <Drawer.Navigator
          initialRouteName="Expenses"
          drawerContent={props => <DrawerNavigator {...props} />}
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#C1D6D9',
            },
            headerTitleStyle: {
              textTransform: 'capitalize',
              fontWeight: 'bold',
            },
            drawerStyle: {
              borderTopEndRadius: 14,
              borderBottomEndRadius: 14,
              padding: 12,
              maxWidth: '60%',
            },
            drawerIcon: ({color, size}) => (
              <Text style={{color: color, fontSize: size}}>🏠</Text>
            ),
          }}>
          {NavItems.map((item, index) => {
            const screenName = item.name || `Screen-${index}`;
            const ScreenComponent = item.component || FallbackScreen;
            return (
              <Drawer.Screen
                key={index}
                name={screenName}
                component={ScreenComponent}
              />
            );
          })}
        </Drawer.Navigator>
      ) : (
        <Tab.Navigator
          tabBar={props => <TabNavigator {...props} />}
          initialRouteName="Expenses"
          screenOptions={{
            headerShown: false,
          }}>
          {NavItems.map((item, index) => {
            const screenName = item.name || `Screen-${index}`;
            const ScreenComponent = item.component || FallbackScreen;
            return (
              <Tab.Screen
                key={index}
                name={screenName}
                component={ScreenComponent}
              />
            );
          })}
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
