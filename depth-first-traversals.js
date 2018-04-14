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

module.exports = {
  preorderTraverse,
  inorderTraverse,
  postorderTraverse
}
