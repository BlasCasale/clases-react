import React from 'react'
import ImputText from '../InputText/ImputText';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

const Form = (props) => {
    return (
        <form>
            <h2> {props.titulo} </h2>
            <ImputText id ="name" label ="Nombre" />
            <ImputText id = "apellido" label = "Apellido" />
            <TextArea label = "Deje su mensaje" />
            <Button label="Enviar" />
        </form>
    )
}

export default Form
