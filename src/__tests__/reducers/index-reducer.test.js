
import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  
  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false
    });
  });
  
  test('Check that initial state of kegListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_KEG',
      brand: "Pfriem",
      name: "Down Under",
      type: "IPA",
      price: "3.89",
      pintsInKeg: 124,
      alcoholContent: "7.2",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});