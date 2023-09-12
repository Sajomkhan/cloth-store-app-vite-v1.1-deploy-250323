import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import Store from './app/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <Toaster position='top-center' reverseOrder={false} />
    <App />
    </Provider>
  </React.StrictMode>,
)
