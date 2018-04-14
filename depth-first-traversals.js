// In preorder traversal, you process the node,
// then recursively call the method on the
// left subtree and then the right
// subtree.
const preorderTraverse = (node, array) => {
  if (!node) {
    return array
  }

  array.push(node.value)

  array = preorderTraverse(node.left, array)
  array = preorderTraverse(node.right, array)

  return array
}

// In inorder traversal, you first recursively
// call the method on the left tree, then
// process the node, and then call the
// method on the right tree.
const inorderTraverse = (node, array) => {
  if (!node) {
    return array
  }

  array = inorderTraverse(node.left, array)
  array.push(node.value)
  array = inorderTraverse(node.right, array)

  return array
}

// Postorder traversal, you recursively call
// the method on the left subtree, then
// the left subtree, then you process
// the node.
const postorderTraverse = (node, array) => {
  if (!node) {
    return array
  }

  array = postorderTraverse(node.left, array)
  array = postorderTraverse(node.right, array)
  array.push(node.value)

  return array
}

// For a sorted list out of a BST, you'd want to use [inorder]. If you're making
// a deep copy of a tree, [preorder] traversal is super useful since
// you'd copy a node, and then add its left child and then its
// right tree. [Postorder] would be useful if you're deleting
// a tree since you'd process the left tree, then
// the right, and only after the children had
// been deleted would you delete the
// node you're working on.

module.exports = {
  preorderTraverse,
  inorderTraverse,
  postorderTraverse
}
