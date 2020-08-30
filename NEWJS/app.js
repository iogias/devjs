const data = [
  {
    name: 'Jane Doe',
    age: 32,
    gender: 'female',
    lookingfor: 'male',
    location: 'Solo',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Veronica Emre',
    age: 32,
    gender: 'female',
    lookingfor: 'male',
    location: 'Solo',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'Robbie Downey',
    age: 30,
    gender: 'male',
    lookingfor: 'female',
    location: 'Jakarta',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Mary Rock',
    age: 31,
    gender: 'female',
    lookingfor: 'male',
    location: 'Solo',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];
const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Event listener
document.getElementById('next').addEventListener('click', nextProfile);

// nextProfile function
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
   <li class="list-group-item">Name : ${currentProfile.name}</li>
   <li class="list-group-item">Age : ${currentProfile.age}</li>
   <li class="list-group-item">Gender : ${currentProfile.gender}</li>
   <li class="list-group-item">Preference : ${currentProfile.lookingfor}</li>
   <li class="list-group-item">Location : ${currentProfile.location}</li>
  </ul>
  `;
    document.getElementById('imageDisplay').innerHTML = `
  <img src="${currentProfile.image}" />
  `;
  } else {
    // reload the window
    window.location.reload();
  }
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
