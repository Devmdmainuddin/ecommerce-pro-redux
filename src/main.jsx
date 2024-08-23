import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store/store.js'
import ContextComponent from './providers/ContextComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ContextComponent>
        <App />
      </ContextComponent>
    </Provider>
  </StrictMode>,
)
