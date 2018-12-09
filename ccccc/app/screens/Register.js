import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Dimensions, 
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    ToastAndroid,
    AsyncStorage,
    FlatList
} from 'react-native';
//import { createStackNavigator} from 'react-navigation';
import styles from '../style/style';
// const fs = require('fs');
// const content = JSON.stringify(getUser());
// fs.writeFile('H:/', content, 'utf-8',function (err) {
//     if (err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 
//const serverURL = 'http://192.168.198.2/api/register';
const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class Register extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            message: '',
        }

        logo = require('../images/logo2.png');
        BG = require('../images/BG.png');
    }

    // componentDidMount(){
    //     return fetch('http://10.0.137.107/contacts')
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    
    //         this.setState({
    //           isLoading: false,
    //           dataSource: responseJson.data,
    //         }, function(){
    
    //         });
    
    //       })
    //       .catch((error) =>{
    //         console.error(error);
    //       });
    //   }
    //   _keyExtractor = (item, index) => (item._id);
        

        newUser = (() => {
            let serverURL = 'http://10.0.137.107/newcontacts';
            var userName = this.state.userName;
            var password = this.state.password;
            var confirmPassword = this.state.confirmPassword;
            //check in here
            fetch(serverURL,{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: userName,
                        password: password,
                        confirmPassword: confirmPassword
                    })
                }).then((response)=>{
                    response.json();
                }).then((responseJSON)=>{
                //     if(responseJSON.message=="Success"){
                //         alert(responseJSON.message);
                //         var { navigate } = this.props.navigation;
                //         navigate('Login');
                //         //ToastAndroid.show(responseJSON.message, ToastAndroid.SHORT)
                //    }
                   this.setState({
                              isLoading: false,
                              message: responseJson.message,
                            }, function(){
                    
                            });
                }).catch((error)=>{
                    console.warn(error)
                });
        })

        getUser = (()=>{
            return fetch('http://10.0.137.107/contacts')
            .then((response) => response.json())
            .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              data: responseJson.data,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
        })

        _onPressCancel=(()=>{
            this.props.navigation.navigate('Login');
        })
    
        _onChangeTextuser = ((username) => {
            this.setState({userName : username});
        })
    
        _onChangeTextpass = ((password) => {
            this.setState({password : password});
        })

        _onChangeConfirm_pass = ((pass_confirm) => {
            this.setState({confirmPassword : pass_confirm});
        })

        
    

    render(){
        
        return(
            
            <ImageBackground source={BG}  style={{flex:1, resizeMode: 'contain'}}>
                <DismissKeyboard>
                <View 
                    style={styles.container}
                    behavior="padding"
                    
                    keyboardVerticalOffset = "-2000" 
                >
                        <Image source={logo} style={styles.logo} />
                        <View style={styles.form_Register}>
                            <View style={styles.username_Register}>
                                <TextInput 
                                    
                                    style={styles.textinput}
                                    placeholder='Type username...'
                                    onChangeText={this._onChangeTextuser}
                                />
                                <TextInput 
                                    onChangeText={this._onChangeTextpass}
                                    secureTextEntry={true}
                                    style={styles.textinput}
                                    placeholder='Type password...'
                                />

                                <TextInput 
                                    onChangeText={this._onChangeConfirm_pass}
                                    secureTextEntry={true}
                                    style={styles.textinput}
                                    placeholder='Type confirm password...'
                                />
                            
                            </View>
                            <View style={styles.ButtonRegister}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.newUser}
                                    >
                                    <Text> Register </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    keyboardShouldPersistTaps={true}
                                    //onPress= {this.getUser}
                                    onPress={this._onPressCancel}
                                >
                                    <Text> Cancel </Text>
                                </TouchableOpacity>
                                
                            </View>
                            {/* <View style={{flex: 1, paddingTop:20}}>
                                <Text>{this.state.message}</Text>
                            </View> */}
                            {/* <View style={{flex: 1, paddingTop:20}}>
                                <FlatList
                                    data={this.state.dataSource}
                                    renderItem={({item}) => <Text>{item.username}</Text>}
                                    //keyExtractor={(item, index) => (item.id).toString()}
                                    keyExtractor={this._keyExtractor}
                                />
                            </View> */}
                        </View>
                    </View>
                </DismissKeyboard>                
            </ImageBackground>
            
            
        );
    }
}

