import React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";

const Inicio: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Image
        source={require("../assets/Bienvenido.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a6daff", // Color de fondo cambiado
  },
  circle: {
    position: "absolute", // Asegúrate de que el círculo esté detrás de la imagen
    width: 360, // Ajusta el tamaño según sea necesario
    height: 360, // Ajusta el tamaño según sea necesario
    borderRadius: 160, // La mitad del ancho para hacer un círculo
    backgroundColor: "white", // Color del círculo
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Para asegurarte de que esté detrás de la imagen
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
    zIndex: 2, // Asegúrate de que la imagen esté delante del círculo
  },
});

export default Inicio;
