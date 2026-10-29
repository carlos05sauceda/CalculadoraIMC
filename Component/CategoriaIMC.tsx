import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'


export default function CategoriaIMC ({Peso, Altura}) {
    
    const [IMC, setIMC] = useState(0);
    const [Mensaje, setMensaje] = useState('');

    useEffect ( () => {
        
        const calIMC = Peso/(Altura*Altura);
        setIMC (calIMC);

         if (calIMC < 18.5) {
        setMensaje('Bajo peso ');
      } else if (calIMC >= 18.5 && calIMC < 25) {
        setMensaje('Peso normal  ');
      } else if (calIMC >= 25 && calIMC < 30) {
        setMensaje('Sobrepeso ');
      } else {
        setMensaje('Obesidad ');
      }

    }, [Peso, Altura])
    


    function Categoria () {
        if (IMC<18.5) {
            <Text>Usted está bajo de peso!!</Text>
        }
        
    }

      
   




    return (
        <View>
            <Text>El Indice de masa corporal es: {IMC.toFixed(2)}</Text>
            <Text>Clasificación: {Mensaje}</Text>
             
        </View>
    )
}