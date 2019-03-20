let firstNameInput = document.getElementById('input1')
let lastNameInput = document.getElementById('input2')
let courseInput = document.getElementById('input3')

function upLocalStorage() {
  const formEl = document.getElementById('updateForm')
  formEl.onsubmit = function(event){
    event.preventDefault()
    if(localStorage){
    // Get the existing values from the local storage if they do exist
      let groupOfElements = localStorage.getItem('groupOfElements')
      // Create an empty elements array to hold the values from the localStorage
      // Here we use ES6 ternary notation to check if groupOfElements does exist to //// set the values of elements
      let elements = groupOfElements ? JSON.parse(groupOfElements) : []
      // Get the values from the form input values on submit
      let firstName = firstNameInput.value
      let lastName = lastNameInput.value
      let course = courseInput.value
      // push the input values to the elements array
      elements.push(firstName, lastName, course)
      //store the values from the  elements array to the localstorage as strings
      localStorage.setItem('groupOfElements', JSON.stringify(elements))
      // set the elements to the values from the local to use in generating ordering list
      elements = JSON.parse(groupOfElements)
      // clear the local storage
      // localStorage.clear()
      // create an ordered to display the values from the local storage
      let ol = document.createElement('ol')
      for (let i = 0; i < elements.length; i++){
        let li = document.createElement('li')
        li.innerText = elements[i]
        ol.appendChild(li)
      }
      // append the ordered list to the body of the document
      document.querySelector('body').appendChild(ol)
    }
  }
}
upLocalStorage()