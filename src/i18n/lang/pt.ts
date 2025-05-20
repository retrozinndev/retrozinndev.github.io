import type { i18nStruct } from "../struct";

export default {

    language: "Português (Brasil)",

    nav: {
        home: "Início",
        home_tooltip: "Retornar à pagina inicial",
        about: "Sobre",
        about_tooltip: "Mais informaçes sobre mim",
        stack: "Stack",
        stack_tooltip: "Linguagens e tecnologias que uso",
        projects: "Projetos",
        projects_tooltip: "Alguns dos meus principais projetos",
        language: "Idioma"
    },
    
    about: {
        title: "Meu nome é",
        description: `Eu curto tecnologia, GNU/Linux e também gosto de aprender como desenvolver 
            coisas! Você também pode me chamar de Retrozinn, se quiser.`,
        socials_title: "Minhas redes",
        projects: "Veja alguns dos meus projetos"
    },

    "404": {
        artist: "Artista",
        description: {
            l1: "Parece que eu ainda não desenvolvi essa página!",
            l2: "Se quiser sugerir alguma ideia, me chame em qualquer uma das"
        },
        socials: "minhas redes sociais!"
    },

    projects: {
        title: "Projetos",
        description: "Aqui estão alguns dos meus projetos! Você pode vê-los no", 
    },

    footer: {
        txt1: "Feito com",
        txt2: "por João Dias",
        txt3: "Melhore esta página"
    }
} as const as i18nStruct;
