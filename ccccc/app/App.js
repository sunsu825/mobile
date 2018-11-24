import React, {Component} from 'react';
import {Icon, SearchBar} from 'react-native-elements';
import { Dimensions, Platform } from 'react-native';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createBottomTabNavigator, TabNavigator, TabBarBottom, createStackNavigator, StackNavigator } from 'react-navigation';
import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';



const App = createBottomTabNavigator(
  {
    Book : Bookcase ,
    Add : AddBook ,
    //Li : { screen : Lists },
    Pro : Profile
  },
  {
    navigationOptions: ({navigation})=>({
      tabBarIcon: ({ focused, tintColor })=>{
        const { routeName } = navigation.state;
        let iconName;
        switch(routeName){
          case 'Book': 
          iconName = `book`;
          break;

          case 'Add':
          iconName = `library-add`;
          break;

          // case 'Exp':
          // iconName = `window-restore`;
          // break;

          case 'Pro':
          iconName = `face`;
          break;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
