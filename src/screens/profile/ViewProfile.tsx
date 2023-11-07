import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../../core/colors';
import AppBtn from '../../components/AppBtn';

export const ViewProfile = props => {
  const {navigation} = props;

  // Redux
  const authState = useSelector(state => state.auth);
  console.log(authState.user);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: authState?.user?.avatar}} style={styles.image} />
      </View>
      <Text style={styles.fullName}>
        {authState.user.first_name} {authState.user.last_name}
      </Text>
      <Text style={styles.email}>{authState.user.email}</Text>

      <View style={styles.buttonView}>
        <AppBtn title="Go Back" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
  fullName: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.black,
    marginTop: 30,
    fontWeight: 'bold',
  },
  email: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    color: colors.black,
    fontWeight: '500',
  },
  buttonView:{
    marginTop: 40}
});
