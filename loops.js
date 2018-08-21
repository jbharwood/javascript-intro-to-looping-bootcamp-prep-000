function forLoop(array) {
  for (let i = 0; i < 26; i++) {
     if (i === 0)
      array["I am 1 strange loop."]
     if ( i > 1)
      array["I am " + i + " strange loops."]
  }
  return array
}