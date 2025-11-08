document.addEventListener("DOMContentLoaded", function (e) {
    const bookContent = document.querySelector('.book__content')
    const bookFontSize = document.querySelector('.book__control_font-size')
    const bookColor = document.querySelector('.book__control_color')
    const bookBackground = document.querySelector('.book__control_background')

    bookFontSize.addEventListener('click', controlFontSize)
    bookColor.addEventListener('click', controlColor)
    bookBackground.addEventListener('click', controlBackground)

    function controlFontSize(e) {
        e.preventDefault()
        document.querySelectorAll('.font-size').forEach(item => item.classList.remove('font-size_active'))

        if (e.target.classList.contains('font-size_small')) {
            bookContent.classList.remove('font-size_big')
            bookContent.classList.add('font-size_small')
            e.target.classList.add('font-size_active')
        } else if (e.target.classList.contains('font-size_big')) {
            bookContent.classList.add('font-size_big')
            bookContent.classList.remove('font-size_small')
            e.target.classList.add('font-size_active')
        } else {
            bookContent.classList.remove('font-size_big')
            bookContent.classList.remove('font-size_small')
            e.target.classList.add('font-size_active')
        }
    }

    function controlColor(e) {
        e.preventDefault()
        document.querySelectorAll('.book__control_color .color').forEach(item => item.classList.remove('color_active'))

        bookContent.style.color = e.target.dataset.textColor
        e.target.classList.add('color_active')
    }

    function controlBackground(e) {
        e.preventDefault()
        document.querySelectorAll('.book__control_background .color').forEach(item => item.classList.remove('color_active'))

        bookContent.style.backgroundColor = e.target.dataset.bgColor
        e.target.classList.add('color_active')
    }


})