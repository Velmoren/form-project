const changeTheme = () => {
  const themeButtons = document.querySelectorAll('.theme-btn');

  themeButtons.forEach(themeBtn => {
    themeBtn.addEventListener('click', () => {
      const activeTheme = themeBtn.dataset.theme;

      themeButtons.forEach(btn => {
        themeBtn === btn ? btn.classList.add('active') : btn.classList.remove('active')
        document.body.classList.remove(`theme-${btn.dataset.theme}`)
      })

      document.body.classList.add(`theme-${activeTheme}`)
    })
  })
}

changeTheme()