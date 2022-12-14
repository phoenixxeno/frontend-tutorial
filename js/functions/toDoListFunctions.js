function getToDoList(strName = '') {
  let objPostData = { name: strName }

  $.ajax({
    url: 'http://localhost:8889/getToDoList',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(objPostData),
    success: function (toDoRes) {
      let { statusCode, message, toDoList } = toDoRes
      $('#ulToDoList').empty()

      if (statusCode === '500' || message === '發生錯誤，請再嘗試。') {
        $('#ulToDoList').append('發生錯誤，請再嘗試。')
      } else if (!toDoList || !toDoList.length) {
        $('#ulToDoList').append('暫無資料。')
      } else {
        for (let toDo of toDoList) {
          $('#ulToDoList').append(`
            <li class="list-group-item d-flex align-items-center gap-1">
              <input class="form-check-input me-1 ckb_${
                toDo.id
              }" type="checkbox" id="ckb_${toDo.id}" ${
            toDo.isChecked ? 'checked' : ''
          }/>
              <label class="form-check-label align-middle" for="ckb_${
                toDo.id
              }">${toDo.name}</label>
              <button id="btnUpdate_${
                toDo.id
              }" class="btn btn-primary btn-sm ms-auto">
                Update
              </button>
              <button id="btnDelete_${
                toDo.id
              }" class="btn btn-danger btn-sm ms-1">
                Delete
              </button>
            </li>
          `)
        }
      }
    },
    error: function (e) {
      console.log(e)
      alert('Failed')
    },
  })
}

function createToDo(strName) {
  let objPostData = { name: strName }

  $.ajax({
    url: 'http://localhost:8889/createToDo',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(objPostData),
    success: function (toDoRes) {
      let { statusCode, message, toDoList } = toDoRes
      $('#ulToDoList').empty()

      if (statusCode === '400' || message === '必要參數缺失，請再嘗試。') {
        $('#ulToDoList').append('必要參數缺失，請再嘗試。')
      } else if (statusCode === '500' || message === '發生錯誤，請再嘗試。') {
        $('#ulToDoList').append('發生錯誤，請再嘗試。')
      } else if (!toDoList || !toDoList.length) {
        $('#ulToDoList').append('暫無資料。')
      } else {
        for (let toDo of toDoList) {
          $('#ulToDoList').append(`
            <li class="list-group-item d-flex align-items-center gap-1">
              <input class="form-check-input me-1 ckb_${
                toDo.id
              }" type="checkbox" id="ckb_${toDo.id}" ${
            toDo.isChecked ? 'checked' : ''
          }/>
              <label class="form-check-label align-middle" for="ckb_${
                toDo.id
              }">${toDo.name}</label>
              <button id="btnUpdate_${
                toDo.id
              }" class="btn btn-primary btn-sm ms-auto">
                Update
              </button>
              <button id="btnDelete_${
                toDo.id
              }" class="btn btn-danger btn-sm ms-1">
                Delete
              </button>
            </li>
          `)
        }
      }
    },
    error: function (e) {
      console.log(e)
      alert('Failed')
    },
  })
}

function updateToDo(strId, strName) {
  let objPostData = { id: strId, name: strName }

  $.ajax({
    url: 'http://localhost:8889/updateToDo',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(objPostData),
    success: function (toDoRes) {
      let { statusCode, message, toDoList } = toDoRes
      $('#ulToDoList').empty()

      if (statusCode === '400' || message === '必要參數缺失，請再嘗試。') {
        $('#ulToDoList').append('必要參數缺失，請再嘗試。')
      } else if (statusCode === '500' || message === '發生錯誤，請再嘗試。') {
        $('#ulToDoList').append('發生錯誤，請再嘗試。')
      } else if (!toDoList || !toDoList.length) {
        $('#ulToDoList').append('暫無資料。')
      } else {
        for (let toDo of toDoList) {
          $('#ulToDoList').append(`
            <li class="list-group-item d-flex align-items-center gap-1">
              <input class="form-check-input me-1 ckb_${
                toDo.id
              }" type="checkbox" id="ckb_${toDo.id}" ${
            toDo.isChecked ? 'checked' : ''
          }/>
              <label class="form-check-label align-middle" for="ckb_${
                toDo.id
              }">${toDo.name}</label>
              <button id="btnUpdate_${
                toDo.id
              }" class="btn btn-primary btn-sm ms-auto">
                Update
              </button>
              <button id="btnDelete_${
                toDo.id
              }" class="btn btn-danger btn-sm ms-1">
                Delete
              </button>
            </li>
          `)
        }
      }
    },
    error: function (e) {
      console.log(e)
      alert('Failed')
    },
  })
}
function deleteToDo(strId) {
  let objPostData = { id: strId }

  $.ajax({
    url: 'http://localhost:8889/deleteToDo',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(objPostData),
    success: function (toDoRes) {
      let { statusCode, message, toDoList } = toDoRes
      $('#ulToDoList').empty()

      if (statusCode === '400' || message === '必要參數缺失，請再嘗試。') {
        $('#ulToDoList').append('必要參數缺失，請再嘗試。')
      } else if (statusCode === '500' || message === '發生錯誤，請再嘗試。') {
        $('#ulToDoList').append('發生錯誤，請再嘗試。')
      } else if (!toDoList || !toDoList.length) {
        $('#ulToDoList').append('暫無資料。')
      } else {
        for (let toDo of toDoList) {
          $('#ulToDoList').append(`
            <li class="list-group-item d-flex align-items-center gap-1">
              <input class="form-check-input me-1 ckb_${
                toDo.id
              }" type="checkbox" id="ckb_${toDo.id}" ${
            toDo.isChecked ? 'checked' : ''
          }/>
              <label class="form-check-label align-middle" for="ckb_${
                toDo.id
              }">${toDo.name}</label>
              <button id="btnUpdate_${
                toDo.id
              }" class="btn btn-primary btn-sm ms-auto">
                Update
              </button>
              <button id="btnDelete_${
                toDo.id
              }" class="btn btn-danger btn-sm ms-1">
                Delete
              </button>
            </li>
          `)
        }
      }
    },
    error: function (e) {
      console.log(e)
      alert('Failed')
    },
  })
}

function setIsCheckedOfToDo(strId, boolIsChecked) {
  let objPostData = { id: strId, checked: boolIsChecked }

  $.ajax({
    url: 'http://localhost:8889/setIsCheckedOfToDo',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(objPostData),
    success: function (toDoRes) {
      let { statusCode, message, toDoList } = toDoRes

      if (statusCode === '400' || message === '必要參數缺失，請再嘗試。') {
        $('#ulToDoList').html('必要參數缺失，請再嘗試。')
      } else if (statusCode === '500' || message === '發生錯誤，請再嘗試。') {
        $('#ulToDoList').html('發生錯誤，請再嘗試。')
      } else if (!toDoList || !toDoList.length) {
        $('#ulToDoList').html('暫無資料。')
      } else {
        $('#ulToDoList').find(`.ckb_${strId}`).prop('checked', boolIsChecked)
      }
    },
    error: function (e) {
      console.log(e)
      alert('Failed')
    },
  })
}
