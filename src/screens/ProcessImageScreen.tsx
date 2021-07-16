/**
 * Created by Dima Portenko on 05.07.2021
 */
import React, {useEffect, useState} from 'react';
import {Image, useWindowDimensions, ScrollView} from 'react-native';
import {
  ProcessImageNavigationProps,
  ProcessImageRouteProps,
} from '../navigation/Navigator';
import {recognizeImage} from '../mlkit';

interface ProcessImageScreenProps {
  navigation: ProcessImageNavigationProps;
  route: ProcessImageRouteProps;
}

export const ProcessImageScreen = ({route}: ProcessImageScreenProps) => {
  const {width: windowWidth} = useWindowDimensions();
  const [aspectRatio, setAspectRation] = useState(1);
  const uri = route.params.uri;

  useEffect(() => {
    if (uri) {
      proccessImage(uri);
    }
  }, [uri]);

  const proccessImage = async (url: string) => {
    if (url) {
      try {
        const response = await recognizeImage(url);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Image
        source={{uri}}
        style={{width: windowWidth, height: windowWidth * aspectRatio}}
        resizeMode="cover"
      />
    </ScrollView>
  );
};
