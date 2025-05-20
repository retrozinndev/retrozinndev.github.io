import type { i18nStruct } from "../struct";

export default {

    language: "English (United States)",

    nav: {
        home: "Home",
        home_tooltip: "Go back to the home page",
        about: "About",
        about_tooltip: "More information about me",
        stack: "Stack",
        stack_tooltip: "My technology stack",
        projects: "Projects",
        projects_tooltip: "Some of my most important projects",
        language: "Language"
    },
    
    about: {
        title: "My name is",
        description: `I'm a tech enthusiast who loves GNU/Linux and has passion on learning software 
            development stuff! You can also call me retrozinn if you want to.`,
        socials_title: "Some of my socials",
        projects: "Get in touch with my projects"
    },

    "404": {
        artist: "Artist",
        description: {
            l1: "Looks like I haven't developed this yet!",
            l2: "Feel free to suggest me anything, talk to me on any of"
        },
        socials: "my socials!"
    },
    
    projects: {
        title: "Projects",
        description: "Here are some of my projects! You can also see them on", 
    },

    footer: {
        txt1: "Made with",
        txt2: "by retrozinndev",
        txt3: "Improve this page"
    },

    errors: {
        nf_load_error: "Couldn't load NerdFont"
    }

} as const as i18nStruct;
