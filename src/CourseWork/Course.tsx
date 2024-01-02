export class Course {
    id: number | undefined;
    name: string = '';
    description: string = '';
    images: string[] = [];
    technologies: string[] = [];
    grade: number | undefined;
    ranking: number | undefined;

    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.description) this.description = initializer.description;
        if (initializer.technologies) this.technologies = initializer.technologies;
        if (initializer.images) this.images = initializer.images;
        if (initializer.grade) this.grade = initializer.grade;
        if (initializer.ranking) this.ranking = initializer.ranking;
    }
}