import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";

export interface AuthNavigationProps<RouteName extends keyof AuthenticationRoutes> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">>
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>
  route: RouteProp<HomeRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined
  Home: undefined
}

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined
  SignUp: undefined
  ForgotPassword: undefined
  PasswordChanged: undefined
  SplashScreenComponent: undefined
};


export type HomeRoutes = {
  OutfitIdeas: undefined
  FavouritesOutfits: undefined
  EditProfile: undefined
  TransactionHistory: undefined
  NotificationSettings: undefined
  ShoppingCart: undefined
  ModalCart: undefined
  AnimatedUi: undefined
}


export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}