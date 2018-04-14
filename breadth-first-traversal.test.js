const { expect } = require('chai')
const { breadthFirstTraverse, recursiveBFT } = require('./breadth-first-traversal')

describe('tests', function () {
  const answer = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ]

  const tree = {
    value: 'A',
    left: {
      value: 'B',
      left: {
        value: 'D',
        left: {
          value: 'G',
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: 'E',
        left: null,
        right: {
          value: 'H',
          left: {
            value: 'K',
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: 'C',
      left: {
        value: 'F',
        left: {
          value: 'I',
          left: null,
          right: null
        },
        right: {
          value: 'J',
          left: null,
          right: null
        }
      },
      right: null
    }
  }

  xit('breadthFirstTraverse', () => {
    expect(breadthFirstTraverse([tree], [])).deep.equal(answer)
  })

  it('recursiveBFT', () => {
    expect(recursiveBFT([tree], [])).deep.equal(answer)
  })
})
