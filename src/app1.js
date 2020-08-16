import './app1.css'
import $ from 'jquery'

const $bt1 = $('#add1')
const $bt2 = $('#minus1')
const $bt3 = $('#mul2')
const $bt4 = $('#divide2')
const $num = $('#number')
const number = localStorage.getItem('number')
$num.text(number || 100)

$bt1.on('click',()=>{
    let n = parseFloat($num.text())
    n+=1
    localStorage.setItem('number',n)
    $num.text(n)
})
$bt2.on('click',()=>{
    let n = parseFloat($num.text())
    n-=1
    localStorage.setItem('number',n)
    $num.text(n)
})
$bt3.on('click',()=>{
    let n = parseFloat($num.text())
    n*=2
    localStorage.setItem('number',n)
    $num.text(n)
})
$bt4.on('click',()=>{
    let n = parseFloat($num.text())
    n/=2
    localStorage.setItem('number',n)
    $num.text(n)
})