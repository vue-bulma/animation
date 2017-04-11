export const windowHeight = () => {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}

export const currentScrollTop = () => {
  return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
}
