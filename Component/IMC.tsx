import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import CategoriaIMC from "./CategoriaIMC";

export default function IMC() {

    const [contadorPeso, setContadorPeso] = useState<number>(0);
    const [contadorAltura, setContadorAltura] = useState<number>(0);

    

    function aumentarContadorPeso() {
        setContadorPeso(contadorPeso + 1)
        console.log(contadorPeso)
    }

    function restarContadorPeso() {
        setContadorPeso(contadorPeso - 1)
         if (contadorPeso < 1) {
            setContadorPeso(0)
        }
        console.log(contadorPeso)
    }

       function aumentarContadorAltura() {
        setContadorAltura(contadorAltura + 0.01)
        console.log(contadorAltura)
    }

    function restarContadorAltura() {
         
        setContadorAltura(contadorAltura - 0.01)
        if (contadorAltura < 0.01) {
            setContadorAltura(0)
        }
       
        console.log(contadorAltura)
    }



    return (
        <View>
            
            <Text>Peso en Kg:  {contadorPeso} </Text>
            <Button title='+' onPress={aumentarContadorPeso}></Button>
            <Button title='-' onPress={restarContadorPeso}></Button>
            <Text>Altura en M:  {contadorAltura.toFixed(2)} </Text>
            <Button title='+' onPress={aumentarContadorAltura}></Button>
            <Button title='-' onPress={restarContadorAltura}></Button>
            <CategoriaIMC Peso= {contadorPeso} Altura = {contadorAltura} />
            
            
             
        </View>
    )
}