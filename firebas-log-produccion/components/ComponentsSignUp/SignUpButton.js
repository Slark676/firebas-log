import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Loading from "../loading";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SignUpButton = ({ loading, onPress }) => {
  return (
    <View>
      {loading ? (
        <View className="flex-row justify-center">
          <Loading size={hp(8)} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={{ height: hp(6.5), backgroundColor: "#E8A500" }}
          className="rounded-xl justify-center items-center"
        >
          <Text
            style={{ fontSize: hp(2.7) }}
            className="text-white font-bold tracking-wider"
          >
            Registrarse
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SignUpButton;
