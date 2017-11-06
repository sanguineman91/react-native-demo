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
    headerRight: (<Button title='settings' onPress={()=>{}}/>),
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
    const { dispatch } = this.props;
    const { navigate } = this.props.navigation;
    try{
      // const promise = dispatch(login({
      //   username: this.state.username, 
      //   password: this.state.password
      // }));

      // or 

      const promise = this.props.login2({
        username: this.state.username, 
        password: this.state.password
      });

      console.log('yes');

      promise.then(function(data){
        console.warn('done');
        //dispatch(data);
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

/**
 * 这里是知道map到props的state
 * @param {*} state 
 */
const mapStateToProps = state => ({
  
});

/**
 * 这里指定要map到props的事件
 * 一般情况下该conponent需要发送的action事件都应该定义在这里
 * 如果偷懒不定义这个方法，那么在component中，直接引用dispatch去发送action
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  login2: (scope) => dispatch(login(scope))
});

/**
 * 如果没有传入mapDispatchToProps，默认会把dispatch map到props
 * 如果传入的话，必须显示的指定，否则会undefined
 */
export default connect(mapStateToProps, mapDispatchToProps)(Login);