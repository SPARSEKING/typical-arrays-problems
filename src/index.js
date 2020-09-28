
exports.min = function min (array) {
  if (array === undefined || array[0] === undefined){
    return 0;
  }
    let variable = array[0];
    for (let i = 0; i <= array.length; i++){
        if (array[i] < variable){
          variable = array[i];
        }
      }
      return variable;
};

exports.max = function max (array) {
  if (array === undefined || array[0] === undefined){
    return 0;
  }
    let variable = array[0];
    for (let i = 0; i <= array.length; i++){
        if(array[i] > variable){
          variable = array[i];
        }
    }
    return variable;
  
};

exports.avg = function avg (array) {

  if (array === undefined || array[0] === undefined){
    return 0;
  }
  let sum = 0;
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
  let average = sum / array.length;
  return average;
};

