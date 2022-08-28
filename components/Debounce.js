import { Button, Grid, Input, TextField } from '@mui/material'
import React from 'react'

const Debounce = () => {
    return (
        <>
          <Grid container spacing={1.5} display="flex">
          <Grid item md={4} xs={12} justifyItems="center">
             <TextField
               label="Input Something"
               type="text"
               fullWidth
               size="small"
             >

             </TextField>
            </Grid>
            <Grid item md={4} xs={12} justifyItems="center">
              <Button color='success'></Button>
            </Grid>
          </Grid>
        </>
    )
}

export default Debounce