import { createStore } from 'redux'

function reducer() {
    return {
            img: "https://i2-prod.mirror.co.uk/incoming/article21142078.ece/ALTERNATES/s615/0_Stray-Cat.jpg",
            nome: "Salvador",
            idade: "1",
            raça: "Spitz",
            sexo: "Macho",
            temperamento: "Agitado",
            post: {
                dataPost: "12/10/2020",
                cidadePost: "Macaé",
                estadoPost: "Rio de Janeiro"
            },
            descricao: "Quero dar esse gato fofo para adoção pois não tenho recursos financeiros para cuidar dele. Ele é bem agitado, gosta de bater nas pessoas e provavelmente vai acabar com a sua casa. Mas ele é lindo. Olha pra essa cara fofa.",
            cardDescricao: "Descrição 1",
            usuario: "juninho123"
        }
}

const store = createStore(reducer);

export default store;