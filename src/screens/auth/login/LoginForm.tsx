import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, Alert, Image} from 'react-native';
import {Formik} from 'formik';
import AppBtn from '../../../components/AppBtn';
import colors from '../../../core/colors';
import Input from '../../../components/AppInput';
import * as AuthActions from '../../../actions/auth';
import {useDispatch, useSelector} from 'react-redux';

export const LoginForm = (props: any) => {
  const {navigation} = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isBusy, setIsBusy] = useState(false);

  // Redux
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const validate = formValues => {
    const errors = {};
    if (!formValues.email) {
      errors['email'] = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      errors['email'] = 'Invalid email address';
    }

    return errors;
  };

  const handleSubmit = async (data: any) => {
    try {
      setIsBusy(true);
      const login: any = AuthActions.loginUser(dispatch, data);
      if (login) {
        navigation.replace('Home');
      } else {
        navigation.replace('Home');
      }
    } catch (error: any) {
      setIsBusy(false);
      return error;
    }
    setIsBusy(false);
  };

  // Effects
  useEffect(() => {
    if (authState.error) {
      setTimeout(() => {
        dispatch({
          type: 'AUTH_ERROR',
          payload: null,
        });
      }, 5000);
    } else {
    }
  }, [authState.error]);

  useEffect(() => {
    if (authState.success) {
      Alert.alert('Registration Successful');
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: null,
      });
    }
  }, [authState.success]);

  return (
    <>
      <Formik
        validateOnChange={false}
        validate={values => validate(values)}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}>
        {formikprops => (
          <View style={styles.mainView}>
            <Input
              textInputProps={{
                placeholder: 'Email address',
                keyboardType: 'email-address',
                onChangeText: formikprops.handleChange('email'),
                value: formikprops.values.email,
              }}
              isError={formikprops.errors.email ? true : false}
              error={formikprops.errors.email}
              isVisible={formikprops.values.email.length > 0}
            />

            <Input
              textInputProps={{
                placeholder: 'Password',
                secureTextEntry: !showPassword,
                onChangeText: formikprops.handleChange('password'),
                value: formikprops.values.password.replace(/\s/g, ''),
              }}
              isError={formikprops.errors.password ? true : false}
              isVisible={formikprops.values.password.length > 0}
              error={formikprops.errors.password}
              suffixIcon={
                showPassword ? (
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Image
                      source={require('../../../assets/images/eye.png')}
                      style={{width: 30, height: 20}}
                    />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Image
                      source={require('../../../assets/images/eye-closed.png')}
                      style={{width: 30, height: 20}}
                    />
                  </Pressable>
                )
              }
            />

            <View style={styles.createAccountView}>
              <AppBtn
                title="Sign In"
                onPress={formikprops.handleSubmit}
                isBusy={isBusy}
                isDisabled={
                  !formikprops.values.email ||
                  !formikprops.values.password ||
                  isBusy
                }
              />
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginVertical: 10,
  },
  passwordText: {
    marginBottom: 10,
    marginTop: 40,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: 'DMSans Regular',
    fontWeight: '700',
    fontSize: 15,
  },
  instructionMainView: {
    marginTop: 20,
  },
  firstTextView: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  createAccountView: {
    marginTop: 20,
  },
});
