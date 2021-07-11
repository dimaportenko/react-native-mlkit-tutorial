/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';

export const App: FC = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
