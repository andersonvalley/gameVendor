function removeItem() {
  const removeBtns = document.querySelectorAll('.item__remove')

  removeBtns.forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.parentElement

      item.classList.add('item__remove-loading')

      setTimeout(() => {
        parent.remove()
      }, 1500)
    })
  })
}

export default removeItem
