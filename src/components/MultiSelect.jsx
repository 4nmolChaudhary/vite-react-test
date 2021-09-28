import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

function MultiSelect() {
  const userSites = [
    { site_id: '75dba4b7-4119-4455-8276-a922c8459742', site_name: 'WS - Richmond, CA 3' },
    { site_id: 'abee5e6a-1b36-44d1-a2ca-47a4082e2010', site_name: 'WS - Richmond, CA' },
  ]
  const fixedOptions = [userSites[0]]
  const [value, setValue] = useState([...fixedOptions])

  const handleOnChange = (event, newValue) => {
    const fixedIDs = fixedOptions.map(s => s.site_id)
    const values = newValue.filter(option => !fixedIDs.includes(option.site_id))
    //setValue(newValue)
    setValue([...fixedOptions, ...values])
  }

  return (
    <Autocomplete
      //
      multiple
      id='fixed-tags-demo'
      value={value}
      onChange={(event, newValue) => handleOnChange(event, newValue)}
      options={userSites}
      getOptionLabel={option => option.site_name}
      renderTags={(tagValue, getTagProps) => tagValue.map((option, index) => <Chip label={option.site_name} {...getTagProps({ index })} disabled={fixedOptions.indexOf(option) !== -1} />)}
      style={{ width: 500 }}
      renderInput={params => <TextField {...params} label='Site' variant='outlined' placeholder='Sites' />}
    />
  )
}

export default MultiSelect
