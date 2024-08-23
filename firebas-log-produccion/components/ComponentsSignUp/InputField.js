import React from "react";
import { View, TextInput, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const InputField = ({ refProp, placeholder, icon, onChangeText, error }) => {
  return (
    <View>
      <View
        style={{ height: hp(7) }}
        className="flex-row gap-x-2 px-3 bg-neutral-100 items-center rounded-2xl"
      >
        <Feather name={icon} size={hp(2.7)} />

        <TextInput
          ref={refProp}
          onChangeText={onChangeText}
          style={{ fontSize: hp(2) }}
          className="flex-1 font-semibold text-neutral-800"
          placeholder={placeholder}
          placeholderTextColor="gray"
          secureTextEntry={icon === "lock"}
        />
      </View>
      {error ? (
        <Text style={{ color: "red", fontSize: hp(1.8), marginTop: hp(0.5) }}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export default InputField;
