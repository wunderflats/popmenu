'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const Popover = require('popman')

class Popmenu extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    around: React.PropTypes.element.isRequired
  }

  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
    this.onClickAnywhere = this.onClickAnywhere.bind(this)
    this.registerMenu = this.registerMenu.bind(this)
    this.state = { open: false }
  }

  componentDidMount () {
    const domNode = ReactDOM.findDOMNode(this)
    domNode.addEventListener('click', this.onClick)
    document.addEventListener('click', this.onClickAnywhere)
  }

  componentWillUnmount () {
    const domNode = ReactDOM.findDOMNode(this)
    domNode.removeEventListener('click', this.onClick)
    document.removeEventListener('click', this.onClickAnywhere)
  }

  onClick () {
    this.setState({ open: !this.state.open })
  }

  onClickAnywhere (e) {
    const target = e.target
    const clickAnchor = ReactDOM.findDOMNode(this)
    const menu = this.menu

    if (target === menu) {
      return
    }

    if (target === clickAnchor) {
      return
    }

    if (isChild(clickAnchor, target) || isChild(menu, target)) {
      return
    }

    this.setState({ open: false })
  }

  registerMenu (popover) {
    this.menu = popover.popover
  }

  render () {
    const { children, ...props } = this.props
    const { open } = this.state

    return (
      <Popover
        ref={this.registerMenu}
        open={open}
        {...props}
      >
        {children}
      </Popover>
    )
  }
}

module.exports = Popmenu

function isChild (parent, child) {
  let node = child.parentNode

  while (node !== null) {
    if (node === parent) return true
    node = node.parentNode
  }

  return false
}
