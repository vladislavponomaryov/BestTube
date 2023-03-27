(function () {
    let mainContainer = document.querySelector('main .content')
    let mainContainerStyle = getComputedStyle(mainContainer)
    let mainContainerWidth = clearPX(mainContainerStyle.getPropertyValue('width'))
    let currentCW, largeCW = 1700, desktopCW = 1400, mediumCW = 982, smallCW = 600, extraSmallCW = 599.95

    function clearPX(element) {
        return +element.slice(0, element.length - 2)
    }

    new ResizeObserver(entries => {
        // We wrap it in requestAnimationFrame to avoid this error - ResizeObserver loop limit exceeded
        window.requestAnimationFrame(() => {
            if (!Array.isArray(entries) || !entries.length) {
                return;
            }
            getParams()
            controll()
        });
    }).observe(mainContainer);

    function getParams() {
        mainContainerStyle = getComputedStyle(mainContainer)
        mainContainerWidth = clearPX(mainContainerStyle.getPropertyValue('width'))
    }

    function addStyles(styles) {
        let id = 'mainContentStyles'

        if (document.getElementById(id)) {
            let stylesElement = document.getElementById(id)
            stylesElement.innerHTML = styles

        } else {
            let stylesElement = document.createElement('style')
            stylesElement.id = id
            document.head.append(stylesElement)

            stylesElement.innerHTML = styles
        }

    }

    function checkCurrentPosition(gettingCW,width) {
        if (currentCW !== gettingCW) {
            currentCW = gettingCW
            let additional = ''

            if (currentCW === largeCW || currentCW === mediumCW) {
                additional = 'main .content section:last-child, main .content section:nth-child(31) {display: none}'
            }

            addStyles(`
            main .content section {flex: 1 0 calc(${width} - 16px - 0.01px)}${additional}`)
        }
    }

    function controll() {

        switch (true) {
            case mainContainerWidth > largeCW: {
                checkCurrentPosition(largeCW,'20%')
                break;
            }
            case mainContainerWidth > desktopCW: {
                checkCurrentPosition(desktopCW,'25%')
                break;
            }
            case mainContainerWidth > mediumCW: {
                checkCurrentPosition(mediumCW,'33%')
                break;
            }
            case mainContainerWidth > smallCW: {
                checkCurrentPosition(smallCW,'50%')
                break;
            }
            case mainContainerWidth < extraSmallCW: {
                checkCurrentPosition(extraSmallCW,'100%')
                break;
            }
        }
    }

})()