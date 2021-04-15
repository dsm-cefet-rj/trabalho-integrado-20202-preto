import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let profileSchema = object().shape(
    {
        id: number(),
        User: string().required().max(20),
        Nome: string().required().max(30),
        Sobrenome: string().required().max(30),
        Email: string().required().max(40),
        Telefone: number().required().positive().integer().max(16).min(8),
        CPF: number().required().min(9).max(11),
        CEP: number().required().min(8).max(8),
        Cidade: string().required().max(30),
        Endereço: string().max(60),
        Senha: string().required().min(6).max(18),
    }
)