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

/** @param username the user to fetch the repo list from 
  * @param options settings that modify the method's behavior
  * @returns an array of repositories */
export async function getRepositories(username: string = "retrozinndev", options: {
    /** whether to ignore the user's special repo (e.g.: retrozinndev/retrozinndev). @default true */
    filterSpecialRepo?: boolean;
    /** whether to filter out forked repos. @default true */
    filterForks?: boolean;
    /** whether to filter out archived repos. @default false */
    filterArchived?: boolean;
    /** whether to sort from most starred to less. @default false */
    orderByMostStarred?: boolean;
    /** authorization token for GitHub. @default undefined */
    token?: string;
} = {}): Promise<Array<Repository>> {
    let repos: Array<Repository>|undefined;
    let result!: Response;

    options.filterForks ??= true;
    options.filterSpecialRepo ??= true;
    options.filterArchived ??= false;
    options.orderByMostStarred ??= false;

    try {
        result = await fetch(
            `https://api.github.com/users/${username}/repos`, {
                cache: "reload",
                method: "GET",
                headers: options.token !== undefined ? {
                    "Authorization": options.token
                } : undefined
            }
        );
    } catch(e) {
        throw new Error(`fetch rejected for repo list: ${(e as Error).message}`);
    }

    const content = (await (await result.blob()).text());
    if(!content?.trim())
        throw new Error("fetch response is empty!");

    try {
        repos = JSON.parse(content) as Array<Repository>;
    } catch(e) {
        throw new Error(`couldn't transform response into JSON: ${(e as Error).message}`);
    }

    if(!Array.isArray(repos))
        throw new Error(`result is not a JSON array. response: ${repos}`);

    return repos.filter(repo => {
        if(options.filterForks && repo.fork)
            return false;

        if(options.filterSpecialRepo && repo.name === repo.owner.login)
            return false;

        if(options.filterArchived && repo.archived)
            return false;


        return true;
    }).sort((a, b) => {
        if(options.orderByMostStarred)
            return a.stargazers_count - b.stargazers_count;

        return a.name.localeCompare(b.name);
    });
}
