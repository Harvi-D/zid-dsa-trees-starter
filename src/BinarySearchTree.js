class BinarySearchTree {
  //if key is null, object represents aan empty tree;
  //null parent pointer means you are dealing with a root node;
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    //pointers to child nodes initialized as null;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    // If the tree is empty, then this key being inserted 
    //is the root node of the tree.
    if (this.key == null) {
      this.key = key;
      this.value = value;

    /* If the tree already exists, then start at the root,
    and compare it to the key that you want to insert.
    If the new key is less than the node's key,
    then the new node needs to live in the left-hand branch. */
    } else if (key < this.key) {
      if (this.left == null) {
        this.left == new BinarySearchTree(key, value, this);
      }else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
}
