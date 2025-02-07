import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'





export const Screens1 = () => {



const navigation = useNavigation();
return (
    <View style={styles.globalmargin}>
        <Text style={styles.title}>Bienvenidos</Text>
        <View>
            <Image source={{
                uri:'https://www.creativefabrica.com/wp-content/uploads/2021/05/25/Mobile-Store-Logo-Modern-Tech-Simple-Graphics-12429779-1.png'
            }} style={styles.imagen}/>
        </View>
        <View style={styles.globalmargin}>
        <Button
        title='Acceder'
        onPress={()=> navigation.dispatch(CommonActions.navigate({name: 'Screen2', }))} />
        </View>
    </View>
)
}
