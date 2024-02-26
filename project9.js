 function numberOfVowels(value) { 

   // find the number of vowels by using the match  and length function
      const countNumberOfVowels = value.match(/[aeiou]/gi).length;
   
   return countNumberOfVowels;
 }

 // take input
  const input = prompt('Enter an Alphabet: ');

//Return number of vowels in a string
  const result = numberOfVowels(input);

 console.log(result);
