import {MouseEventHandler} from "react";

export type User = {
    name: string;
    email: string;
}

export type NavItemType = {
    to: string;
    text: string;
}

export type TechButtonType = {
    href: string;
    img: string;
    text: string;
}

export type FilterType = {
    title: string;
    options: string[]
}

export type DocumentationButtonType = {
    href: string;
    text: string;
}

export type SliderType = {
    title: string;

    min: number;

    max: number;
}