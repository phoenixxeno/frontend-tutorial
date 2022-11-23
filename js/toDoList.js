$(document).ready(function () {
  getToDoList()

  $('#btnInInputBar').click(function (e) {
    e.preventDefault()

    let strName = $('#txtName').val()
    if (!strName) {
      alert('請輸入ToDo的名字。')
      return
    }

    createToDo(strName)
    $('#txtName').val('')
  })
})
