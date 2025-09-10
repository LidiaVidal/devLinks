function toggleMode() {
    const html = document.documentElement //document element puxa a tag html
    /* Uma forma de fazer
     if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    */
    const img = document.querySelector('#profile img')

    html.classList.toggle('light')

     if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/Avatar.png")
    } else {
        img.setAttribute("src", './assets/avatar-dark.png')
    }
}
