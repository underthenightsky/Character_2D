import React, { useState, useEffect, useRef, useContext } from 'react';
import {TextInput,Text, View, Button,Switch , KeyboardAvoidingView ,SafeAreaView} from 'react-native';
import  {SpriteSheet}  from './scripts/spriteSheet';


export default class App extends React.Component {
  state = {
    loop: false,
    resetAfterFinish: false,
    fps: '16'
  };

  render() {
    const { fps, loop, resetAfterFinish } = this.state;

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SpriteSheet
              ref={ref => (this.mummy = ref)}
              source={require('./public/sprite/spritesheet.png')}
              columns={18}
              rows={18}
              // height={200} // set either, none, but not both
              // width={200}
              imageStyle={{ marginTop: -1 }}
              animations={{
                idle: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                smiling: Array.from({ length: 170 }, (v, i) => i + 18),
                pointing: Array.from({ length: 136 }, (v, i) => i + 188)
              }}
            />
          </View>
          <View style={{ paddingVertical: 30, paddingHorizontal: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button onPress={() => this.play('idle')} title="idle" />
              <Button onPress={() => this.play('smiling')} title="smiling" />
              <Button onPress={() => this.play('pointing')} title="pointing" />
              <Button onPress={this.stop} title="stop" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, marginRight: 10 }}>FPS</Text>
              <TextInput
                style={{ flex: 1, borderBottomWidth: 1, fontSize: 16 }}
                value={fps}
                keyboardType="number-pad"
                onChangeText={fps => this.setState({ fps })}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, marginRight: 10 }}>Loop</Text>
              <Switch value={loop} onValueChange={loop => this.setState({ loop })} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, marginRight: 10 }}>Reset After Finish</Text>
              <Switch
                value={resetAfterFinish}
                onValueChange={val => this.setState({ resetAfterFinish: val })}
              />
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }

  play = type => {
    const { fps, loop, resetAfterFinish } = this.state;

    this.mummy.play({
      type,
      fps: Number(fps),
      loop: loop,
      resetAfterFinish: resetAfterFinish,
      onFinish: () => console.log('hi')
    });
  };

  stop = () => {
    this.mummy.stop(() => console.log('stopped'));
  };
}