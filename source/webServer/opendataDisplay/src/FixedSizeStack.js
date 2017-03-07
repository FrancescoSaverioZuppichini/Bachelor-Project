// super easy fixed stack implementation
class FixedSizeStack {
  constructor(maxSize, allowDuplicate) {
    this.maxSize = maxSize
    this.allowDuplicate = allowDuplicate || false
    this._data = []
  }

  getData() {
    return this._data
  }

  findItem(item) {
    return this._data.indexOf(item)
  }

  isItemInStack(item) {
    return this.findItem(item) >= 0

  }
  removeItem(item) {
    this._data.splice(this.findItem(item), 1)
  }

  getSize() {
    return this._data.length
  }

  addItem(item) {
    if (this.getSize() >= this.maxSize)
      this.pop()
    if (this.isItemInStack(item) && !this.allowDuplicate)
      return;
    this._data.push(item)
  }

  popFront() {
    return this._data.shift()
  }

  pop() {
    return this._data.pop()
  }

}
export default FixedSizeStack
