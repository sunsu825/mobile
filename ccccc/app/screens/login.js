import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    Image, 
    Dimensions, 
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    ImageBackground,
    Keyboard
} from 'react-native';

import styles from '../style/style';

//Keyboard.dismiss();
const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const user = {
    username: 'TuAnh',
    pass: '12345678'
}
export default class VerticalScrollView extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: '',
            isLoggingIn: false,
            message: '',
            show_hide_pass: true,
            sour: '',
        }
        showPass = require('../images/show_pass.png');
        hidePass = require('../images/hide_pass.png');
        background = require('../images/Pokemon.jpg');
        logo = require('../images/logo2.png');
        BG = require('../images/BG.png');
    }

    _onShowHidePass = (() => {
         this.setState({show_hide_pass : !show_hide_pass})
        
    })

    sor = (()=>{
        this.state.show_hide_pass ? (this.setState = ({sour : showPass})) : (this.setState = ({sour : hidePass}))

    })
    
    _onPress = (() => {
        if(this.state.user === user.username && this.state.password === user.pass){
            let Page_url = 'App';
            this.props.navigation.navigate(Page_url);
        } else{
            alert('Username hoặc Password sai !!!')
        }
    })

    _onChangeTextuser = ((username) => {
        this.setState({user : username});
    })

    _onChangeTextpass = ((pass) => {
        this.setState({password : pass});
    })

    // componentWillMount(){
    //     var pageUrl = 'Register';
    //     const {navigate} = this.props.navigation;
    //     setTimeout(() => {
    //         navigate(pageUrl, null);
    //       }, 1000);
    // }


    render(){
        
        return(
            
            <ImageBackground source={BG} style={{flex:1, resizeMode: 'contain'}}>
            
                <ImageBackground style={styles.image}>
                <DismissKeyboard>
                    <View style={styles.container}>
                        <Image source={logo} style={styles.logo} />
                        <View style={styles.form}>
                            <View style={styles.username}>
                                <TextInput 
                                    onSubmitEditing={Keyboard.dismiss}
                                    style={styles.textinput}
                                    placeholder='enter user...'
                                    onChangeText={this._onChangeTextuser}
                                />
                                <TextInput 
                                    onSubmitEditing={Keyboard.dismiss}
                                    secureTextEntry={true}
                                    style={styles.textinput}
                                    placeholder='enter pass...'
                                    onChangeText={this._onChangeTextpass}
                                />
                                {/* <Image onPress={this._onShowHidePass} style={{flex:1, resizeMode:'contain'}}/> */}
                            </View>
                            <View style={styles.ButtonLogin}>
                                <TouchableOpacity
                                    secureTextEntry={true}
                                    style={styles.button}
                                    onPress={this._onPress}
                                    >
                                    <Text> Sign in </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    secureTextEntry={true}
                                    style={styles.button}
                                    onPress= {()=>{
                                        let pageUrl = 'Register';
                                        const {navigate} = this.props.navigation;
                                        setTimeout(() => {
                                            navigate(pageUrl, null);
                                        }, 100);
                                        //alert('move to register screen !!')
                                    }}
                                    >
                                    <Text> Sign up </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
                    </DismissKeyboard>
                </ImageBackground>
                
                </ImageBackground>
            
        );
    }
}

