import { View, Text, Button, StyleSheet } from "react-native";

export default function Actividad({
  actividad,
  borrarActividad,
  completarActividad,
}) {
  return (
    <View style={styles.actividadContainer}>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.descripcion,
            actividad.completado && styles.textoCompletado,
          ]}
        >
          {actividad.descripcion}
        </Text>
        <Text style={styles.fecha}>{actividad.fechaCulminacion}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={actividad.completado ? "Terminado" : "Sin terminar"}
          onPress={() => completarActividad(actividad.id)}
        />
        <Button
          title="Eliminar"
          onPress={() => borrarActividad(actividad.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actividadContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    marginTop: 20, // Espacio adicional en la parte superior
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    flex: 1,
  },
  fecha: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
  },
  textoCompletado: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
