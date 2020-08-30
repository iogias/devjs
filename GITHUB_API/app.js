const searchUser = document.getElementById('search-user');
const findme = new FindMe();
const ui = new UI();
// Search input event listener
searchUser.addEventListener('keyup', e => {
  // input value
  const userText = e.target.value;

  if (userText !== '') {
    // make http call
    findme.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // show alert
        ui.showAlert(`${userText} : Not Found`, 'danger');
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
