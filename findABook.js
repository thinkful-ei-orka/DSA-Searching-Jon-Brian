library = [
  {
    bookTitle: 'Test 1',
    ddi: '400.131',
  },
  {
    bookTitle: 'Test 3',
    ddi: '400.133',
  },
  {
    bookTitle: 'Test 7',
    ddi: '400.137',
  },
];

function findBook(
  ddi,
  bookTitle,
  library,
  start = 0,
  end = library.length - 1
) {
  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const book = library[index];
  if (parseFloat(book.ddi) == ddi) {
    if (book.bookTitle === bookTitle) {
      return index;
    }
  } else if (parseFloat(book.ddi) < ddi) {
    return bookFinder(ddi, bookTitle, library, index + 1, end);
  } else if (parseFloat(book.ddi) > ddi) {
    return bookFinder(ddi, bookTitle, library, start, index - 1);
  }
}
