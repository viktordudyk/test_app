import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
export default function App() {

  const [textRecognized, setTextRecognized] = useState(false)
  const [start, setStart] = useState(false);
  const [texts, setTexts] = useState([]);

  const onText = ({textBlocks}) => {
    if (start) {
      setTextRecognized(true);
      console.log("====================================================================================")
      console.log(textBlocks)
      setTexts(textBlocks.map(block => block.value))
      console.log("====================================================================================")
      setStart(false)
    }
  }
if (!textRecognized) {
  return (
    <RNCamera
        style={{ flex: 1, justifyContent: 'flex-end' }}
        onTextRecognized={onText}
        zoom={0}
        captureAudio={false}>
        <TouchableOpacity style={styles.start} onPress={() => setStart(true)}>
            <Text style={styles.startText}>{'Start'}</Text>
        </TouchableOpacity>
        </RNCamera>
  );
}
return <View style={styles.container}>
  <TouchableOpacity style={styles.button} onPress={() => setTextRecognized(false)}>
    <Text>{'Recognize text'}</Text>
  </TouchableOpacity>
  <View>
    {texts.map((text, i) => (
      <TouchableOpacity key={i} style={styles.text}>
        <Text>
          {text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
</View>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10
  },
  start: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 30
  }, 
  text: {
    padding: 10,
    borderBottomWidth: 1,
    color: 'white',
    fontSize: 20
  },
  startText: {
    padding: 10,
    color: 'white',
    fontSize: 20
  }
});
