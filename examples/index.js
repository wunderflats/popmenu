'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const Popmenu = require('../dist')

class Button extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  render () {
    return (
      <button>{this.props.children}</button>
    )
  }
}

class Menu extends React.Component {
  static propTypes = {
    position: React.PropTypes.object
  }

  render () {
    return (
      <Popmenu
        {...this.props}
        around={<Button>click me</Button>}
      >
        <span>hello mr. popover menu</span>
      </Popmenu>
    )
  }
}

class Example extends React.Component {
  render () {
    return (
      <div>
        <h1>popmenu</h1>
        <h2>top left</h2>
        <Menu position={{ y: 'top', x: 'left' }} />
        <h2>top right</h2>
        <Menu position={{ y: 'top', x: 'right' }} />
        <h2>top center</h2>
        <Menu position={{ y: 'top', x: 'center' }} />

        <h2>bottom left</h2>
        <Menu position={{ y: 'bottom', x: 'left' }} />
        <h2>bottom right</h2>
        <Menu position={{ y: 'bottom', x: 'right' }} />
        <h2>bottom center</h2>
        <Menu position={{ y: 'bottom', x: 'center' }} />

        <h2>center left</h2>
        <Menu position={{ y: 'center', x: 'left' }} />
        <h2>center right</h2>
        <Menu position={{ y: 'center', x: 'right' }} />
        <h2>center center</h2>
        <Menu position={{ y: 'center', x: 'center' }} />

        <h2>constrainTo 'scrollParent'</h2>
        <h3>scroll x:</h3>
        <div style={{ overflow: 'scroll', border: '1px solid black' }}>
          <div className='scroll-x'>
            <span style={{ marginRight: 200 }}>
              <Menu constrainTo='scrollParent' constrainX />
            </span>
          </div>
        </div>
        <h3>scroll x:</h3>
        <div style={{ overflow: 'scroll', border: '1px solid black' }}>
          <div className='scroll-x'>
            <span style={{ marginLeft: 400 }}>
              <Menu constrainTo='scrollParent' constrainX />
            </span>
          </div>
        </div>
        <h3>scroll y:</h3>
        <div style={{ overflow: 'scroll', border: '1px solid black', height: '6em' }}>
          <div className='scroll-y'>
            <div style={{ marginBottom: 200 }}>
              <Menu constrainTo='scrollParent' constrainY />
            </div>
          </div>
        </div>
        <h3>scroll y:</h3>
        <div style={{ overflow: 'scroll', border: '1px solid black', height: '6em' }}>
          <div className='scroll-y'>
            <div style={{ marginTop: 400 }}>
              <Menu constrainTo='scrollParent' constrainY />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
