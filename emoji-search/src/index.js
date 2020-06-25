import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import App from './components/App'
// import reducer from './reducers'
// import css
import './css/EmojiResultRow.css'
import './css/Header.css'
import './css/index.css'
import './css/SearchInput.css'

// const store = createStore(reducer)

render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
)
