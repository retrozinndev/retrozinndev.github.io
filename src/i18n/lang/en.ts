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
    
    resume: {
        title: "My name is",
        description: `I'm a tech enthusiast who loves GNU/Linux and has passion on learning software 
            development stuff! You can also call me retrozinn if you want to.`,
        socials_title: "Some of my socials",
        projects: "Get in touch with my projects"
    },

    about: {
        title: "About",
        description: "I'm a high school student from Brazil. I absolutely love open-source and programming stuff!",
        interests: {
            title: "Other Interests",
            text: `Besides tech, I really like watching Anime! I am a guy that really likes slice of life, romcoms and a little bit of drama 😜 <br>
My favorite shows are: %s, %s and %s.`
        },

        journey: {
            title: "Journey",
            p1: "I've been learning a lot about programming and GNU/Linux since 2022.",
            p2: `Also, I've been using GNU/Linux as my primary operating system since 2024!\
I started this journey using %s and, later in the same year, I moved to %s; and I'm still using it to this day(not planning to change at all!)`
        },

        music: {
            title: "Music",
            p1: "I really love listening to Vocaloid while I'm doing anything! My most-listened vocaloid(and also others: utau; synth-v...) artists are mostly %s, %s, %s, %s and %s.",
            p2: `Other than vocaloid, I really enjoy songs by artists like %s, %s, %s, %s, %s and %s. I Also love listening to their songs while coding or doing anything else. 😸 <br>
The genres I usually listen to are J-pop, J-rock and Vocaloid.`
        },

        recent_projects: {
            title: "Most recent projects",
            p1: `I started working on a Desktop Shell recently, called %s. \
It's made to be used with the %s making usage of amazing technologies like GnomeJS, TypeScript, GTK 4, AGS and the Astal Libraries to create a nice environment for your desktop.`,
            p2: `There's also a music player I've been working a lot on recently. You should check it out!<br>\
The Music Player is called %s, it uses GnomeJS, GTK, Gnim and GStreamer to make things work.`
        }
    },

    stack: {
        title: "Tech Stack",
        description: "This is my knowledge stack! It contains the technologies that I've been constantly using.",
        frameworks: "Frameworks (and/or libraries)",
        languages: "Languages",
        go_to_website: "Go to the website for",
        others: "Others"
    },
    
    projects: {
        title: "Projects",
        description: "Here are some of my projects! You can also see them on", 
    },

    "404": {
        artist: "Artist",
        description: {
            l1: "Looks like I haven't developed this yet!",
            l2: "Feel free to suggest me anything, talk to me on any of"
        },
        socials: "my socials!"
    },

    footer: {
        txt1: "Made with",
        txt2: "by retrozinndev",
        txt3: "Improve this page"
    },
} as const satisfies i18nStruct;
