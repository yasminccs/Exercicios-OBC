export class Component{
    #element = null
    constructor(tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    getElementAccess(){
        return this.#element
    }

    build(){
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
        return this
    }

    render(){
        if (this.parent instanceof Component){
            this.parent.getElementAccess().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}
























// class Component {
//     #id
//     constructor(element, id){
//         this.element = element
//         this.#id = id
//         this.build()
//     }

//     accessId(){
//         return this.element.id = this.#id
//     }

//     build(){
//       this.element = document.createElement(`${this.element}`)
//       return this.element
//     }

//     render(){
//         const body = document.querySelector('#bd')
//         return body.appendChild(this.element) 
//     }
// }

// class Input extends Component{
//     constructor(type, value, element, id){
//         super(element, id)
//         this.type = type
//         this.value = value

//         this.element.type = this.type
//         this.element.value = this.value
//     }
// }

// class Label extends Component{
//     constructor(text, element, id){
//         super(element, id)
//         this.text = text

//         this.element.innerText = this.text
//     }
// }

// class Form extends Component{
//     constructor(action, method, element, id){
//         super(element, id)
//         this.action = action
//         this.method = method

//         this.element.action = this.action
//         this.element.method = this.method
//     }

//     addElements(element){
//         return this.element.append(element)
//     }
// }

// const newLabel = new Label('Idade: ', 'label', 'labelTest')
// newLabel.render()
// console.log(newLabel)

// const newInput = new Input('number', '123', 'input', 'inputTest')
// newInput.render()
// console.log(newInput)

// const idAcc = newInput.accessId()
// console.log(idAcc)

// const newForm = new Form('cadastro.js', 'post', 'form', 'formTest')
// newForm.render()
// console.log(newForm)

//module.exports = Component