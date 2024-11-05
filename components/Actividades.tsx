import { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import Actividad from "../components/Actividad";

export default function Actividades() {
  const [actividades, setActividades] = useState([
    {
      id: 1,
      descripcion: "1a. Cátedra de Ingeniería",
      fechaCulminacion: "19-01-24",
      completado: true,
    },
    {
      id: 2,
      descripcion: "Plática de Servicio social",
      fechaCulminacion: "32-03-24",
      completado: false,
    },
  ]);

  const [descripcion, setDescripcion] = useState("");
  const [fechaCulminacion, setFechaCulminacion] = useState("");

  function agregaActividad() {
    const nuevaActividad = {
      id: Date.now(),
      descripcion,
      fechaCulminacion,
      completado: false,
    };
    setActividades([...actividades, nuevaActividad]);
    setDescripcion("");
    setFechaCulminacion("");
  }

  function borrarActividad(id) {
    setActividades(actividades.filter((elemento) => elemento.id !== id));
  }

  function completarActividad(id) {
    setActividades(
      actividades.map((elemento) =>
        elemento.id === id
          ? { ...elemento, completado: !elemento.completado }
          : elemento
      )
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, marginTop: 20 }}>Agenda de proyectos</Text>

      <TextInput
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Nombre del proyecto"
        style={{ marginBottom: 10 }}
      />

      <TextInput
        value={fechaCulminacion}
        onChangeText={setFechaCulminacion}
        placeholder="Fecha de culminación"
        style={{ marginBottom: 10 }}
      />

      <Button title="Agregar proyecto" onPress={agregaActividad} />

      <Text style={{ fontSize: 20, paddingTop: 10 }}>Lista de actividades</Text>
      {actividades.map((elemento) => (
        <Actividad
          key={elemento.id}
          actividad={elemento}
          borrarActividad={borrarActividad}
          completarActividad={completarActividad}
        />
      ))}
    </View>
  );
}
