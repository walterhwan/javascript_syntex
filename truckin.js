function tuckin(numTruck) {
  let fuel = numTruck * 100;
  let miles = 0;
  while (fuel > 0) {
    let traveled = 100 / numTruck;
    miles += traveled;
    fuel -= traveled * numTruck;
    numTruck -= 1;
  }

  return miles;
}

console.log(tuckin(50));
