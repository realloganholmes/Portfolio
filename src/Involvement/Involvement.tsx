export class Involvement {
    id: number | undefined;
    name: string = '';
    description: string = '';
    images: string[] = [];

    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.description) this.description = initializer.description;
        if (initializer.images) this.images = initializer.images;
    }
}