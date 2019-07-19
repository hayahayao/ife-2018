function getAllListItem() {
    // 返回页面中所有li标签

    // return document.getElementsByTagName('li');
    
    return document.querySelectorAll('li');
}

function findAllHtmlSpanInOneSection(sectionId) {
    // 返回某个section下所有span中内容为HTML的span标签
    
    // var spans = document.getElementsByTagName('span');
    // var res = [];
    // for (var i = 0; i < spans.length; i++) {
    //     if (spans[i].innerHTML === 'HTML' && spans[i].parentNode.parentNode.parentNode.parentNode.id === sectionId) {
    //         res.push(spans[i]);
    //     }
    // }
    // return res;

    var spans = document.querySelectorAll('#'+sectionId+' span');
    var res = [];
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerHTML === 'HTML') {
            res.push(spans[i]);
        }
    }
    return res;
}

function findListItem(sectionId, spanCont) {
    // 返回某个section下，所有所包含span内容为spanCont的LI标签

    // var spans = document.getElementsByTagName('span');
    // var res = [];
    // for (var i = 0; i < spans.length; i++) {
    //     if (spans[i].innerHTML === spanCont && spans[i].parentNode.parentNode.parentNode.parentNode.id === sectionId) {
    //         res.push(spans[i].parentNode);
    //     }
    // }
    // return res;

    var spans = document.querySelectorAll('#'+sectionId+' span');
    var res = [];
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerHTML === spanCont) {
            res.push(spans[i].parentNode);
        }
    }
    return res;
}

function getActiveLinkContent(sectionId) {
    // 返回某个section下，class为active的链接中包含的文字内容
    
    // var nodes = document.getElementById(sectionId).children[1].children[0].children;
    // var res = '';
    // for (var i = 0; i < nodes.length; i++) {
    //     if (nodes[i].children[1].className === 'active') {
    //         res = nodes[i].children[1].innerHTML;
    //     }
    // }
    // return res;

    var node = document.querySelector('#'+sectionId+' .active');
    return node.innerHTML;
}

var items = getActiveLinkContent('news-normal');
console.log(items);
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'red';
// }
