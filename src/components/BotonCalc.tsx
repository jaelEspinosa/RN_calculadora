/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  disable?:boolean;
  accion: ( numeroTexto: string ) => void;
}
export const BotonCalc = ({ texto, color = '#2D2D2D', ancho = false, accion, disable = false }: Props) => {

  return (
    <TouchableOpacity
    disabled={disable}
    onPress={()=>accion(texto)}
    >
      <View style={{
        ...styles.boton,
        backgroundColor: disable ? '#ff93277c' : color,
        width: ancho ? 170 : 80,
      }}>
        <Text style={{
          ...styles.botonTexto,
          color: (color === '#9B9B9B') ? 'black' : 'white',
        }}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};
