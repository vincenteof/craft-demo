import React from 'react'
import { useEditor } from '@craftjs/core'

const SettingPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = state.events.selected
    let selected
    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable()
      }
    }
    return {
      selected
    }
  })

  return selected ? (
    <div className="settingPanel">
      <div className="title">
        <div>Selected</div>
        <div className="itemName">{selected.name}</div>
      </div>
      {
        selected.settings && React.createElement(selected.settings)
      }
      {selected.isDeletable ?
        <button
          onClick={() => {
            actions.delete(selected.id);
          }}
          className="big-btn delete"
        >
          DELETE
        </button> :
        null
      }
    </div>
  ) : null
}

export default SettingPanel