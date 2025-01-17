import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Col_CenterCSS, HoverBrightnessCSS } from './styled';
import { SvgUpload, SvgClear } from './svg';

import { isFileImage } from '../lib/utils';
  

function DragDropForm({ file, setFile, filter, generateImg2Img, isLoading }) {
  const dropArea = useRef(null)
  const labelArea = useRef(null)

  const [fileUploaded, setFileUploaded] = useState(false)

  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  
  function highlight(e) {
    preventDefaults(e)
    dropArea.current!.classList.add('highlight')
  }
  
  function unhighlight(e) {
    preventDefaults(e)
    dropArea.current!.classList.remove('highlight')
  }
  
  function handleDrop(e) {
    preventDefaults(e)
    var dt = e.dataTransfer
    var files = dt.files
  
    handleGenerateImg2Img(files)
  }

  function previewFile(file: File, callback?: Function) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = async () => {
      let img = document.createElement('img')
      img.id = 'image-uploaded'
      img.src = String(reader.result)
      document.getElementById('gallery').replaceChildren(img)

      if (callback) await callback()
    }
  }

  async function handleGenerateImg2Img(files: FileList) {
    let file = files[0]
    if (!isFileImage(file)) return
    setFileUploaded(true)
    dropArea.current!.classList.add('uploaded')
    previewFile(file, async () => {
      await generateImg2Img()
    })
  }

  function clear() {
    setFileUploaded(false)
    dropArea.current!.classList.remove('uploaded')
    setFile(null)
    document.getElementById('gallery').replaceChildren()
  }

  useEffect(() => {
    if (file && !isLoading) {
      const dataTranster = new DataTransfer()
      dataTranster.items.add(file)
      
      const input = document.getElementById('fileElem') as HTMLInputElement
      input.files = dataTranster.files

      handleGenerateImg2Img(input.files)
    }
  }, [file, filter])

  return (
    <Container 
      ref={dropArea}
      onDragOver={e => highlight(e)}
      onDrop={e => handleDrop(e)}
      onDragEnter={e => highlight(e)}
      onDragLeave={e => unhighlight(e)}
      onClick={e => !fileUploaded ? labelArea.current!.click() : {}}
    >
      <Form>
        {!fileUploaded ? 
          <PadTop>
            <SvgUpload />
            <Col_CenterGap0>
              <P>Drag and drop your image here or</P>
              <P><Blue>Browse</Blue> to choose a file.</P>
            </Col_CenterGap0>
          </PadTop>
        :
          <Button onClick={clear}>
            <SvgClear />
          </Button>
        }
        <input type="file" id="fileElem" accept="image/*" onChange={(e) => handleGenerateImg2Img(e.target.files)} />
        <label ref={labelArea} className="button" htmlFor="fileElem"></label>
      </Form>
      <div id="gallery"></div>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border: 2px dashed #ccc;
  width: 364px;
  height: 526px;
  margin: 0 auto;
  
  &.highlight, &:hover {
    border-color: #6D7DFD;
    cursor: pointer;
  }
  
  &.uploaded {
    border: 2px solid #6D7DFD;
    width: auto;
    height: 100px;
  }
  
  #gallery img {
    height: 100px;
    vertical-align: middle;
    box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #3B82F6;
  }
  
  .button {
    width: 0;
    height: 0;
  }
  
  .button:hover {
    background: #5969E9;
  }
  
  #fileElem {
    display: none;
  }
`


const Form = styled.form`
  ${Col_CenterCSS}
  position: relative;
  margin-bottom: 0;
  gap: 24px;
`


const PadTop = styled.div`
  ${Col_CenterCSS}
  padding: 48px 0px 0px;
`


const Col_CenterGap0 = styled.div`
  ${Col_CenterCSS}
  gap: 0px;
`


const P = styled.p`
  color: #000000;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`


const Blue = styled.span`
  color: #6D7DFD;
`


const Button = styled.span`
  position: absolute;
  top: -12px;
  right: -12px;

  ${HoverBrightnessCSS}
`


export default DragDropForm
