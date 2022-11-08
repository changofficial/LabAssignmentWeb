import React, {useState} from 'react'
import TextField from "@mui/material/TextField"

function MyTextInput() {
    const [value, setValue]= useState("")
  return (
    <TextField 
        label="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        margin="normal" > </TextField>
  )
}

export default MyTextInput
