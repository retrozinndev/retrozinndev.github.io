export type i18nStruct = {
    language: string,

    nav: {
        home: string,
        home_tooltip: string,
        about: string,
        about_tooltip: string,
        stack: string,
        stack_tooltip: string,
        projects: string,
        projects_tooltip: string,
        language: string
    },
    
    resume: {
        title: string,
        description: string,
        socials_title: string,
        projects: string
    },

    about: {
        title: string,
        description: string,
        journey: {
            title: string,
            p1: string,
            p2: string
        },

        interests: {
            title: string,
            text: string
        },

        music: {
            title: string,
            p1: string,
            p2: string
        },

        recent_projects: {
            title: string,
            p1: string,
            p2: string
        }
    },

    stack: {
        title: string,
        description: string,
        languages: string,
        frameworks: string,
        go_to_website: string,
        others: string
    }
    
    projects: {
        title: string,
        description: string, 
    },

    "404": {
        artist: string,
        description: {
            l1: string,
            l2: string
        },
        socials: string
    },

    footer: {
        txt1: string,
        txt2: string,
        txt3: string
    }
};
