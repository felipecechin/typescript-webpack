import $ from 'jquery'
import Livro from "./modelo/livro";

const livro = new Livro('Dom Quixote', 107.30, 0.60)
console.log(livro.precoComDesconto())

let corpo = $('body')

corpo.append('<h1>' + livro.nome + '</h1>')
corpo.append('<h2>R$ ' + livro.precoComDesconto() + '</h2>')
