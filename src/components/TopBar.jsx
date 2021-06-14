import React from 'react'
import Switch from 'react-switch'
import { useEditor } from '@craftjs/core'

const TopBar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }))

  return (
    <div className="topbar">
      <div className="switch">
        <Switch
          checked={enabled}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={value => actions.setOptions(options => options.enabled = value)}
        />
        {enabled ? 'Enable' : 'Disable'}
      </div>
      <div>
        <button className="btn" onClick={() => console.log(query.serialize())}>SERIALIZE JSON TO CONSOLE</button>
      </div>
    </div>
  )
}

export default TopBar