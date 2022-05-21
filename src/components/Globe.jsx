import React from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class Globe extends React.Component {
    
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 570.00,
      minWidth: 200.00,
      scale: 1.5,
      scaleMobile: 2,
      size: 1,
      // color: 0x000,
      // color2: 0xe9800,
      // backgroundColor: 0xb3b3b3
      color: 0xe9800,
      color2: 0xffffff,
      backgroundColor: 0x212121
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div id="globe" ref={this.vantaRef}>
    </div>
  }
}

export default Globe;