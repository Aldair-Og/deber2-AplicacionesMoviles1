import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme';
import { Titlecomponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtomComponent } from '../components/ButtomComponent';




interface DiviForm {
    num1: string;
    num2: string;
}

export const Screens2 = () => {
    const [diviForm, setDiviForm] = useState<DiviForm>({
    num1: '',
    num2: '',
    });
    



    const [result, setResult] = useState<string>('');




    const handleChange = (name: string, value: string): void => {
    setDiviForm({ ...diviForm, [name]: value });
    };




    const handleDivide = (): void => {
    const number1 = parseFloat(diviForm.num1);
    const number2 = parseFloat(diviForm.num2);



    if (isNaN(number1) || isNaN(number2)) {
        setResult('Por favor, ingresa números válidos.');
        return;
    }


    if (number1 === 0 && number2 === 0) {
        setResult('INDETERMINACIÓN');
    } else if (number2 === 0) {
        setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
        setResult(`Resultado: ${number1 / number2}`);
    }
    };


    return (
    <View>
        <Titlecomponent title="División de Números" />
        <BodyComponent>
        <Text style={styles.titlePrincipal}>Calculadora</Text>
        <Text style={styles.textDescription}>Ingresa dos números para dividirlos</Text>
        <View style={styles.formContainer}>
            <InputComponent placeholder="Numero  1" keyboardType="numeric" handleChange={handleChange} name="num1" />
            <InputComponent placeholder="Numero 2" keyboardType="numeric" handleChange={handleChange} name="num2" />
            <View style={styles.formContainer}>
            <ButtomComponent textbutton="Dividir" onPress={handleDivide} />
            <Text style={styles.textDescription}>{result}</Text>
            </View>
        </View>
        </BodyComponent>
    </View>
    );
};