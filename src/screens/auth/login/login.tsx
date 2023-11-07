import React from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {LoginForm} from './LoginForm';
import colors from '../../../core/colors';
import {globalStyles} from '../../../core/global-styles';

export const Login = (props: any) => {
  const {navigation} = props;
  const goToSignUp = () => props.navigation.navigate('Signup');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardViewStyle}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.createAccountView}>
          <Text
            style={{
              ...globalStyles.header,
              color: colors.black,
            }}>
            Welcome back
          </Text>
        </View>

        <LoginForm navigation={navigation} />
      </ScrollView>

      <View style={styles.footer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Text style={styles.signUpText} onPress={goToSignUp}>
            Sign up
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardViewStyle: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  scrollViewStyle: {
    flexGrow: 1,
    paddingHorizontal: 18,
  },
  createAccountView: {
    marginVertical: 20,
  },
  description: {
    ...globalStyles.description,
    color: colors.darkGrey,
    marginTop: 10,
    lineHeight: 22,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  signUpText: {
    textAlign: 'center',
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'Hanken Grotesk Regular',
    color: colors.darkGrey,
    fontSize: 15,
    fontWeight: '700',
  },
});
