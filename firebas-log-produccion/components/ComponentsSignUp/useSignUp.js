import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../../context/authContext";

export const useSignUp = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const refs = {
    username: useRef(null),
    email: useRef(null),
    telefono: useRef(null),
    password: useRef(null),
    passConfirmacion: useRef(null),
  };

  const validations = {
    email: (value) =>
      /\S+@\S+\.\S+/.test(value) ? "" : "Please enter a valid email address",
    username: (value) => (value ? "" : "Ingrese su nombre completo"),
    telefono: (value) =>
      /^\d+$/.test(value) ? "" : "Please enter a valid phone number",
    password: (value) => (value ? "" : "Please enter your password"),
    passConfirmacion: (value) =>
      value === refs.password.current?.value ? "" : "Passwords do not match",
  };

  const handleRegister = async () => {
    let validationErrors = {};
    let firstErrorKey = null;

    for (const key in refs) {
      const value = refs[key].current?.value;
      const errorMessage = validations[key](value);
      if (errorMessage) {
        validationErrors[key] = errorMessage;
        if (!firstErrorKey) firstErrorKey = key;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setAlertMessage("Todos los campos son obligatorios");

      if (firstErrorKey && refs[firstErrorKey].current) {
        refs[firstErrorKey].current.focus();
      }

      return;
    }

    setLoading(true);

    try {
      const response = await register(
        refs.email.current.value,
        refs.password.current.value,
        "defaultProfileUrl"
      );

      if (response.success) {
        router.push("/signIn");
      } else {
        setAlertMessage(
          response.message || "An error occurred during registration."
        );
        setErrors({
          general: response.message || "An error occurred during registration.",
        });
      }
    } catch (error) {
      setAlertMessage(`Error: ${error.message}`);
      setErrors({ general: `Error: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  return {
    refs,
    loading,
    errors,
    alertMessage,
    setAlertMessage,
    handleRegister,
  };
};
