function getFirstSelector(selector) {
  return querySelector(selector)
}

function nestedTarget() {
  document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  const x = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = x.length; i < l; i++) {
    let y = x[i].children;

    for (let j = 0; y.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}