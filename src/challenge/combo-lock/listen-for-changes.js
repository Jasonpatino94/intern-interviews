(function () {
  const chevronUps = Array.from(document.querySelectorAll('.chevron-up'))
  const chevronDowns = Array.from(document.querySelectorAll('.chevron-down'))

  chevronUps.forEach(chevron => {
    const index = chevron.parentNode.getAttribute('index')
    chevron.addEventListener('click', (e) => window.changeDialValue(index, 1, e))
  })

  chevronDowns.forEach(chevron => {
    const index = chevron.parentNode.getAttribute('index')
    chevron.addEventListener('click', (e) => window.changeDialValue(index, -1, e))
  })

  window.mobx.autorun(() => {
    // our lock will render itself any time the values of the lock state are changed
    window.renderLock()
  })
})()
