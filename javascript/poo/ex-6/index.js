import { Component } from "./Component.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";

const title = new Component('h1', 'body', { innerText: 'POO - Classes' })
title.render()
console.log(title)
title.tag = 'h3'
title.build().render()

const form = new Form('body')
form.render()

const label = new Label('Nome: ', form, { id: 'labelTest' })
label.render()

const input = new Input(form, { type: 'text', id: 'inputTest' })
input.render()

form.addChildren(label, input)

//pode fazer direto no addChildren

form.addChildren( 
    new Component('br'),
    new Component('br'),
    new Label('Nascimento: ', { id: 'labelBirth' }),
    new Input({ type: 'date', id: 'inputBirth' })
) //não é preciso passar o parent pq já tá dentro do form e tbm n precisa chamar render pq ja tem o appendChild no form