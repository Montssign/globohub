import produce from 'immer';

const INITIAL_STATE = {
  currentStep: 1,
};

export default function slideShow(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@slideShow/SET_SLIDE': {
        draft.currentStep = action.payload.toSlide;
        break;
      }
      default:
    }
  });
}
