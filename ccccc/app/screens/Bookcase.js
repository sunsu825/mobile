import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  ImageBackground
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
    BG = require('../images/BG.png');
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
      //title={'Magic Stories'}
      //author={item.author}
      thumbnail={item.thumbnail}
      openDetail={()=> this.openDetail(passdata)}
    />
  );

  _keyExtractor = (item, index) => 
    (item.id).toString();

  render() {
    return (

      <ScrollView  style={styles.container}>
        {/* <SearchBar
          showLoading
          platform="android"
          placeholder='Search...' />
        <StatusBar
          barStyle="light-content"
        /> */}
        <ImageBackground source={BG} style={{flex:1, resizeMode: 'repeat'}}>
          {/* <View style={{flex:1, marginTop: 5}}>
            <Text style={{marginLeft: 2,color:'black', borderBottomColor: '#BEC2B9', borderBottomWidth: 1,}}>Most Stories</Text>
            <FlatList
              horizontal
              data={Books}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
          <View style={{flex:1, marginTop: 15}}>
            <Text style={{marginLeft: 2,color:'black', borderBottomColor: '#BEC2B9', borderBottomWidth: 1,}}>Read Most Stories</Text>
            <FlatList
              horizontal
              data={Books}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
          <View style={{flex:1, marginTop: 15}}>
            <Text style={{marginLeft: 2,color:'black', borderBottomColor: '#BEC2B9', borderBottomWidth: 1,}}>Most Stories</Text>
            <FlatList
              horizontal
              data={Books}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
          <View style={{flex:1, marginTop: 15}}>
            <Text style={{marginLeft: 2,color:'black', borderBottomColor: '#BEC2B9', borderBottomWidth: 1,}}>Read Most Stories</Text>
            <FlatList
              horizontal
              data={Books}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
          <View style={{flex:1, marginTop: 15}}>
            <Text style={{marginLeft: 2,color:'black', borderBottomColor: '#BEC2B9', borderBottomWidth: 1,}}>Most Stories</Text>
            <FlatList
              horizontal
              data={Books}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
          <View style={{flex:1, marginTop: 15}}>
            <Text style={{marginLeft: 2,color:'black', borderBottomColor: '#BEC2B9', borderBottomWidth: 1,}}>Read Most Stories</Text>
            <FlatList
              horizontal
              data={Books}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
          <View style={{flex:1, marginTop: 15}}>
            <Text style={{marginLeft: 2,color:'black', borderBottomColor: '#BEC2B9', borderBottomWidth: 1,}}>Most Stories</Text>
            <FlatList
              horizontal
              data={Books}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
          <View style={{flex:1, marginTop: 15}}>
            <Text style={{marginLeft: 2,color:'black', borderBottomColor: '#BEC2B9', borderBottomWidth: 1,}}>Read Most Stories</Text>
            <FlatList
              horizontal
              data={Books}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View> */}
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7FAD3',
  }
});