import Button from "@/components/Button";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 5,
    width: "auto",
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
    borderColor: "white",
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
        <View style={styles.welCome}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 50,
              justifyContent: "space-between",
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
          >
            <Button
              title="Facebook"
              onPress={() => alert("login with facebook")}
              icon={
                <AntDesign name="facebook-square" size={24} color="#1877F2" />
              }
            />
            <Button
              title="Google"
              onPress={() => alert("login with google")}
              icon={<AntDesign name="google" size={24} color="red" />}
            />
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
  );
};

export default WelcomePage;
