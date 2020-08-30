class UI {
  constructor() {
    this.result = document.getElementById('result');
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
    const card = document.querySelector('.loginContainer');
    const profile = document.querySelector('.loginCard');
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

  /**
   * Clear Fields
   **/
  clearFields() {
    document.getElementById('userid').value = '';
    document.getElementById('password').value = '';
  }
}
