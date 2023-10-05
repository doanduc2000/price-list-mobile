import React from 'react';
import { View, Image } from 'react-native';
import GradientText from '../GradientText/GradientText';
import headerAuthStyle from './headerAuthStyle';

const HeaderAuth = () => {
  return (
    <View style={headerAuthStyle.header}>
      <Image style={headerAuthStyle.tinyLogo} source={require('../../../assets/logo.png')} />
      <GradientText
        style={headerAuthStyle.title}
        colors={['#c68f22', '#daaf69']}
        text={'SCI Price List'}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      />
    </View>
  );
};

export default HeaderAuth;
