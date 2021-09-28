import React, { useState, useEffect } from 'react'
import { fabric } from 'fabric'
import 'fabric-history'
import './toolbar.css'
import { FaPencilAlt, FaUndo, FaRedo, FaDownload } from 'react-icons/fa'
import { RiBrush3Fill, RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { MdColorLens } from 'react-icons/md'
import ImgUrl from '../images/bg3.jpg'

function FabricComp() {
  const [canvas, setCanvas] = useState('')
  const [strokeColor, setStrokeColor] = useState('#121212')
  const [isDrawingMode, setFreeDrawingMode] = useState(false)
  const [showPalette, setPalette] = useState(false)

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      height: 800,
      width: 1200,
    })
    canvas.setBackgroundImage(ImgUrl, canvas.renderAll.bind(canvas), {})
    setCanvas(canvas)
  }, [])

  const freeDraw = canvas => {
    canvas.isDrawingMode = Number(!isDrawingMode)
    canvas.freeDrawingBrush.color = strokeColor
    canvas.freeDrawingBrush.width = 10
    canvas.renderAll()
    setFreeDrawingMode(!isDrawingMode)
  }

  const clearCanvas = canvas => {
    canvas.clear()
    canvas.setBackgroundImage(ImgUrl, canvas.renderAll.bind(canvas), {})
  }

  const undo = canvas => {
    canvas.undo()
    canvas.setBackgroundImage(ImgUrl, canvas.renderAll.bind(canvas), {})
  }

  const redo = canvas => {
    canvas.redo()
    canvas.setBackgroundImage(ImgUrl, canvas.renderAll.bind(canvas), {})
  }

  const download = canvas => {
    const image = canvas.toDataURL('image/png', 1.0)
    const link = document.createElement('a')
    link.download = 'markup-image-saved.png'
    link.href = image
    link.click()
  }

  const setDrawingColor = (canvas, color) => {
    canvas.freeDrawingBrush.color = color
    setStrokeColor(color)
    setPalette(!showPalette)
  }

  return (
    <>
      <h1>Fabric.js with React</h1>
      <div className='toolbar'>
        <button onClick={() => undo(canvas)}>
          <FaUndo />
        </button>
        <button onClick={() => redo(canvas)}>
          <FaRedo />
        </button>
        <button onClick={() => clearCanvas(canvas)}>
          <RiBrush3Fill />
        </button>
        <button onClick={() => freeDraw(canvas)} className={isDrawingMode ? 'active' : ''}>
          <FaPencilAlt />
        </button>
        <button onClick={() => download(canvas)}>
          <FaDownload />
        </button>
        <span className='fill'>
          <button onClick={() => setPalette(!showPalette)}>
            <MdColorLens size={24} />
          </button>
          <div className='colors' style={showPalette ? { display: 'flex' } : { display: 'none' }}>
            <button className={strokeColor === '#121212' ? 'active' : ''}>
              <RiCheckboxBlankCircleFill size={24} onClick={() => setDrawingColor(canvas, '#121212')} />
            </button>
            <button className={strokeColor === '#fff' ? 'active' : ''}>
              <RiCheckboxBlankCircleLine size={24} onClick={() => setDrawingColor(canvas, '#fff')} />
            </button>
          </div>
        </span>
      </div>
      <div className='canvas-div'>
        <canvas id='canvas' />
      </div>
    </>
  )
}

export default FabricComp
