function getProperty(property, object) {
    for (const property in object) {
  return (`${object[property]}`);
}
}
var car = {
  model: 'Toyota'
}
getProperty(car.model,car);
