const $header = document.querySelector('#header')

document.querySelector('body').addEventListener('scroll', (evt) => {
    console.log("scroll");
    $header.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${(evt.currentTarget.scrollTop / evt.currentTarget.scrollHeight) * 4.5})`
})