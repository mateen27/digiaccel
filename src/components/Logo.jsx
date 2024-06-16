import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogoDesign = () => {
  return (
    <View style={styles.container}>
      <View style = {{ flexDirection: 'row', gap: 1, alignItems: 'flex-end' }}>
        <View style={styles.blueCircle}>
            <View style={styles.orangeCircle} />
        </View>
        <View style={styles.blueCircleTwo}>
            <View style={styles.orangeCircle} />
        </View>
        <View style={styles.blueCircleThree}>
            <View style={styles.orangeCircle} />
        </View>
      </View>
      <View style={styles.logoTextContainer}>
        <Text style={styles.orangeText}>digi</Text>
        <Text style={styles.blueText}>accel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24, 
    marginLeft: 24
  },
  blueCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  orangeCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'orange',
    position: 'absolute',
    top: 2
  },
  logoTextContainer: {
    flexDirection: 'row',
    // marginTop: 10,
  },
  orangeText: {
    color: '#FF9500',
    fontSize: 20,
    fontWeight: '500',
  },
  blueText: {
    color: '#0B00AE',
    fontSize: 20,
    fontWeight: '500',
  },
  blueCircleTwo: {
    width: 16,
    height: 26,
    borderRadius: 8,
    backgroundColor: 'blue',
    // justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  blueCircleThree: {
    width: 16,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'blue',
    // justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }
});

export default LogoDesign;
