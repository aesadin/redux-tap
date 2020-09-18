import kegListReducer from '../../reducers/form-visible-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    brand: "Pfriem",
    name: "Down Under",
    type: "IPA",
    price: "3.89",
    pintsInKeg: 124,
    alcoholContent: "7.2",
    id: 1
  };
  

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  })
});