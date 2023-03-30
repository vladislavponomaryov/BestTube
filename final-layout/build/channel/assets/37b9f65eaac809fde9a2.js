(function () {

    let selector = '.video main .content.video .primary .videoDesc .description'

    if (!document.querySelector(selector)) return

    let mainElement = document.querySelector(selector)

    mainElement.addEventListener('click',() => {
        mainElement.classList.toggle('mini')
    })
})()