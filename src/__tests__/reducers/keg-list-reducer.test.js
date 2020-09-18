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

  const currentState = {
    1: {
      brand: "Pfriem",
      name: "Down Under",
      type: "IPA",
      price: "3.89",
      pintsInKeg: 124,
      alcoholContent: "7.2",
      id: 1 
    },
    2: {
      brand: "Modern Times",
      name: "Star Cloud",
      type: "Hazy IPA",
      price: "3.89",
      pintsInKeg: 124,
      alcoholContent: "6.8",
      id: 2
    }
  }

  test('Should succesfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        brand: "Modern Times",
        name: "Star Cloud",
        type: "Hazy IPA",
        price: "3.89",
        pintsInKeg: 124,
        alcoholContent: "6.8",
        id: 2
      }
    });
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { brand, name, type, price, pintsInKeg, alcoholContent, id } = kegData;
    action = {
      type: 'ADD_KEG',
      brand: brand,
      name: name,
      type: type,
      price: price,
      pintsInKeg: pintsInKeg,
      alcoholContent: alcoholContent,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        brand: brand,
        name: name,
        type: type,
        price: price,
        pintsInKeg: pintsInKeg,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });
  

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  })
});