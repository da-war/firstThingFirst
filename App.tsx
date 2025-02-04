import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const App = () => {
  const {width, height} = useWindowDimensions();
  const [count, setCount] = React.useState<number>(0);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity style={[styles.btn, {width: width - 40}]}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  count: {
    fontSize: 32,
    color: 'white',
    marginBottom: 24,
  },
});
