// Breadth-first is a way to traverse in order
// to stay closer to the root node vs going
// deep in the tree like depth-first
// does. With breadth-first, you
// use a queue to maintain
// the correct order to
// process the tree

const recursiveBFT = (queue, array) => {
  if (!queue.length) {
    return array
  }

  const node = queue.shift()

  array.push(node.value)

  if (node.left) {
    queue.push(node.left)
  }

  if (node.right) {
    queue.push(node.right)
  }

  return recursiveBFT(queue, array)
}

const breadthFirstTraverse = (queue, array) => {
  if (!queue || !queue.length) {
    return array
  }

  while (queue.length) {
    let node = queue.shift()

    if (node.value) {
      array.push(node.value)
    }

    if (node && node.left) {
      queue.push(node.left)
    }

    if (node && node.right) {
      queue.push(node.right)
    }
  }

  return array
}

module.exports = {
  breadthFirstTraverse,
  recursiveBFT
}
