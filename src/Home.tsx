import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Home = () => {
  const [count, setCount] = useState<number>(0);
  const {width} = useWindowDimensions();
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

export default Home;

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
