import React from "react";
import { Pressable, Text, View } from "react-native";
import { stylesButton } from "./const";
import { IButton } from "./type";

const Button = ({
  title,
  onPress,
  styledButton,
  styleButtonText,
  icon,
}: IButton) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        flex: 1,
      })}
      onPress={onPress}
    >
      <View style={[stylesButton.button, styledButton]}>
        {icon}
        <Text style={[stylesButton.buttonText, styleButtonText]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
