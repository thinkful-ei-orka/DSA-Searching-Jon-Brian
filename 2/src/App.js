import React from 'react';
import './App.css';

const searchArray = [89, 30, 25, 32, 72, 70, 51, 42,
  25, 24, 53, 55, 78, 50, 13, 40,
  48, 32, 26, 2, 14, 33, 45, 72,
  56, 44, 21, 88, 27, 68, 15, 62,
  93, 98, 73, 28, 16, 46, 87, 28,
  65, 38, 67, 16, 85, 63, 23, 69,
  64, 91, 9, 70, 81, 27, 97, 82, 6,
  88, 3, 7, 46, 13, 11, 64, 76, 31,
  26, 38, 28, 13, 17, 69, 90, 1, 6,
  7, 64, 43, 9, 73, 80, 98, 46, 27,
  22, 87, 49, 83, 6, 39, 42, 51, 54,
  84, 34, 53, 78, 40, 14, 5];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Search Tool</h2>
        <form type='Submit' onSubmit={(e) => {
                                    e.preventDefault()
                                binarySearch(searchArray.sort(), e.target.elements.searchBox.value)}}>
          <label htmlFor='searchBox'>Search Item</label>
          <input id='searchBox'></input>
          <button type='Submit'>Submit</button>
        </form>
      </header>
      <main>

      </main>
    </div>
  );
}

function linear(array, searchFor) {
  // 53 moves to find 81

  let counter = 0;


  for (let i = 0; i < array.length; i++) {
    counter++;
    if (array[i] == searchFor) {
      console.log(`${counter} moves`)
      return `${counter} moves`
    }
  }
  console.log(`Not found: ${counter} moves`)
  return `Not found: ${counter} moves`
}

function binarySearch(array, value, start, end, counter = 0) {
  // found 81 in 6 moves

  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  
  counter++;
  console.log(`start: ${start}, end: ${end}`)
  if(array.length < 2){
    
  }

  if (item == value) {
    console.log(`Found in ${counter} moves`)
    return index;
  }
  else if (item < value) {
    console.log('<', counter, item, value)
    return binarySearch(array, value, index + 1, end, counter);
  }
  else if (item > value) {
    console.log('>', counter, item, value)
    return binarySearch(array, value, start, index - 1, counter);
  }
  if(end - start === 1 ){
    console.log(counter, array.length)
    counter++;
    console.log(`Not found: ${counter} moves`)
    return;
  }
  
  
};
export default App;
