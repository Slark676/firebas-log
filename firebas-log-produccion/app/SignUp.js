import React from "react";
import { View, Text, StatusBar } from "react-native";
import { styles } from "../components/ComponentsSignUp/SignUpStyles.js";
import Alert from "../components/alert.js";
import InputField from "../components/ComponentsSignUp/InputField";
import TitleSection from "../components/ComponentsSignUp/TitleSection";
import SignUpButton from "../components/ComponentsSignUp/SignUpButton";
import SignInRedirect from "../components/ComponentsSignUp/SignInRedirect";
import { useSignUp } from "../components/ComponentsSignUp/useSignUp";

export default function SignUp() {
  const {
    refs,
    loading,
    errors,
    alertMessage,
    setAlertMessage,
    handleRegister,
  } = useSignUp();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {alertMessage ? (
        <Alert message={alertMessage} onDismiss={() => setAlertMessage("")} />
      ) : null}

      <TitleSection />

      <View>
        {Object.keys(refs).map((key, index) => (
          <InputField
            key={index}
            refProp={refs[key]}
            placeholder={
              key === "username"
                ? "Nombre Completo"
                : key === "telefono"
                  ? "Teléfono"
                  : key === "email"
                    ? "Correo"
                    : key === "password"
                      ? "Contraseña"
                      : "Confirmar Contraseña"
            }
            icon={
              key === "username"
                ? "user"
                : key === "telefono"
                  ? "phone"
                  : key.includes("password")
                    ? "lock"
                    : "mail"
            }
            onChangeText={(value) => {
              refs[key].current.value = value;
              if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
            }}
            error={errors[key]}
          />
        ))}
        <SignUpButton loading={loading} onPress={handleRegister} />
        {errors.general && (
          <Text style={styles.errorText}>{errors.general}</Text>
        )}
        <SignInRedirect onPress={() => router.push("signIn")} />
      </View>
    </View>
  );
}
