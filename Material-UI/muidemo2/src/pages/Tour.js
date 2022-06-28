import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function Tour() {
  return (
    <Container>
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtylpGnRgeOovFNYjjl_JcXcshNDUvSpheQ&usqp=CAU" 
                    alt=""
                    className='img m-5' />
            </Paper>

            <Typography>
                The beauty of Earth
            </Typography>
        </Grid>
    </Container>
  )
}

export default Tour