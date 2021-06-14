import React from 'react'
import { useNode } from '@craftjs/core'
import { SketchPicker } from 'react-color'


const Container = ({ background, padding = 0, children }) => {
  const { connectors: { connect, drag } } = useNode()
  return (
    <div ref={ref => connect(drag(ref))} style={{ margin: "5px 0", background, padding: `${padding}px` }}>
      {children}
    </div>
  )
}

const ContainerSettings = () => {
  const { actions: { setProp }, padding, background } = useNode((node) => ({
    padding: node.data.props.padding,
    background: node.data.props.background,
  }))
  return (
    <>
      <div>padding</div>
      <input
        value={padding || 0}
        type="range"
        min="0"
        max="100"
        step="1"
        onChange={(e) => {
          const value = e.target.value
          setProp(props => props.padding = value)
        }}
      />
      <div>background</div>
      <SketchPicker
        color={background}
        onChangeComplete={color => {
          console.log('color: ', color)
          setProp(props => props.background = color.hex)
        }}
      />
    </>
  )
}

Container.craft = {
  related: {
    settings: ContainerSettings
  }
}

export default Container