import React from 'react'
import toast from 'react-hot-toast'

function Notification() {
  const notify = () => {
    //toast('Here is your toast.', { icon: '✅' })
    //toast.success('Here is your toast.')
    //toast.error('Here is your toast.')
    //toast.loading('Here is your toast.')
    toast.success(t => (
      <div>
        <div>🍕 Eat Pizza have fun.</div>
        <div style={{ fontSize: 12 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore pariatur quidem odio a ullam! Iste voluptate amet voluptatum dignissimos veritatis.</div>
        <button onClick={() => toast.dismiss(t.id)}>x</button>
      </div>
    ))
  }
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
    </div>
  )
}

export default Notification
