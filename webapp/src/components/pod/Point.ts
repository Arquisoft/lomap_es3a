interface Review {
    webId: string,
    img: string,
    score: number,
    comment: string,
}

export class Point {
    latitude: number
    longitude: number
    name: string
    category: string
    comment: string
    score: number
    id: string

    constructor(id: string, latitude: number, longitude: number, name: string, category: string, comment: string, score: number) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.comment = comment;
        this.category = category;
        this.score = score;
    }
}