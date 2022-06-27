import React from 'react'
import { Container, Grid, Typography } from "@mui/material";

function Home() {
  return (
    <>
        <Container>
          <>
            <Typography
              variant="h4"
              component="h2"
              marginBottom={3}
              marginTop={5}
            >
              Top Tours
            </Typography>

            <Grid container spacing={5}>
            </Grid>
          </>
      </Container>
    </>
  )
}

export default Home