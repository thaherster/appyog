import { ADD_PRODUCT, UPDATE_PRODUCT } from "./types";

//add New Product
export const addProduct = () => dispatch => {
  dispatch({
    type: ADD_PRODUCT,
    payload: {}
  });
};

//Update old Product
export const updateProduct = newI => dispatch => {
  console.log("FINAL LIST");
  console.log(newI);
  dispatch({
    type: UPDATE_PRODUCT,
    payload: validate(newI)
  });
};

const validate = newI => {
  var lat = [];
  var map = {};

  for (var i = 0; i < newI.length; i++) {
    if (newI[i].text === "") {
      continue;
    }
    var array = newI[i].text.split(",");
    let key = "";
    for (var j = 0; j < array.length; j++) {
      key = key + "_" + array[j];
    }
    if (map[key] === undefined) {
      map[key] = 0;
    } else {
      map[key] = map[key]++;
      newI[i] = { text: newI[i].text, isDuplicate: true };
    }
  }
  return newI;
};
