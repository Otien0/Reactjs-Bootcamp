import { Container, Grid, Paper, Typography, Box } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import React from 'react'

function Tour() {
  return (
    <Container>
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtylpGnRgeOovFNYjjl_JcXcshNDUvSpheQ&usqp=CAU" 
                    alt=""
                    className=' m-5' />
            </Paper>

            <Box paddingX={1}>
                <Typography variant='subtitle1' component='h2'>
                    The beauty of Earth
                </Typography>

                <Box
                    sx={{ display: 'flex',
                        alignItems: 'center',}}
                >
                    <AccessTime/>
                    <Typography variant='body2' component='p'>
                        5 hours
                    </Typography>
                </Box>
            </Box>
        </Grid>
    </Container>
  )
}

export default Tour