import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataAll } from '../../actions/app';
import { styles } from './style'

class Login extends Component {
  state = {
    usr: '',
    pwd: '',
    email_error: '',
    password_error: '',
    errorMessage: '',
  }
  componentDidMount() {
    const { fetchDataAll, dispatch } = this.props;
    // fetchDataAll()
  }
  
  login = () => {
    this.props.fetchDataAll({
      usr: this.state.usr,
      pwd: this.state.pwd,
    });
    const { data } = this.props;
    if(data === true){
      this.props.navigation.navigate('Home');
    }
  };

  onChangeEmailText = (text) => {
    this.setState({ usr: text, email_error: '' });
  };

  onChangePasswordText = (text) => {
    this.setState({ pwd: text, password_error: '' });
  };
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.emailinput}>
          <Text>Username</Text>
          <TextInput
            ref="email"
            label="Mail-address"
            mode="flat"
            placeholder='example@sample.com'
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.onChangeEmailText(text)}
          />
          <Text>Password</Text>
          <TextInput
            ref="password"
            label="Password"
            mode="flat"
            placeholder='Password'
            style={styles.textInput}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.onChangePasswordText(text)}
          />
          <Button onPress={this.login} style={styles.button} title="Login"></Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.app.data,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDataAll: (data) => dispatch(fetchDataAll(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);