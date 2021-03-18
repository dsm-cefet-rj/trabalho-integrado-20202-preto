import { createSlice } from '@reduxjs/toolkit'

export const anunciosSlice = createSlice({
    name: 'anuncios',
    initialState: {
        keyAnuncioAtual: "128766",
        anunciosObjs: [
            {
                key: "128766",
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
                cardDescricao: "Gatinho para adoção muito simpático",
                usuario: "usuarioTeste1"
            },
            {
                key: "219877",
                img: "https://www.petlove.com.br/images/breeds/192471/profile/original/yorkshire-p.jpg?1532539683",
                nome: "Maick",
                idade: "4",
                raça: "Yorkshire",
                sexo: "Macho",
                temperamento: "Calmo",
                post: {
                    dataPost: "8/11/2020",
                    cidadePost: "Rio de Janeiro",
                    estadoPost: "Rio de Janeiro"
                },
                descricao: "Descrição de outro animal para adoção. Dessa vez o maick",
                cardDescricao: "York muito bonito, cachorro de madame",
                usuario: "usuarioTeste2"
            },
            {
                key: "999123",
                img: "https://i.pinimg.com/originals/0c/e8/cd/0ce8cddcbbb19d11199fa8ae2d81927f.jpg",
                nome: "Laurita",
                idade: "1",
                raça: "Golden",
                sexo: "Fêmea",
                temperamento: "Bagunceira",
                post: {
                    dataPost: "8/4/2020",
                    cidadePost: "Niterói",
                    estadoPost: "Rio de Janeiro"
                },
                descricao: "A laurita é linda demais, adora crianças. Uma companheira para todas as horas!",
                cardDescricao: "Golden filhote em niterói para adoção",
                usuario: "usuarioTeste3"
            },
            {
                key: "423655",
                img: "https://www.petlove.com.br/images/breeds/192401/profile/original/srd-p.jpg?1532539578",
                nome: "Bituco",
                idade: "6",
                raça: "Vira lata",
                sexo: "Macho",
                temperamento: "Velho de guerra",
                post: {
                    dataPost: "12/10/2020",
                    cidadePost: "Petrópolis",
                    estadoPost: "Rio de Janeiro"
                },
                descricao: "Achei bituco na porta de um bar, estava comendo lixo. Assim que vi minha vida mudou. Um cachorro verdadeiramente amoroso e companheiro. Estou dando pra adoção porque estou morrendo e ele precisa de amor.",
                cardDescricao: "Bituco é o pet certo pra você. Incondicionalmente leal",
                usuario: "usuarioTeste4"
            }
        ]
    },
    reducers: {
        setKeyAnuncioAtual: (state,action) => ({...state, keyAnuncioAtual: action.payload}),
    }
})

export const { setKeyAnuncioAtual } = anunciosSlice.actions

export default anunciosSlice.reducer