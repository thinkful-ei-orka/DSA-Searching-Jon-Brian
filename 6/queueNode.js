//creates node containing data and ref to next
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = _Node;