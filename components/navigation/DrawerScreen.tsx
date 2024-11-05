import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Inicio from "../Inicio";

const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={Inicio} />
    </Drawer.Navigator>
  );
}

export default DrawerScreen;
