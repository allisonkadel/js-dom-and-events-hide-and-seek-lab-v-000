function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.getElementById('nested')
}

function increaseRankBy(n) {
    let collection = document.getElementsByClassName('ranked-list')
    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < collection[i].children.length; j++) {
            collection[i].children[j].innerHTML = parseInt(collection[i].children[j].innerHTML) + n
        }
    }
}

function deepestChild() {
    let firstNode = document.querySelector('#grand-node').children[0]
    let secondNode = firstNode.children[0]
    while(secondNode) {
        firstNode = secondNode;
        secondNode = firstNode.children[0]
    }
    return firstNode
}