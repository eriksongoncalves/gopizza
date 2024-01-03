import firestore from '@react-native-firebase/firestore';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

import BottomMenu from '@components/BottomMenu';
import Home from '@screens/Home';
import { Orders } from '@screens/Orders';
import { OrderStatus } from '@shared/enums/orders';

const { Navigator, Screen } = createBottomTabNavigator();

export function UserTabRoutes() {
  const theme = useTheme();
  const [notifications, setNotifications] = useState('0');

  useEffect(() => {
    const subscribe = firestore()
      .collection('orders')
      .where('status', '==', OrderStatus.PRONTO)
      .onSnapshot(snapshot => {
        setNotifications(String(snapshot.docs.length));
      });

    return () => subscribe();
  }, []);

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.secondary_900,
        tabBarInactiveTintColor: theme.colors.secondary_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Cardápio" color={color} />
          )
        }}
      />

      <Screen
        name="orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu
              title="Pedidos"
              color={color}
              notifications={notifications}
            />
          )
        }}
      />
    </Navigator>
  );
}
