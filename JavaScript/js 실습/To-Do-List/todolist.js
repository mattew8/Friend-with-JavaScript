var listNum = 1

window.onload = function(){
    // list를 추가
    document.getElementById('add-btn').onclick = addItem;

    // 추가된 모든 list 제거
    document.getElementById('clear-btn').onclick = clearAll;
}

function addItem(){
    // 유저가 add하려고 입력한 item
    var item = document.getElementById('text').value;
            // .val()가 아니다! 얘는 jQuery에서 사용 / js로는 .value를 사용

    // 아무 것도 입력하지 않았을 경우 -> 함수 작동x 그냥 return
    if(item===""){
        return;
    }

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

    cloneList.id = listNum;
            // 현재 복사하는 템플릿(to-do-list)는 display none이므로, 이를 벗어나기 위해 새로운 id 할당
            // 아예 id를 제거하고 싶은데... jQuery의 removeAttr('id')와 같은 역할을 찾기가 어렵다
    listNum++;
            // 따라서 listNum이라는 변수를 id에 할당해 각 item들이 id로 구분될 수 있도록 했다!
    
    document.getElementById('text').value = "";
            // add완료한 후 text입력창을 비워준다. 그런데 이를 item = "";으로 적으면 작동을 안한다...! 똑같은 거 아닌가??

    document.getElementById('text').focus();
            // add한 후 text입력창에 커서가 가도록!
}

function completeItem(checked){
    var itemList = checked.parentNode.parentNode;
            // 완료 버튼의 상위 부모(각 list)에 접근

    var completeItem = itemList.querySelector('#item-name')
            // 해당 list에서 완료된 item의 이름을 가져옴

    completeItem.style.textDecoration="line-through";
            // 이름 가운데 줄 긋기
}

function deleteItem(checked){
    var itemList = checked.parentNode.parentNode;
            // 마찬가지! 상위 부모(각 list) 접근

    var toDoBody = checked.parentNode.parentNode.parentNode
            // 이 list의 상위 부모(todolist 전체)에 접근

    toDoBody.removeChild(itemList);
            // removeChild를 통해 해당 list를 제거
}

function clearAll(){
    allLists = document.querySelectorAll('.item-list');
                // querySelectorAll을 통해 현 모든 list들 가져옴

    for(i=1; i < allLists.length; i++){
        nowLists = document.getElementById(i);
                // 현재 추가된 list들의 아이디는 모두 숫자 형태! 따라서 for문을 통해 이들을 가져옴

        nowLists.parentNode.removeChild(nowLists);
                // 역시 부모 요소 접근해 각 list를 삭제!

        listNum = 1
                // 이후에 만들어질 list들의 id는 다시 1부터 시작할 수 있도록!
    }
}
