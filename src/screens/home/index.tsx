import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import colors from '../../core/colors';
import {useSelector} from 'react-redux';
import AppBtn from '../../components/AppBtn';

export const Home = (props: {navigation: any}) => {
  const {navigation} = props;

  // Redux
  const authState = useSelector(state => state.auth);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.greeting}>
          Hi, {authState.user?.first_name} {authState.user?.last_name}
        </Text>
        <View style={styles.editProfileView}>
          <AppBtn
            title="Edit Profile"
            onPress={() => navigation.navigate('EditProfile')}
          />
        </View>
        <View style={styles.viewProfileView}>
          <AppBtn
            title="View Profile"
            onPress={() => navigation.navigate('ViewProfile')}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.logoutView}>
          <Text
            style={styles.signUpText}
            onPress={() => navigation.replace('Login')}>
            Log Out
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {flex: 1, marginTop: 80},
  body: {
    fontSize: 20,
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    marginHorizontal: 10,
    flexDirection: 'column',
    height: Dimensions.get('screen').height - 150,
    gap: 5,
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
  greeting: {
    fontSize: 30,
    textTransform: 'capitalize',
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editProfileView: {
    marginTop: 120,
  },
  viewProfileView: {
    marginTop: 20,
  },
  logoutView: {
    flexDirection: 'row',
  },
});
