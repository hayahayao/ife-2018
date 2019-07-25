var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    // 栈实现dfs
    var stack = [];
    stack.push(tree);
    var node;
    while (stack.length !== 0) {
        node = stack.pop();
        if (node.name === name) {
            return node.id;
        }
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
}
console.log(findIdByName('Lee'));
console.log(findIdByName('Saber'));

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    // 队列实现bfs
    var queue = [];
    queue.push(tree);
    var node;
    while (queue.length !== 0) {
        node = queue.shift();
        if (node.id === id) {
            return node.name;
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
}
console.log(findNameById(9));
console.log(findNameById(10));

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
    var stack = [];
    stack.push(tree);
    var node;
    while (stack.length !== 0) {
        node = stack.pop();
        console.log(node.name);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
}
getListWithDLR();
console.log('===');

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
    var stack = [];
    var node = tree;
    while (stack.length !== 0 || node) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        console.log(node.name);
        node = node.right;
    }
}
getListWithLDR();
console.log('===');

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
    var stack = [];
    var node = tree;
    var lastVisit = tree;
    while (node || stack.length !== 0) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack[stack.length-1];
        if (!node.right || node.right === lastVisit) {
            node = stack.pop();
            console.log(node.name);
            lastVisit = node;
            node = null;
        } else {
            node = node.right;
        }
    }
}
getListWithLRD();
console.log('===');
