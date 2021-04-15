import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let profileSchema = object().shape(
    {
   
        id: number(),
        user: string().required().max(20),
        nome: string().required().max(30),
        sobrenome: string().required().max(30),
        email: string().required().max(40),
        telefone: number().required().positive().integer().max(9999999999999).min(10000000),
        cpf: number().required().min(1000000000).max(99999999999),
        cep: number().required().min(1).max(99999999),
        cidade: string().required().max(30),
        senha: string().required().max(18),
    }
)