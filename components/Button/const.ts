import { StyleSheet } from "react-native";

export const styledButton = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "orange",
  },
  text: {
    fontSize: 16,
  },
});
