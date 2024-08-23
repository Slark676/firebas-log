import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(15),
    paddingHorizontal: wp(5),
  },
  alertContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  inputContainer: {
    height: hp(7),
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  inputText: {
    flex: 1,
    fontSize: hp(2),
    color: "#333",
  },
  button: {
    height: hp(6.5),
    backgroundColor: "#E8A500",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontSize: hp(2.7),
    color: "white",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: hp(1.8),
    textAlign: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: hp(2),
    fontWeight: "600",
    textAlign: "center",
    color: "#666",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  signInText: {
    fontSize: hp(1.8),
    color: "#666",
    fontWeight: "600",
  },
  signInLink: {
    fontSize: hp(2),
    color: "#E8A500",
    fontWeight: "bold",
  },
});
