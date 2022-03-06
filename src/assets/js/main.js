import { lazyLoadInstance } from './modules/lazy'
import { isWebp } from './modules/webp'
import removeItem from './modules/removeItem'
import addItem from './modules/addItem'
import accordeon from './modules/accordeon'

isWebp()
document.addEventListener('DOMContentLoaded', () => {
  lazyLoadInstance.update()
  removeItem()
  accordeon()
  addItem()
})
