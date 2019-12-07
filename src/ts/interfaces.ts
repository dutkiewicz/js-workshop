import BaseComponent from './components/BaseComponent'

export interface BaseComponentType {
    id: string
    target: HTMLElement
    component: HTMLElement
    initTemplate(props: any): void
}

export interface ImageType {
    id: number
    src: string
}

export interface InputComponentType extends BaseComponent {
    
}

export interface ButtonComponentType extends BaseComponent {

}

export interface ImageComponentType extends BaseComponent {

}

export interface ImageComponentPropsType {
    id: string | number
    target: HTMLElement
    content: ImageType
}

export interface ImageComponentType {
    title: string
}

export interface GalleryCellComponentType extends BaseComponent {
    imageElement: HTMLElement
    imageTitleElement: HTMLElement
    removeButton: HTMLElement

}

export interface ImageMapType {
    [id: string]: ImageComponentType
}

export interface GalleryComponentType extends BaseComponent {
    images: ImageMapType
    galleryPanel: HTMLElement
    galleryContainer: HTMLElement
    input: InputComponentType
    generateButton: ButtonComponentType
    clearButton: ButtonComponentType
}