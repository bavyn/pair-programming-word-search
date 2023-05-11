const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''))

  for (l of horizontalJoin) {
      if (l.includes(word)) {
          return true;
      }

  }
  const verticalJoin = []
  for (let col = 0; col < letters[0].length; col++) {
      let vertical;
      for (let row = 0; row < letters[0].length; row++) {
          vertical += letters[row][col];
      }
      verticalJoin.push(vertical);
  }

  for (let row of verticalJoin) {
      if (row.includes(word)) {
          return true;
      }
  }
  return false;
};
module.exports = wordSearch
