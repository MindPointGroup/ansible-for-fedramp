const Tonic = require('@conductorlab/tonic')
const yml = require('js-yaml')
const { join, basename } = require('path')
const debug = require('debug')('data')


const parser = () => {
  return {
    AC: require('../data/ac'),
    CM: require('../data/cm'),
    IR: require('../data/ir'),
    SI: require('../data/si')
  }

}

class Menu extends Tonic {
  render () {
    const data = parser()
    debug(data)
    const titles = []
    for (const key of Object.keys(data)) {
      titles.push(`<h3 class="subtitle"><a href="#${key}">${key}</a></h3>`) 
    }
    return this.html`
      ${titles.join('\n')}
    `

  }

}

class Snippets extends Tonic {
  render () {
    const snippets = []
    const data = parser()
    for (const fam of Object.keys(data)) {
      const innerData = []
      const family = data[fam]
      debug(family)
      for (const meta of family) {
        let controlTitle = `${meta.controlFamily}-${meta.section}`
        if (meta.enhancement) {
          controlTitle += ` (${meta.enhancement})`
        }
        if (meta.subsection) {
          controlTitle += ` (${meta.subsection})`
        }
        innerData.push(`
          <div class="box">
            <h2 class="subtitle">${controlTitle}</h2>
            <p><strong>Description:</strong>
            <br>
              ${meta.description}
            </p>
            <br>
            <p><strong>Solution:</strong>
            <br>
              ${meta.solution}
            </p>
          </div>
        `)
      }
      snippets.push(`
        <div class="section">
          <h2 class="title" id="${fam}">${fam}</h2>
          ${innerData.join('\n')}
        </div>`
      )
    }
    return this.html`
      ${snippets.join(`\n`)}
    `
  }
}

Tonic.add(Menu)
Tonic.add(Snippets)
