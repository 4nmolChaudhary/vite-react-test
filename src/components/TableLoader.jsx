import React from 'react'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Skeleton from '@material-ui/lab/Skeleton'

function Row({ cols }) {
  return (
    <TableRow>
      {[...Array(cols)].map((x, index) => (
        <TableCell key={index} style={{ padding: '6px' }}>
          <Skeleton variant='text' />
        </TableCell>
      ))}
    </TableRow>
  )
}

function TableLoader() {
  const n = 20
  return (
    <TableBody>
      {[...Array(n)].map((x, index) => (
        <Row key={index} cols={6} />
      ))}
    </TableBody>
  )
}

export default TableLoader
