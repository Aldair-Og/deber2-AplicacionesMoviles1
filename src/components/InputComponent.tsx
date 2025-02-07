import React from 'react'
import { KeyboardTypeOptions, Text, TextInput } from 'react-native'
import { INPUT_COLOR } from '../Theme/commons/constants'
import { styles } from '../Theme/appTheme'


interface Props{
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    handleChange: (key: string, value: string)=>void;
    name: string;
    ispassword?: boolean;
}

export const InputComponent = ({placeholder, keyboardType = 'default', handleChange, name, ispassword = false}:Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => handleChange(name, value)}
            secureTextEntry={ispassword}
            style={styles.inputText}/>
    )
    }