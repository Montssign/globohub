export function setSlide(toSlide) {
  return {
    type: '@slideShow/SET_SLIDE',
    payload: { toSlide },
  };
}
