import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';
import BookcaseItem from './BookcaseItem';
import Books from '../data/bookInfor';
import { StackNavigator } from 'react-navigation';



export default class Boookcase extends Component {
  constructor(props){
    super(props);
    this.state ={
      data : Books
    }
  }

  openDetail = (data) => {
    this.props.navigation.navigate("Details", { 
      data: data
    });
  };
  _renderItem = ({item, index}) => (
    <BookcaseItem
      //index = {index + 1}
      //id={item.id}
      passdata = {item.title}
      title={item.title}
      author={item.author}
      thumbnail={item.thumbnail}
      openDetail={()=> this.openDetail(passdata)}
    />
  );

  _keyExtractor = (item, index) => 
    (item.id).toString()
  ;

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          showLoading
          platform="android"
          placeholder='Search...' />
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={Books}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  }
});