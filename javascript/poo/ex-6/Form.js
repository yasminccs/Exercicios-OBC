import { Component } from "./Component.js";

export class Form extends Component{
    constructor(parent, options){
        super('form', parent, options)
    }

    addChildren(...children){
        children.forEach(child => {
            this.getElementAccess().appendChild(child.getElementAccess()) //this.getElementAccess é o próprio form e child.getElementAccess é cada um dos elementos adicionados aos form da array
        })
    }
}