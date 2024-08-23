import React from "react";
import { View, Text, Pressable } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SignInRedirect = ({ onPress }) => {
  return (
    <View className="flex-row justify-center gap-x-2">
      <Text
        style={{ fontSize: hp(1.8) }}
        className="font-semibold text-neutral-500"
      >
        ¿Ya tienes una cuenta?
      </Text>
      <Pressable onPress={onPress}>
        <Text style={{ fontSize: hp(2) }} className="font-bold text-amber-600">
          Iniciar sesión
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInRedirect;
