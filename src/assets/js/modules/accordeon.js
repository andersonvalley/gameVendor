function accordeon() {
  const btns = document.querySelectorAll('.accordion__btn')

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('accordion__btn-open')
    })
  })
}

export default accordeon
