import produce from 'immer';

const INITIAL_STATE = {
  title: 'Globo Hub',
};

export default function slideShow(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@title/SET_TITLE': {
        draft.title = action.payload.title;
        break;
      }
      default:
    }
  });
}
