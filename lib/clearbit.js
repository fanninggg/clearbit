// 1. Select the form and add an event listener
const form = document.querySelector('#clearbitForm')

const adddataToHTML = (data) => {
  // 5. Find the relevant data from the JSON that is returned
  document.getElementById('userName').innerText = data.name.fullName
  document.getElementById('userEmail').innerText = data.email
  document.getElementById('userBio').innerText = data.bio
  document.getElementById('userLocation').innerText = data.location
}

form.addEventListener('submit', (e) => {
  // 2. Prevent the default behaviour of the form
  e.preventDefault();
  // 3. Get the value from the input
  const email = document.querySelector('#clearbitEmail');
  // 4. AJAX request to the clearbit API using fetch
  fetch(`https://person.clearbit.com/v1/people/email/${email.value}`, {
    headers: {Authorization: 'YOUR_API_KEY_HERE'}
  })
    .then(response => response.json())
    .then(data => {
      adddataToHTML(data)
    })
})
