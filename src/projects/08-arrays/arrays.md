# Arrays

## Basics

- Arrays are high-level data structures (ways of holding information using JS) containing lists of data
- For example, rather than making four "friend" variables:

  ```js
  var friend1 = 'Mac'
  var friend2 = 'Dennis'
  var friend3 = 'Charlie'
  var friend4 = 'Dee'
  ```

- .We can use an array by making a comma-separated list:

  ```js
  var friends = ['Mac', 'Dennis', 'Charlie', 'Dee']
  ```

- Arrays are indexed starting at 0 (just like characters in a string). The index method is used to get data out of the array, e.g.:

  ```js
  condsole.log(friends[0]) // "Mac"
  friends[1] + ' & ' + friends[2] // "Dennis & Charlie"
  ```

- Arrays are useful in that they can be updated by simply stating, for example: `friends[0] = 'Frank'`; all lines of code that would have otherwise produced "Mac" now say "Frank".
- Arrays are also useful in that new data can be added to them without modifying the original line of "var friends …" Rather, you can simply assign a new value/string (or any other data, including "true," "null," or even other arrays) to the next available index, and it will be added to the array, e.g.: `friends[4] = 'Cricket'`;
- To initialise an array without yet adding data to the array, you can simply state:`var friends = []` or `var friends = new Array()`
- Arrays also have a length property that can be called by using `.length`:

  ```js
  var friends = ['Frank', 'Dennis', 'Charlie', 'Dee', 'Cricket']
  friends.length // returns 5 (because there are 5 friend values)
  ```

- Arrays can be nested within arrays like so:

  ```js
  var friendGroups = [['Friend 1', 'Friend 2'][('Friend A', 'Friend B')]]
  ```

- NOTE: When arrays are nested, you can call a specific index within a nested array like so:

  ```js
  console.log(friendGroups[1][0])
  // "Friend A" (takes the second index of the first array, and the
  // first index of the nested array)
  ```

## Built-In Array Methods

- For a complete list of Array Methods, refer to the "Methods" section in the MDN link to "Arrays" above.

### Push/Pop

- Use `push()` to add a value to the END of an array (rather than having to count or use "length" to figure out which index in the array you would have to manually add the value to):

  ```js
  var colors = ['red', 'orange', 'yellow']
  colors.push('green') // ['red', 'orange', 'yellow', 'green']
  ```

- If you were to then state `colors.pop();`, then "green" would be removed, because `pop()` removes the last item in an array.
- NOTE: When `pop()` is used, the console actually returns the removed variable. Because a value is returned, that means it can be stored as a variable if so stated:

  ```js
  var removedColor = colors.pop() // stores "green"
  ```

### Unshift/Shift

- `unshift()` and `shift()` operate in the same way as `push()` and `pop()`, except that they add/remove values to the **beginning** of an array.
- NOTE: While counterintuitive, remember that `unshift()` is used to ADD, not to remove.

### indexOf

- `indexOf()` takes an argument and tries to find that argument in a given array. If it finds it, then it will return the FIRST index of where it's found in the array:

  ```js
  var friends = ['Frank', 'Dennis', 'Charlie', 'Dee', 'Cricket']
  friends.indexOf('Dennis') // 1
  ```

- NOTE: Remember that `indexOf()` will only return the FIRST index, so if the same argument appears elsewhere in the array, that index will not be returned.
- ALSO: If an argument is NOT present, "-1" will be returned.

### Slice

- `slice()` is used to copy different portions of an array:

  ```js
  var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
  var citrus = fruits.slice(1, 3)
  ```

- results in:

  ```js
  var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
  var citrus = ['Orange', 'Lemon']
  ```

- NOTE: The first number in slice argument signifies the first index that will be copied ('Orange'), and the second number represents where the slice will end AND IS NON-INCLUSIVE ('Apple'). Thus, only 'Orange' and 'Lemon' are copied out.
- TIP: If you want to Duplicate an entire array, simply omit the numbers in the slice argument, and all data in the array will be copied over.

### Splice

- `splice()` changes the contents of an array by removing and/or adding elements at any point in the index.
- To remove an element, use this syntax:

  ```js
  var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
  fruits.splice(1, 2)
  ```

- results in:

  ```js
  var fruits = ['Banana', 'Apple', 'Mango']
  ```

- The `splice()` syntax works by using the first number as the index number at which to start changing the array (in this case, index 1, which is 'Orange'). The second number is the Delete Count, which can be 0 (to not delete the starting index) or any other positive number to indicate how many indices (beginning from your starting index) are to be deleted (in this case, delete two indices starting with index 1, which means deleting indices 1 and 2, i.e., 'Orange' and 'Lemon').
- To Add an element, use this syntax:

  ```js
  var fruits = ['Banana', 'Apple', 'Mango']
  fruits.splice(1, 0, 'Orange', 'Lemon')
  ```

- results in:

  ```js
  var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
  ```

- In this case, `splice()` is told to:
  1. look at index 1 (starting as 'Apple'),
  2. abstain from deleting the element at index 1,
  3. insert 'Orange' as the new index 1, and
  4. insert 'Lemon' after 'Orange' (this addition process can be repeated indefinitely and will ensure that 'Mango' remains as the last index).

## Array Iteration

- The process in which a code will run through every element in an array, rather than just one element. For example, message board comments are stored in an array, and they are only displayed when some code runs through that array and creates HTML content for each comment stored in the array.

### For Each Iteration

- Newer method:

  ```js
  var colors = ['red', 'orange', 'yellow', 'green']
  colors.forEach(function(color) {
    // "color" is a placeholder to represent a console.log(color);
    // singular instance of any given element in the collection;
    // call it whatever you want
  })
  ```

- Essentially, the "color" placeholder argument merely represents the value of every element in the array. Thus, the code is calling the `console.log()` function "for each" element, and then passing in each element's value.
- Alternatively, you could set a function beforehand, and then run it through `forEach()`:

  ```js
  var colors = ['red', 'orange', 'yellow', 'green']
  function printColors(color) {
    console.log(color)
  }
  colors.forEach(printColors)
  ```

- _IMPORTANT_: `forEach()` executes a callback function once for each element in the array in ascending order. The callback function is expected to have _AT LEAST 1 (BUT UP TO 3) ARGUMENTS_ separated by commas)
- The first argument represents the Element in the array. The second argument represents the Index of said element. The third argument represents the Array that `forEach()` was called on (which will be the same for every iteration of the loop). Thus, if you want to print both the contents of a list along with its index number, you would state:

  ```js
  var colors = ['red', 'orange', 'yellow', 'green']
  function printColors(x, i) {
    console.log(i + ': ' + x)
  }
  colors.forEach(printColors)
  ```

- which results in:

  ```js
  0: red
  1: orange
  2: yellow
  3: green
  ```

### For Loop Iteration

- Older method:

  ```js
  var colors = ['red', 'orange', 'yellow', 'green'];
  for (var i = 0; i `< colors.length; i++) {
  console.log(colors[i]);
  }
  ```

- The above code will start by printing `index[0]` of "colors" to the console, and repeat the process until reaching `index[3]`. This is possible because the length of "colors" is 4, and the final index value is 3. As the final index in an array will always be one digit smaller than the length of the array, this loop will necessarily run until all array values are printed.
