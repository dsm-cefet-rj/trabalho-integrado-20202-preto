import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let animalSchema = object().shape(
    {
        id: number(),
        nome: string().required().max(30),
        tipo: string().required().max(30),
        raça: string().required().max(30),
        sexo: string().required().max(5),
        idade: number().required().max(20),
        descricao: string().required().max(300),
        img: string().required().max(150),
        temperamento: string().required().max(30),
        cardDescricao: string().required().max(150),
        usuario: string().required().max(20),
    }
)