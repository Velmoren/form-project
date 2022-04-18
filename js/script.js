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

const range = () => {
  const lowerSlider = document.getElementById('lower');
  const upperSlider = document.getElementById('upper');
  const lowerValue = document.getElementById('lowerValue')
  const upperValue = document.getElementById('upperValue')

  const lowerVal = parseInt(lowerSlider.value);
  const upperVal = parseInt(upperSlider.value);


  const updateValue = (lowerVal, upperVal) => {
    lowerValue.textContent = lowerVal
    upperValue.textContent = upperVal
  }

  upperSlider.addEventListener('input', () => {
    const lowerVal = parseInt(lowerSlider.value);
    const upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
      lowerSlider.value = upperVal - 4;

      if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
      }
    }

    updateValue(lowerVal, upperVal)
  });

  lowerSlider.addEventListener('input', () => {
    const lowerVal = parseInt(lowerSlider.value);
    const upperVal = parseInt(upperSlider.value);

    if (lowerVal > upperVal - 4) {
      upperSlider.value = lowerVal + 4;

      if (upperVal == upperSlider.max) {
        lowerSlider.value = parseInt(upperSlider.max) - 4;
      }
    }

    updateValue(lowerVal, upperVal)
  })

  updateValue(lowerVal, upperVal)
}

changeTheme()
range()