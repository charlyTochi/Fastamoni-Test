import React from 'react';
import {StyleSheet, Text, Pressable, Keyboard, View} from 'react-native';
import colors from '../core/colors';

const AppBtn = (props: any) => {
  const {
    onPress,
    title,
    isBusy,
    isDisabled,
    type,
    color,
    icon,
    moreButtonStyles,
    borderColor,
    textColor = colors.white,
  } = props;
  return (
    <>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          onPress();
        }}
        accessible={true}
        accessibilityLabel="AppButton"
        style={
          type === 'outline'
            ? // eslint-disable-next-line no-sparse-arrays
              [
                moreButtonStyles,
                ,
                {
                  ...styles.btnOutline,
                  borderColor: borderColor,
                  opacity: isDisabled ? 0.5 : 1,
                },
              ]
            : [
                moreButtonStyles,
                {
                  ...styles.appButtonContainer,
                  opacity: isDisabled ? 0.5 : 1,
                  backgroundColor: color ? color : colors.primary,
                },
              ]
        }
        disabled={isDisabled}>
        {isBusy ? (
          <Text>....Please wait...</Text>
        ) : (
          <>
            <View style={{flexDirection: 'row'}}>
              {icon && <Text>Hi</Text>}
              <Text
                style={{
                  fontFamily: 'DMSans Regular',
                  fontWeight: '700',
                  color: textColor,
                }}>
                {title}
              </Text>
            </View>
          </>
        )}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 5,
    paddingHorizontal: 20,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnOutline: {
    borderRadius: 8,
    paddingHorizontal: 20,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
});

export default AppBtn;
