import "./styles/index.css"
//const helloWorldNpm = require('hello-world-npm')
import helloWorldNpm from "hello-world-npm"
const hello = () => {
    console.log(`Teste de funcionamento: ${helloWorldNpm()}`)
}
hello()