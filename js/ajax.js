$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:8889/getToDoListTest',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      // id: null,
      name: '',
      // isChecked: null,
    }),
    success: function (toDoRes) {
      let { toDoList } = toDoRes

      $('#divAjax').empty()
      for (let item of toDoList) {
        $('#divAjax').append(`
            <p style="background-color: green; font-size: 2rem">${item.id}</p>
            <p style="background-color: red; font-size: 2rem">${item.name}</p>
        `)
      }
    },
    error: function (e) {
      console.log(e)
      alert('Failed')
    },
  })
})
