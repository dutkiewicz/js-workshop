import BaseComponent from './BaseComponent.js';
import {ButtonComponentType} from '../interfaces.js'

export default class ButtonComponent extends BaseComponent implements ButtonComponentType {
    
    constructor(props: any) {
        super(props);
        this.initTemplate(props);
    }

    initTemplate = ({ content, onClickHandler}: any) => {
        this.component = document.createElement('button');
        this.component.innerText = content;
        this.component.addEventListener('click', onClickHandler);
        this.target.appendChild(this.component);
    };
};