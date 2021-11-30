import React from 'react';
import { Image, Linking } from 'react-native';

import {
  AppDescriptionText,
  Container,
  DevNameText,
  WebSiteLinkText,
} from './styles';

import avengerLogo from '../../assets/images/avengers-logo.png';
import { useTheme } from '../../hooks/Theme';

const AppInfo: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Image source={avengerLogo} />
      <DevNameText style={{ color: colors.text }}>Cedric Smith</DevNameText>
      <AppDescriptionText style={{ color: colors.text }}>
        This app was developed using Marvel API and React Native
      </AppDescriptionText>
      <WebSiteLinkText
        onPress={() => Linking.openURL('https://cedricb.breecks.com')}
      >
        https://cedricb.breecks.com
      </WebSiteLinkText>
    </Container>
  );
};

export default AppInfo;