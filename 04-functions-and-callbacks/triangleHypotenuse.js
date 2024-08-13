function triangleHypotenuse(base, height) {
    function square(side) {
      return side * side;
    }
      
    return Math.sqrt(square(base) + square(height));
  }
  
  console.log(triangleHypotenuse(20, 10));