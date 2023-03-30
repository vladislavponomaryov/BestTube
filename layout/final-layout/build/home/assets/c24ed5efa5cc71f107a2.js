(function () {
    document.querySelector('#button-mobile-search').addEventListener('click', () => {
        let searchBox = document.querySelector('body header .center')

        searchBox.classList.toggle('visible')
    })

    document.querySelector('#button-back').addEventListener('click', () => {
        let searchBox = document.querySelector('body header .center')

        searchBox.classList.toggle('visible')
    })
})()