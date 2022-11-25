$(document).ready(function () {
  getToDoList()

  $('#btnInInputBar').click(function (e) {
    e.preventDefault()

    let strName = $('#txtName').val()
    let strId = $(this).attr('href')
    if (strId) {
      if (!strName) {
        alert('請輸入ToDo的名字。')
        return
      }

      updateToDo(strId, strName)
      $(this)
        .removeAttr('href')
        .removeClass('btn-outline-primary')
        .addClass('btn-outline-success')
        .text('Create')
      $('#txtName').val('')
      return
    }

    if ($(this).text() === 'Search') {
      if (!strName) {
        alert('請輸入ToDo的名字。')
        return
      }

      getToDoList(strName)
      return
    }

    if (!strName) {
      alert('請輸入ToDo的名字。')
      return
    }

    createToDo(strName)
    $('#txtName').val('')
  })

  $(document).on('click', 'button[id*=btnDelete]', function (e) {
    e.preventDefault()

    let strId = $(this).prop('id').split('_')[1]
    deleteToDo(strId)
  })

  $(document).on('click', 'button[id*=btnUpdate]', function (e) {
    e.preventDefault()

    $('button[id*=btnUpdate]').prop('disabled', false)
    $(this).prop('disabled', true)

    $('#txtName').val($(this).siblings('label').text().trim())

    let strId = $(this).prop('id').split('_')[1]
    $('#btnInInputBar')
      .attr('href', strId)
      .removeClass('btn-outline-success')
      .addClass('btn-outline-primary')
      .text('Update')
  })

  $('#ulALinkList .dropdown-item').click(function (e) {
    e.preventDefault()

    $('#btnInInputBar').removeAttr('href').removeClass('btn-outline-primary')

    if ($(this).hasClass('aLink-create')) {
      $('#btnInInputBar')
        .removeClass('btn-outline-secondary')
        .addClass('btn-outline-success')
        .text('Create')
      return
    }
    $('#btnInInputBar')
      .removeClass('btn-outline-success')
      .addClass('btn-outline-secondary')
      .text('Search')
  })

  $(document).on('click', 'input[id*=ckb]', function (e) {
    e.preventDefault()

    let strId = $(this).prop('id').split('_')[1]
    let boolIsChecked = $(this).is(':checked')

    setIsCheckedOfToDo(strId, boolIsChecked)
  })
})
