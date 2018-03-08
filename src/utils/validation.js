import React from 'react'

import moment from 'moment';
import { ToastAndroid } from 'react-native';


const validation = {
    isEmailAddress: (str) => {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(str);  // returns a boolean
    },
    isNotEmpty: (str) => {
        const pattern = /\S+/;
        return pattern.test(str);  // returns a boolean
    },
    isNumber: (str) => {
        const pattern = /^\d+$/;
        return pattern.test(str);  // returns a boolean
    },
    isSame: (str1, str2) => {
        return str1 === str2;
    },
    isAlphabet: (str) => {
        const pattern = /^[a-zA-Z]+$/;
        return pattern.test(str);
    },
    isPhoneNumber: (str) => {
        const pattern = /^(\d{1,3})[-](\d{1,3})[-](\d{4,10})$/;
        return pattern.test(str);
    },
    isIdNumber: (str) => {
        const pattern = /^(((\d{1,3})[.])*)$/;
        return pattern.test(str);
    },
    isRequired: (str) => value => !value ? '* Requerido' : undefined
};
export const required = value => !value ? '* Requerido' : undefined;
export const maxLength = max => value =>
    value && value.length > max ? `Máximo ${max} caracteres o menos` : undefined
export const minLength = min => value =>
    value && value.length < min ? `Mínimo ${min}  caracteres o más` : undefined

export const date = value => {
    if(!value) return
    const pattern = /^([a-zA-Z]{4,15}[\s])([0-9]{2}[\s])del([\s][0-9]{4})$/;
    const example = moment(new Date()).format('MMMM DD [del] YYYY');
    if (!pattern.test(value.trim())) return "Fecha incorrecta. Ejem:" + example;
    //  if (!moment("Febrero 17 del 2018", 'MMMM DD [del] YYYY', 'es', true).isValid()) return "Ingrese una fecha válida..."
    //if(!moment(String(value)).isValid()) return "Ingrese una fecha válida"    
    // ToastAndroid.show(`date:${value} isValid:${checkDate}`,ToastAndroid.SHORT)
    return undefined;
}

export const isBefore = (otherField,msg) => (value, allValues, props) => {
    if (allValues[otherField]) {
        if (value.trim() === '' || allValues[otherField].trim() === '') return undefined;
        const date1 = getDate(value.toString());
        const date2 = getDate(allValues[otherField].toString());
         //alert(`Fecha1:${date1} Fecha2:${date2}`)
         if (moment(date1).isBefore(date2)) {
            return msg;
        } 
    }else{
        return undefined;
    }
   
}

const getDate = dayWrapper => {
    let date1 = dayWrapper.toString().replace('del', '').replace(/[\s]{1,5}/g, "-");
    date1 = date1.split('-');
    date1 = moment(dateHash[date1[0]] + "-" + date1.slice(1), 'MM-DD-YYYY').format('YYYY-MM-DD');
    return date1;
}
const dateHash = {
    Enero: '01',
    Febrero: '02',
    Marzo: '03',
    Abril: '04',
    Mayo: '05',
    Junio: '06',
    Julio: '07',
    Agosto: '08',
    Septiembre: '09',
    Octubre: '10',
    Noviembre: '11',
    Deciembre: '12'
};

export default validation;