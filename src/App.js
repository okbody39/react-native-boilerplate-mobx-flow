// @flow
import React from "react";
import { StackNavigator, DrawerNavigator, SwitchNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Overview from "./container/OverviewContainer";
import VMs from "./container/VMsContainer";
import AuthLoading from "./container/AuthLoadingContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const AppStack = StackNavigator(
		{
			// Login: { screen: Login },
			BlankPage: { screen: BlankPage },
			Overview: { screen: Overview },
			VMs: { screen: VMs },
			Drawer: { screen: Drawer },
		},
		{
			initialRouteName: "Drawer",
			headerMode: "none",
		}
	);

const AuthStack = StackNavigator(
		{
      Login:  { screen: Login },
		},
    {
      // initialRouteName: "Login",
      headerMode: "none",
    }
	);

const AuthSwitch = StackNavigator(
  {
    AuthLoading:  { screen: AuthLoading },
    App: { screen: AppStack },
    Auth: { screen: AuthStack },
  },
  {
    initialRouteName: "AuthLoading",
    headerMode: "none",
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Root>
      	<AuthSwitch />
      </Root>
		);
  }
}
