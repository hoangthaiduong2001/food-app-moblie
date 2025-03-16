import { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IButton {
  title: string;
  onPress: () => void;
  icon?: ReactNode;
  styledView?: StyleProp<ViewStyle>;
  styleContent: StyleProp<TextStyle>;
}
