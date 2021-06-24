import React from 'react'
import Switch from 'react-switch'
import { useEditor } from '@craftjs/core'
import lz from "lzutf8"
import copy from 'copy-to-clipboard'
import Modal from 'react-modal'
import { toast } from 'react-toastify'


const TopBar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }))

  const [modalVisible, setModalVisible] = React.useState(false)
  const [stateToLoad, setStateToLoad] = React.useState('')

  const onCopy = () => {
    const json = query.serialize();
    copy(lz.encodeBase64(lz.compress(json)))
    toast('Copied')
  }

  const onOpen = () => {
    setModalVisible(true)
  }

  const onClose = () => {
    setModalVisible(false)
  }

  const onLoad = () => {
    setModalVisible(false);
    const json = lz.decompress(lz.decodeBase64(stateToLoad));
    actions.deserialize(json);
    toast("State loaded")
  }

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
        <button className="btn" onClick={onCopy}>COPY</button>
        <button className="btn" onClick={onOpen}>LOAD</button>
      </div>
      <Modal
        isOpen={modalVisible}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <textarea rows="10" cols="80" onChange={e => setStateToLoad(e.target.value)} value={stateToLoad} />
        <div className="modal-operations">
          <button className="btn" onClick={onLoad}>LOAD</button>
          <button className="btn" onClick={onClose}>CANCEL</button>
        </div>
      </Modal>
    </div>
  )
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}


export default TopBar