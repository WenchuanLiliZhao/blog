/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Pages from './Pages/Pages';

function App() {
  useState(() => {
    // console.log()
    const greetings = "Hello, World"
    console.log(greetings)
    
  });

  useEffect(() => {
    // console.log()
  }, []);


  console.log(Pages)

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={Pages.RootPage_NotFound.content}></Route>

        <Route index element={Pages.RootPage_Home.content}></Route>

        {Object.values(Pages).map((item: any, i: any) => (
          <Route
            key={`${item}${i}`}
            path={`/${item.info.key}`}
            element={item.content}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </>)
}

export default App
