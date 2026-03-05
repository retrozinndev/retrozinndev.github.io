import type { i18nStruct } from "../struct";

export default {
    language: "Português (Brasil)",

    nav: {
        home: "Início",
        home_tooltip: "Retornar à pagina inicial",
        about: "Sobre",
        about_tooltip: "Mais informaçes sobre mim",
        stack: "Tecnologias",
        stack_tooltip: "Linguagens e tecnologias que uso",
        projects: "Projetos",
        projects_tooltip: "Alguns dos meus principais projetos",
        language: "Idioma"
    },
    
    resume: {
        title: "Meu nome é",
        description: `Eu curto tecnologia, GNU/Linux e também gosto de aprender como desenvolver 
            coisas! Você também pode me chamar de Retrozinn, se quiser.`,
        socials_title: "Minhas redes",
        projects: "Veja alguns dos meus projetos"
    },

    about: {
        title: "Sobre mim",
        description: "Eu sou um estudante do Ensino Médio no Brasil. Amo muito programação e open-source!",

        journey: {
            title: "Jornada",
            p1: "Estive aprendendo bastante sobre programação e GNU/Linux desde 2022.",
            p2: `Também, tenho utilizado o GNU/Linux como meu sistema operacional principal desde 2024! \
Comecei nessa jornada usando %s e, mais tarde no mesmo ano, troquei para o %s; e ainda o uso até hoje(nem penso em trocar!)`
        },

        interests: {
            title: "Outros interesses",
            text: `Além de tecnologia, eu também gosto muito de assistir animes! Curto bastante slice of life, romcoms e um pouco de drama 😜 <br>
Meus animes favoritos são: %s, %s e %s.`
        },

        music: {
            title: "Música",
            p1: "Gosto muito de ouvir Vocaloid enquanto faço alguma coisa! Meus artistas vocaloid(e também outros: utau; synth-v...) favoritos são %s, %s, %s, %s e %s.",
            p2: `Além de Vocaloid, eu também curto músicas de artistas como %s, %s, %s, %s, %s e %s. Gosto muito de ouví-los enquanto programo ou faço qualquer outra coisa 😸 <br>
Meus gêneros mais ouvidos são J-pop, J-rock e Vocaloid.`
        },

        recent_projects: {
            title: "Projetos mais recentes",
            p1: `Eu comecei a trabalhar em um Desktop Shell recentemente, chamado %s. \
É feito para funcionar com o %s, fazendo o uso de tecnologias ingcírveis, como GnomeJS, TypeScript, GTK 4, AGS e as bibliotecas Astal para criar um ambiente maneiro para o seu desktop.`,
            p2: `Também tem um Player de Música que tenho trabalhado recentemente. Você devia dar uma olhada!<br>\
O Player de Música é chamado de %s, ele também usa GnomeJS, GTK, Gnim e o GStreamer para fazer as coisas funcionarem.`
        }
    },

    stack: {
        title: "Tecnologias",
        description: "Essa é minha stack de conhecimento! Todos as tecnologias listadas aqui são frequentes em meus projetos.",
        frameworks: "Frameworks e/ou bibliotecas",
        languages: "Linguagens",
        go_to_website: "Ir ao website para",
        others: "Outros"
    },

    projects: {
        title: "Projetos",
        description: "Aqui estão alguns dos meus projetos! Você pode vê-los no", 
    },

    "404": {
        artist: "Artista",
        description: {
            l1: "Parece que eu ainda não desenvolvi essa página!",
            l2: "Se quiser sugerir alguma ideia, me chame em qualquer uma das"
        },
        socials: "minhas redes sociais!"
    },

    footer: {
        txt1: "Feito com",
        txt2: "por João Dias",
        txt3: "Melhore esta página"
    }
} as const satisfies i18nStruct;
