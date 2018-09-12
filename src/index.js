/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  let numberOfLoveTriangles = 0;

  for (let i = 0; i < preferences.length; i++) { 

      let firstIndex = preferences[i] - 1;
      if (firstIndex === i) continue;

      let secondIndex = preferences[firstIndex] - 1;
      if (secondIndex === firstIndex) continue;

      let thirdIndex = preferences[secondIndex] - 1;
      if (thirdIndex === secondIndex) continue;

      if (thirdIndex === i) {
        numberOfLoveTriangles++;
      }
   }
   numberOfLoveTriangles /= 3;

   return numberOfLoveTriangles;
}
