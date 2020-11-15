console.log('hello world')
let num = 0
let addCount = () => {
    num++
    console.log(num)
    document.querySelector('.num').innerHTML = num
}