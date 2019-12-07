import BaseComponent from './BaseComponent.js';
import { InputComponentType } from '../interfaces.js'

export default class InputComponent extends BaseComponent implements InputComponentType {
    constructor(props: any) {
        super(props);
        this.initTemplate();
    }

    initTemplate = () => {
        this.component = document.createElement('input');
        this.target.appendChild(this.component);
    };
};