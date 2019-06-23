//Capitalize the First Letter of the word:

var sentences = ["hello", "old friend", "today", "mac and cheese"]

console.log(sentences);

var code = sentences.map(sentence => sentence.split(" ").length > 1 ? sentence.replace(sentence[0],sentence[0].toUpperCase()) : sentence ) ;

console.log(code);