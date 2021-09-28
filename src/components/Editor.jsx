import React from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'

function Editor() {
  const { editor, onReady } = useFabricJSEditor()
  const onAddCircle = () => editor?.addCircle()
  // const addRectangle = canvas => {
  //   const rect = new fabric.Rect({
  //     left: 100,
  //     top: 50,
  //     fill: 'yellow',
  //     width: 200,
  //     height: 100,
  //     objectCaching: false,
  //     stroke: 'lightgreen',
  //     strokeWidth: 4,
  //   })
  //   canvas.add(rect)
  //   canvas.renderAll()
  // }

  // const addCircle = canvas => {
  //   const circle = new fabric.Circle({
  //     radius: 30,
  //     fill: '#f55',
  //     top: 100,
  //     left: 100,
  //   })
  //   canvas.add(circle)
  //   canvas.renderAll()
  // }
  const onAddRectangle = () => editor?.addRectangle()

  return (
    <div>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <FabricJSCanvas className='sample-canvas' onReady={onReady} />
    </div>
  )
}

export default Editor
