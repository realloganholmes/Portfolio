export class Project {
    id: number | undefined;
    name: string = '';
    description: string = '';
    reason: string = '';
    images: string[] = [];
    githubUrl: string = '';
    siteUrl: string = '';
    iosUrl: string = '';
    ranking: number | undefined;

    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.description) this.description = initializer.description;
        if (initializer.reason) this.reason = initializer.reason;
        if (initializer.images) this.images = initializer.images;
        if (initializer.githubUrl) this.githubUrl = initializer.githubUrl;
        if (initializer.siteUrl) this.siteUrl = initializer.siteUrl;
        if (initializer.ranking) this.ranking = initializer.ranking;
    }
}