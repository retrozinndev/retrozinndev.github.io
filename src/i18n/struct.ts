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
    
    about: {
        title: string,
        description: string,
        socials_title: string,
        projects: string
    },

    404: {
        artist: string,
        description: {
            l1: string,
            l2: string
        },
        socials: string
    },
    
    projects: {
        title: string,
        description: string, 
    },

    footer: {
        txt1: string,
        txt2: string,
        txt3: string
    },

    errors: {
        nf_load_error: string
    }
};
