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
  Button
} from 'react-native';
import { connect } from 'react-redux';

class Main extends Component<{}> {
  static navigationOptions = {
    title: '赫美支付',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Home! User has login? {this.props.isLoggedIn ? 'Yes' : 'No'}  UserName: {this.props.data ? this.props.data.user.name : 'not login'}
        </Text>
        <Button 
          title='go to profile'
          onPress={()=>{
              navigate('Login'); 
          }} />
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


const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  data: state.login.data,
});


export default connect(mapStateToProps)(Main);