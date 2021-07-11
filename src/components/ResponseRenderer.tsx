/**
 * Created by Dima Portenko on 05.07.2021
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Block, Line, RecognizeTextResponse} from '../mlkit';

interface ResponseRendererProps {
  response?: RecognizeTextResponse;
  scale: number;
}

export type Size = {
  width: number;
  height: number;
};

export const ResponseRenderer = ({response, scale}: ResponseRendererProps) => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
      }}>
      {response?.blocks.map(block => {
        return block.lines.map((line, index) => {
          return (
            <BlockComponent block={line} scale={scale} key={`key${index}`} />
          );
        });
      })}
    </View>
  );
};

type BlockProps = {
  block: Block | Line;
  scale: number;
};

export const BlockComponent = ({block, scale}: BlockProps) => {
  const rect = {
    top: block.rect.top * scale,
    width: block.rect.width * scale,
    left: block.rect.left * scale,
    height: block.rect.height * scale,
  };

  console.warn('rect', rect, block.rect, scale);

  return (
    <View
      style={{
        position: 'absolute',
        ...rect,
        borderWidth: 1,
        borderColor: 'red',
      }}>
      <Text style={{color: 'blue'}}>{block.text}</Text>
    </View>
  );
};
