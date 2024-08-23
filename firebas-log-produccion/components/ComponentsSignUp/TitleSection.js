import React from "react";
import { View, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const TitleSection = () => {
  return (
    <View>
      <Text
        style={{ fontSize: hp(4) }}
        className="font-bold tracking-wider text-center text-neutral-800"
      >
        Registrarse
      </Text>
      <Text
        style={{ fontSize: hp(2) }}
        className="font-semibold tracking-wider text-center text-neutral-600"
      >
        Crea una cuenta nueva
      </Text>
    </View>
  );
};

export default TitleSection;
