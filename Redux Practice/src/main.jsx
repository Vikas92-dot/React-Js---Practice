import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import MyStore from './redux-config/MyStore.jsx'

createRoot(document.getElementById('root')).render(
  //By passing MyStore in this we can use this in whole application
  <Provider store={MyStore}>
    <App />
  </Provider>
)
