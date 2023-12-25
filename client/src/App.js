import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser, clearUser } from './reducer/userSlice'
import firebase from './firebase.js'

import HomeView from './views/HomeView'
import { link } from './utils/link'
import { menubar } from './utils/menubar'
import { menu } from './utils/menu'
import { three } from './utils/threeEffect'
import { gsapEffect } from './utils/gsapEffect'
import { smooth } from './utils/smooth'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    smooth();
    // three();
    gsapEffect();
    menu();
    link();
    menubar();

    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser())
      }
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
