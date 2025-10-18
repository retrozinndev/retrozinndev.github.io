export type User = {
    login: string;
    avatar_url: string;
    url: string;
};

export type Repository = {
    name: string;
    full_name: string;
    description: string;
    owner: User;
    language: string;
    stargazers_count: number;
    html_url: string;
    archived: boolean;
    fork: boolean;
};

export async function getRepositories(): Promise<Array<Repository>> {
    let repos: Array<Repository>|undefined;
    await fetch(
        "https://api.github.com/users/retrozinndev/repos", {
            cache: "default",
            method: "GET",
        }
    ).catch((e) => {
        console.error(`Repositories fetch rejected! Error: ${e}`);
    }).then(res => 
        res?.blob()
    ).then(res => 
        res?.text()
    ).then(res => {
        if(!res) return;
        try {
            repos = JSON.parse(res) as Array<Repository>;
        } catch(e) {
            console.error(`Couldn't transform response into JSON: ${e}`);
        }
    });

    if(!repos) 
        throw new Error(`Couldn't get repositories`);

    return repos;
}

export async function getMyRepos(): Promise<Array<Repository>> {
    return (await getRepositories()).filter(repo =>
        repo.fork !== true
    );
}
