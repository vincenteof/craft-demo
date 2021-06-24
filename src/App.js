import './App.css';
import Toolbox from './components/Toolbox'
import SettingPanel from './components/SettingPanel'
import TopBar from './components/TopBar'
import { Editor, Frame, Element } from "@craftjs/core"
import Text from './components/Text'
import Container from './components/Container'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <Editor resolver={{ Text, Container }}>
        <TopBar />
        <div className="content">
          <div className="left">
            <div className="frameArea">
              <Frame>
                <Element is={Container} padding={20} background="pink" canvas >
                  <Text text="Title" fontSize={20} />
                </Element>
              </Frame>
            </div>
          </div>
          <div className="right">
            <Toolbox />
            <SettingPanel />
          </div>
        </div>
      </Editor>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
