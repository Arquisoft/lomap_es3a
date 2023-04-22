export class Point {
    latitude: number
    longitude: number
    name: string
    category: string
    description: string
    id: string
    author:string
    review: Review[]
    image: ImageMarker[]
    dateCreated: number

    constructor(id: string,author:string, latitude: number, longitude: number,
                name: string, category: string,
                description:string, date:number, review: Review[], image: ImageMarker[]) {
        this.id = id;
        this.author=author;
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.description = description;
        this.category = category;
        this.dateCreated=date;
        this.review=review;
        this.image=image;
    }
}

export class Review {
    author: string
    reviewRating: number
    datePublished:number
    comment : string

    constructor(author: string, review_value: number, date_publish:number, comment: string) {
        this.author = author;
        this.reviewRating = review_value;
        this.datePublished = date_publish;
        this.comment = comment;
    }
}

export class ImageMarker {
    author: string
    contentUrl: string

    constructor(author: string, contentUrl: string) {
        this.author = author;
        this.contentUrl = contentUrl;
    }
}