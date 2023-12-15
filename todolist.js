const toDoList = document.querySelector('#toDoList')
const addButton = document.querySelector('#addButton')
const addList = document.querySelector('#addList')
// html에 각 태그의 id를 가져오는 부분
addButton.addEventListener('click', (event)=> {
    // add버튼을 클릭했을 때, 작성 내용이 추가되게 하는 이벤트
    // 이제 아래의 코드는 addTodo클릭시 이벤트에 속해 실행되는 코드들
    const item = document.createElement('li')   //li를 생성하여 목록을 작성해줄 것이다..
    // li.appendChild(checkBox)
    const checkBox = document.createElement('input')    //완료 체크박스
    checkBox.setAttribute('type', 'checkbox')

    const text = document.createElement
})