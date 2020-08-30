class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  /**
   * Show Profile of user
   * @params user
   **/

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="Avatar" class="img-fluid mb-2" />
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">
                    View Profile
                </a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                <span class="badge badge-warning">Public Gists : ${user.public_gists}</span>
                <span class="badge badge-success">Followers : ${user.followers}</span>
                <span class="badge badge-info">Following : ${user.following}</span>
                <br /><br />
                <ul class="list-group">
                    <li class="list-group-item">Username : ${user.login}</li>
                    <li class="list-group-item">Company : ${user.company}</li>
                    <li class="list-group-item">Website/Blog : ${user.blog}</li>
                    <li class="list-group-item">Location : ${user.location}</li>
                    <li class="list-group-item">Member Since : ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>`;
  }

  /**
   * Show Repos of user
   * @params repos
   **/
  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
            <span class="badge badge-warning">Watchers : ${repo.watchers_count}</span>
            <span class="badge badge-danger">Forks : ${repo.forks_count}</span>
            <span class="badge badge-info">Created At : ${repo.created_at}</span>
          </div>
        </div>
      </div>
      `;
    });
    document.getElementById('repos').innerHTML = output;
  }

  /**
   * Clear UI of results
   **/
  clearProfile() {
    this.profile.innerHTML = '';
  }
  /**
   * Show Alert if User Not Found
   **/
  showAlert(message, className) {
    // Remove alert if exist and Not showing UI Profile result
    this.clearAlert();

    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const card = document.querySelector('.searchContainer');
    const profile = document.querySelector('.search');
    card.insertBefore(div, profile);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  /**
   * Clear remaining alert
   * **/
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
