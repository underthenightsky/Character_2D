import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, View, Image, Animated, StyleProp, ViewStyle } from 'react-native';
import { RefObj } from './Hooks/Hooks';
import { Rn_SpriteSheet } from './rnSpriteSheet';

interface Props {
  spriteRef: RefObj<Rn_SpriteSheet | null>;
  style?: any;
}
export const CatSprite: React.FC<Props> = ({ spriteRef, style }) => {
  return(
    <Rn_SpriteSheet
      ref={spriteRef.trueRef}
      src={require('../public/sprite/spritesheet.png')}
      rate={Math.round(28 + 4*Math.random())}
      rows={1}
      cols={10}
      anims={[
        { name: "run", row: 0, frames: 10, loop: true }
      ]}
      defaultAnim="run"
      style={style}
    />
  )
}

const styles = StyleSheet.create({
  container: {
  },
});