let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  // get the Distance of two points
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
  // return an String depending on the distances 
  let getDistanceHint = distance => {
    if (distance < 30) {
      return "casi casiiii!";
    } else if (distance < 40) {
      return "Re caliente";
    } else if (distance < 60) {
      return "te estas calentando de a poquitooo";
    } else if (distance < 100) {
      return "mas o menos..";
    } else if (distance < 180) {
      return "frio";
    } else if (distance < 360) {
      return "congeladisimo";
    } else {
      return "ni cerca";
    }
  }