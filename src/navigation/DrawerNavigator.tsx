import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./StackNavigators";
import { colors } from "../global/styles";
import Icon from "../components/Icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Client",
          headerShown: false,
          drawerIcon: ({ focussed, size }) => 
                <Icon type="materialCommunity" name="home" color={focussed ? "#7cc" : colors.grey2} size={size}/>          ,
        }}
      />
    </Drawer.Navigator>
  );
}
