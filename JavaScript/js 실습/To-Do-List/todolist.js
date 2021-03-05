function addItem(){
    // 유저가 add하려고 입력한 item
    var item = document.getElementById('text').value;
            // .val()가 아니다! 얘는 jQuery에서 사용 / js로는 .value를 사용

    
    var itemName = document.getElementById('item-name');

    // todolist 템플릿 하나
    var toDoLists = document.getElementById('to-do-lists');

    cloneList = toDoLists.cloneNode(true);
            // 역시 .clone()이 아니다! js에서는 cloneNode()사용, true를 통해 하위 노드까지 몽땅 복사o

    var cloneListChild = cloneList.childNodes;
    


    // for (var i=0; i<cloneListChild.length; i++){
    //     if(cloneListChild[i].nodeType != 1) continue    //텍스트제거

    //     var node = children.item(i);  
    //     console.log(node);
    // }
    

    // cloneList.childNodes.getElementById('item-name')       
    toDoLists.appendChild(cloneList);
    // toDoLists.find('item-name').html(itemName);
    // itemName.append(toDoLists);
}