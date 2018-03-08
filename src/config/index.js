import React from 'react'
import {IconToggle} from '../components'
/** 
 * Color de la aplicación
*/
const color = {
    primary: '#01579b',
    primaryLight: '#4f83cc',
    primaryDark: '#002f6c',
    backgroundPrimary: '#F5FCFF',
};
/**
 * Header del navigator
 */
const headerRight = (
    <IconToggle name="information-outline" color="white" size={24} style={{margin: 15}} onPress={() => alert('Proyectos y controles de ingeniería S.A.S\n2018')} />
)

const header = {
   headerTintColor : 'white',
   headerStyle : {backgroundColor : color.primary },
   headerRight 
}

/**
 * Configuración del servidor 
 */
const server = {
    url : 'https://www.procontroles.com'
}

export { color,header, server }
