import removeItem from './removeItem'

function addItem() {
  const addBtn = document.querySelector('.catalog__item-add-btn')
  const catalog = document.querySelector('.catalog__list')

  let html = `
      <div class="item__remove"></div>
      <div class="item__img">
        <img src="assets/img/catalog/14.png" alt="product" />    
      </div>
      <a href="#" class="item__badge badge badge-rpg">
        <div class="badge__point"></div>
        <span>Action RPG</span>
      </a>

      <a href="#" class="item__title">untitled</a>
      <div class="item__raiting raiting">
        <ul class="raiting__list">
          <li class="raiting__item raiting__item-empty"></li>
          <li class="raiting__item raiting__item-empty"></li>
          <li class="raiting__item raiting__item-empty"></li>
          <li class="raiting__item raiting__item-empty"></li>
          <li class="raiting__item raiting__item-empty"></li>
        </ul>
        <span class="raiting__count">0</span>
      </div>
      <p class="item__descr">Non released</p>

      <div class="item__inner">
        <div class="item__price price">
          <div class="item__price-group">
            <span class="item__price-old"></span>
            <span class="item__price-current"></span>
          </div>

        </div>
      </div>
  `

  addBtn.addEventListener('click', () => {
    addBtn
      .querySelector('.catalog__item-add-btn-icon')
      .classList.add('catalog__item-add-btn-icon-load')

    addBtn.querySelector('.text').textContent = 'Additing'

    let li = document.createElement('li')
    li.className = 'catalog__item item'
    li.innerHTML = html

    catalog.append(li)

    setTimeout(() => {
      addBtn
        .querySelector('.catalog__item-add-btn-icon')
        .classList.remove('catalog__item-add-btn-icon-load')

      addBtn.querySelector('.text').textContent = 'Add card'
    }, 1500)

    removeItem()
  })
}

export default addItem()
