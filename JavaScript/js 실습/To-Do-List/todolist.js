function addItem(){
    // 유저가 add하려고 입력한 item
    var item = document.getElementById('text').value;
            // .val()가 아니다! 얘는 jQuery에서 사용 / js로는 .value를 사용

    // todolist 템플릿
    var toDoLists = document.getElementById('to-do-lists');

    // 해당 템플릿을 복사해 입력 받을 때마다 하나씩 추가
    cloneList = toDoLists.cloneNode(true);
            // 역시 .clone()이 아니다! js에서는 cloneNode()사용, true를 통해 하위 노드까지 몽땅 복사o

    cloneList.childNodes[1].innerHTML = item;
            // 복사한 clondList의 자식 노드 중 첫번째(item-name)요소에 접근, 유저가 add한 값으로 변경

    // toDoLists.appendChild(cloneList);
            // toDoLists에 복사 후 변경한 cloneList를 추가해줌
            // 하지만 이 경우, toDoList의 자식으로 들어가기 때문에 다음 item이 입력되면 이전 것들이 함께 복사되고 맘
    ToDoBody.appendChild(cloneList);
            // 따라서 그 부모인 ToDoBody의 자식요소로 cloneList를 추가해줌

    cloneList.id = "nomoreClone";
            // 현재 복사하는 템플릿(to-do-list)는 display none이므로, 이를 벗어나기 위해 새로운 id 할당
            // 아예 id를 제거하고 싶은데... jQuery의 removeAttr('id')와 같은 역할을 찾기가 어렵다
}