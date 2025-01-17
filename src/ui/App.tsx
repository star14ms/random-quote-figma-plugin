import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/header'
import MenuSearch from './components/menu-0-search';
import MenuImageSearch from './components/menu-1-image-search';
import MenuKeywords from './components/menu-2-keywords';
import MenuInfo from './components/menu-3-info';


function App() {
  const [menu, setMenu] = useState(0)
  const [prompt, setPrompt] = useState("")
  const [file, setFile] = useState<File>(null)

  return (
    <Container>
      <Header menu={menu} setMenu={setMenu}></Header>
      
      <Main>
        <div className={'menu-item' + (menu === 0 ? ' is-active' : '' )}>
          <MenuSearch prompt={prompt} setPrompt={setPrompt} menu={menu} setMenu={setMenu} setFile={setFile} />
        </div>
        <div className={'menu-item' + (menu === 1 ? ' is-active' : '' )}>
          <MenuImageSearch file={file} setFile={setFile} menu={menu} setMenu={setMenu} />
        </div>
        <div className={'menu-item' + (menu === 2 ? ' is-active' : '' )}>
          <MenuKeywords setPrompt={setPrompt} setMenu={setMenu} />
        </div>
        <div className={'menu-item' + (menu === 3 ? ' is-active' : '' )}>
          <MenuInfo/>
        </div>
      </Main>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: never;
  }
`;


const Main = styled.div`
  margin: 16px;
  height: 100%;

  .menu-item:not(.is-active) {
    display: none;
  }
`


export default App;
