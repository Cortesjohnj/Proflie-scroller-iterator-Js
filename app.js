const data = [
  {
    name: "Juan",
    age: 31,
    gender: "male",
    lookingfor: "female",
    location: "Bogota Colombia",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Andrea",
    age: 29,
    gender: "female",
    lookingfor: "male",
    location: "Cartagena Colombia",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Camilo",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Medellin Colombia",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">name: ${currentProfile.name}</li>
                <li class="list-group-item">age: ${currentProfile.age}</li>
                <li class="list-group-item">location: ${currentProfile.location}</li>
                <li class="list-group-item">preferences: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
            </ul>
            `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">
        `;
  } else {
    window.location.reload();
  }
}

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
