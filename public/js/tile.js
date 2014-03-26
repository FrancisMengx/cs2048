function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
Tile.prototype.displayPair = {
  2:"Bit",
  4:"Byte",
  8:"Int",
  16:"Float",
  32:"Long",
  64:"Double",
  128:"Array",
  256:"Stack",
  512:"BST",
  1024:"RBTree",
  2048:"HashMap"
}
