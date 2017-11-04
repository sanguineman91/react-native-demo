/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends Component {
  static navigationOptions = {
    title: '登录',
  }

  constructor() {
    super();
    this.state = {
      username: 'moke',
      password: '',
      loginStatus: ''
    };

    this.login = this.login.bind(this);
  }

  login() {
    const {dispatch} = this.props;
    const { navigate } = this.props.navigation;
    try{
      const promise = login({
        username: this.state.username, 
        password: this.state.password
      });
      promise.then(function(data){
        console.warn(data);
        dispatch(data);
        setTimeout(function(){ navigate('Main');  }, 3000);
        
      });
      // go main page
    }catch(e){
      //console.warn(e);
      this.setState({loginStatus: 'fail'});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Login! {this.state.username}  {this.state.password}
        </Text>
        <TextInput style={styles.formControl}
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
          placeholder='User Name'/>
        <TextInput style={styles.formControl}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
          placeholder='Password'/>  
        <Button
          title="Login"
          onPress={this.login}
          />
        {
          (this.state.loginStatus === 'fail') && 
          <Text style={{color: '#f00'}}>
              login fail.
          </Text> 
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    marginBottom: 5,
  },
  formControl: {
    width: 200,
    height: 50,
    padding: 5,
    marginBottom: 5,
    borderWidth: 1,
  },
});

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);