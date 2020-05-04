export function setTitle(title) {
  return {
    type: '@title/SET_TITLE',
    payload: { title },
  };
}
