var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
};
function obj2arr (obj) {
    var arr = [];
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        var item = [];
        item.push(keys[i]);
        var subkeys = Object.keys(obj[keys[i]]);
        for (var j = 0; j < subkeys.length; j++) {
            item.push(obj[keys[i]][subkeys[j]]);
        }
        arr.push(item);
    }
    return arr;
}
console.log(obj2arr(scoreObject));

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];
function arr2obj (menu, pid) {
    var res = {};
    for (var i = 0; i < menu.length; i++) {
        if (menu[i][2] === pid) {
            var item = {name: menu[i][1]};
            var subMenu = arr2obj(menu, menu[i][0]);
            if (Object.keys(subMenu).length > 0) {
                item.subMenu = subMenu;
            }
            res[menu[i][0]] = item;
        }
    }
    return res;
}
console.log(arr2obj(menuArr, -1));
