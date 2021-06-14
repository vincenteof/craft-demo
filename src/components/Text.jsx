import React from 'react'
import { useNode } from '@craftjs/core'

const Text = ({ text, fontSize }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div ref={ref => connect(drag(ref))}>
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
    </div>
  )
}


const TextSettings = () => {
  const { actions: { setProp }, fontSize, text } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    text: node.data.props.text
  }))
  return (
    <>
      <div>fontSize</div>
      <input
        value={fontSize || 12}
        type="range"
        min="12"
        max="50"
        step="2"
        onChange={(e) => {
          const value = e.target.value
          setProp(props => props.fontSize = value)
        }}
      />
      <div>text</div>
      <input
        className="text-input"
        value={text || ''}
        onChange={(e) => {
          const value = e.target.value
          setProp(props => props.text = value)
        }}
      />
    </>
  )
}

Text.craft = {
  related: {
    settings: TextSettings
  }
}

export default Text