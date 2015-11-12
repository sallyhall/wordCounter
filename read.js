var readTime = {
  configWPM: function (wpm) {
    readTime.wpm = wpm;
  },
  getWPM: function(){
    return readTime.wpm;
  },
  wpm: 0,
  convertToArray: function (html) {
    return html;
  },
  getTextFromNodes: function(array){
    var text = "";
    _.each(array, function (el,idx,arr) {
      text+=el.innerText;
    });
    return text;
  },
  removePunctuation: function (string) {
    var punctuation = ".,?!;:\"\'@#$%^&*()_-~`";
    var letters = string.split("");
    var filteredLetters = _.filter(letters,function (letter) {
      return punctuation.indexOf(letter)===-1;
    });
    return filteredLetters.join("");
  },
  countWords: function (string) {
    return string.split(" ").length;
  },
  calcWPM: function (wordCount) {
    return Math.floor(wordCount/readTime.wpm) +" minute read";
  },
  words: function (array) {
    text = readTime.getTextFromNodes(array);
    filteredText = readTime.removePunctuation(text);
    wordCount = readTime.countWords(filteredText);
    return readTime.calcWPM(wordCount);
  }
};
