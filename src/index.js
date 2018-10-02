const Tonic = require('@conductorlab/tonic')
const domready = require('domready')

require('./components/data')
require('./main.scss')

class App extends Tonic {
  stylesheet () {
    return `
    #left {
      position: fixed;
    }
    `
  }
  render () {
    return this.html`
    <div class="container">
      <h1 class="title">Ansible4FedRAMP</h1>
      <div class="notification is-primary">
        A simple project that aims to make it easier to understand where Ansible can help with FedRAMP compliance. Example ansible content with a docker-compose based lab can be found here: <a href="https://github.com/MindPointGroup/ansible-for-fedramp/tree/master/lab">Ansible-For-FedRAMP on GitHub</a>
      </div>
      <div class="columns is-mobile">
        <div id="left" class="column is-one-third">
          <div class="section">
            <h1 class="subtitle">
              Control Families
            </h1>
            <menu></menu>
          </div>
        </div>
        <div class="column is-two-thirds is-offset-2">
          <div class="section">
            <snippets></snippets>
          </div>
        </div>
      </div>
     </div>
    `
  }
}

domready(() => {
  Tonic.add(App)
})
