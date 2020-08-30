class FindMe {
  constructor() {
    this.client_id = '091ee01161570288ea2f';
    this.client_secret = '9debd1ed7718c3426948f7fd9c0aefa651be4c9b';
    this.access_token = '9f5d1c6fb58b9948dccc9a4f3b101b069bf3f84e';
	//new github_token = '83729d00af62f37771da6b339f03eeb344391a3a';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }
  async getUser(user) {
    // const loginAuth = await fetch('https://github.com/login/oauth/authorize', {
    //   credentials: 'include',
    // });
    // const token = await loginAuth.json();
    // return {
    //   token,
    // };
    const userUrl = `https://api.github.com/users/${user}`;
    const repoUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`;
    const profileResponse = await fetch(userUrl, {
      headers: { Authorization: `token ${this.access_token}` },
    });
    const repoResponse = await fetch(repoUrl, {
      headers: { Authorization: `token ${this.access_token}` },
    });

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
