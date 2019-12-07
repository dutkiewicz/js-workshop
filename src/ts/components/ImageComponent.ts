import BaseComponent from './BaseComponent.js';
import {ImageComponentPropsType} from '../interfaces.js'

export default class ImageComponent extends BaseComponent {
    title: string

    constructor(data: any) {
        super(data);
        this.title = data.content.id;
        this.initTemplate(data);
    }

    initTemplate = ({ content }: any) => {
        this.component = document.createElement('img');
        this.component.setAttribute('src', content.src);
        this.target.appendChild(this.component);
    };
};