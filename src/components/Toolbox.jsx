import React from 'react'
import { useEditor, Element } from "@craftjs/core"
import Text from '../components/Text'
import Container from '../components/Container'


const Toolbox = () => {
  const { connectors } = useEditor()
  return (
    <div className="toolbox">
      <div className="add">Drag to add</div>
      <div className="things">
        <button className="big-btn" ref={ref => connectors.create(ref, <Text text="Text" fontSize={14} />)}>TEXT</button>
        <button className="big-btn" ref={ref => connectors.create(ref, <Element is={Container} padding={20} background="pink" canvas />)}>CONTAINER</button>
      </div>
    </div>
  )
}

export default Toolbox