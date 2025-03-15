import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 5,
  },
  welcomeText: {
    flex: 0.6,
    borderColor: "green",
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  welCome: {
    flex: 0.4,
    borderColor: "yellow",
    borderWidth: 5,
  },
  heading: {
    fontSize: 40,
    fontWeight: "600",
  },
  body: {
    fontSize: 30,
    color: "orange",
    marginVertical: 10,
  },
  footer: {
    fontSize: 25,
    color: "green",
  },
});
const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.heading}>Welcome to</Text>
        <Text style={styles.body}>Food app</Text>
        <Text style={styles.footer}>Slogan</Text>
      </View>
      <View style={styles.welCome}>
        <Text style={{ backgroundColor: "yellow" }}>Login with</Text>
        <View>
          <View style={styles.welCome}>
            <View style={styles.welCome}>
              <Text>Facebook</Text>
            </View>
            <View style={styles.welCome}>
              <Text>Google</Text>
            </View>
          </View>
          <View style={styles.welCome}>
            <Text>Login with email</Text>
          </View>
          <View style={styles.welCome}>
            <Text>You don't have account? Register</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;
