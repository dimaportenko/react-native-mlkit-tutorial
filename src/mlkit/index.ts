import {NativeModules} from 'react-native';

const {TextRecognitionModule} = NativeModules;

export const recognizeImage = (url: string) => {
  return TextRecognitionModule.recognizeImage(url);
}
