import { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IButton {
  title: string;
  onPress: () => void;
  type?: any;
  icon?: ReactNode;
  styledButton?: StyleProp<ViewStyle>;
  styleButtonText?: StyleProp<TextStyle>;
}
