import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataAll } from '../../actions/app';
import { styles } from './style';

class Home extends Component {
  componentDidMount() {
    const { fetchDataAll, data } = this.props;
  }
  logout = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
   
    return(
      <View style = {styles.container}>
        <View style= {styles.emailinput}>
        <Text>Login Success!</Text>
         <Button onPress={this.logout} title="Logout"></Button>
        </View>
      </View>
    );
  }
}

export default Home;