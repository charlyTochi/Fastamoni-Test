import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/AppInput';
import AppBtn from '../../components/AppBtn';
import colors from '../../core/colors';
import * as AuthActions from '../../actions/auth';

export const EditProfileForm = (props: any) => {
  const {navigation} = props;

  // States
  const [isBusy, setIsBusy] = useState(false);

  // Redux
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (data: any) => {
    try {
      const update: any = AuthActions.updateUser(dispatch, data);
      if (!update) {
        navigation.replace('Home');

        Alert.alert('Profile Updated');
      }
    } catch (error: any) {
      setIsBusy(false);
      return error;
    }
    setIsBusy(false);
  };

  const validate = formValues => {
    const errors = {};
    if (!formValues.first_name) {
      errors['first_name'] = 'Required';
    }
    if (!formValues.last_name) {
      errors['last_name'] = 'Required';
    }
    if (!formValues.email) {
      errors['email'] = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      errors['email'] = 'Invalid email address';
    }

    return errors;
  };

  return (
    <>
      <Formik
        validateOnChange={false}
        validate={values => validate(values)}
        initialValues={{
          first_name: authState.user.first_name,
          last_name: authState.user.last_name,
          email: authState.user.email,
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}>
        {formikprops => (
          <View style={styles.mainView}>
            <Input
              textInputProps={{
                placeholder: 'First name',
                onChangeText: formikprops.handleChange('first_name'),
                value: formikprops.values.first_name,
              }}
              isError={formikprops.errors.first_name ? true : false}
              error={formikprops.errors.first_name}
              isVisible={formikprops.values.first_name.length > 0}
            />

            <Input
              textInputProps={{
                placeholder: 'Last name',
                onChangeText: formikprops.handleChange('last_name'),
                value: formikprops.values.last_name,
              }}
              isError={formikprops.errors.last_name ? true : false}
              error={formikprops.errors.last_name}
              isVisible={formikprops.values.last_name.length > 0}
            />

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

            <View style={styles.createAccountView}>
              <AppBtn
                title="Update"
                onPress={formikprops.handleSubmit}
                isBusy={isBusy}
                isDisabled={
                  !formikprops.values.email ||
                  !formikprops.values.first_name ||
                  !formikprops.values.last_name ||
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
    color: colors.black,
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
    marginTop: 90,
  },
  passwordRequirements: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  passwordRequirement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  passwordRequirementText: {
    marginLeft: 5,
    color: colors.black,
    fontFamily: 'DMSans Regular',
  },
});
