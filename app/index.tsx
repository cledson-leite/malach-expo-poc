import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

const Page = () => {
  const openLink = () => {
    Linking.openURL('https://github.com/cledson-leite')
  }
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/welcome.png')} style={styles.welcome} />
      <Text style={styles.headline}>Welcome to Malach !</Text>
      <Text style={styles.description}>
        Read our{' '}
        <Text style={styles.link} onPress={openLink} >
          Private Policy
        </Text>
        , {'Tap "Agree & Continue" to accept the '}
        <Text style={styles.link} onPress={openLink} >
          Terms of Service
        </Text>
        .
      </Text>
      <Link href="/otp" replace asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agree & Continue</Text>
      </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    width: '100%',
    height: 300,
    marginBottom: 30
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 30,
    color: Colors.gray
  },
  link: {
    color: Colors.primary
  },
  button: {
    width: '100%',
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
  }
});

export default Page