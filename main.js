let firstNameInput = document.getElementById('input1')
let lastNameInput = document.getElementById('input2')
let courseInput = document.getElementById('input3')

function upLocalStorage() {
  const formEl = document.getElementById('updateForm')
  formEl.onsubmit = function(event){
    event.preventDefault()
    if(localStorage){
    // eslint-disable-next-line indent
    // Get the existing values from the local storage if they do exist
      let groupOfElements = localStorage.getItem('groupOfElements')
      let elements = groupOfElements ? JSON.parse(groupOfElements) : []
      let firstName = firstNameInput.value
      let lastName = lastNameInput.value
      let course = courseInput.value
      elements.push(firstName, lastName, course)
      localStorage.setItem('groupOfElements', JSON.stringify(elements))
      elements = JSON.parse(groupOfElements)
      console.log(elements)

    // localStorage.clear()
      let ol = document.createElement('ol')
      for (let i = 0; i < elements.length; i++){
        let li = document.createElement('li')
        li.innerText = elements[i]
        ol.appendChild(li)
      }
      document.querySelector('body').appendChild(ol)
    }
  }
}
upLocalStorage()