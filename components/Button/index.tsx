import React from "react";
import { Pressable, Text, View } from "react-native";
import { IButton } from "./type";

const Button = ({
  title,
  onPress,
  styledView,
  styleContent,
  icon,
}: IButton) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        alignSelf: "flex-start",
      })}
      onPress={onPress}
    >
      <View style={styledView}>
        {icon}
        <Text style={styleContent}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
