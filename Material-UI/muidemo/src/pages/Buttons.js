import { Button, ButtonGroup } from '@mui/material'
import { Save, Delete } from '@mui/icons-material'
import React from 'react'

function Buttons() {
  return (
    <div className='m-5'>
        <div>
            <h2> MUI Buttons</h2>
            <ButtonGroup>
                <Button className='mt-3 mr-3'
                    startIcon = {<Save/>}
                    size='large'
                    variant='contained'
                    color='primary'>
                    Save
                </Button>

                <Button className='mt-3 ml-3'
                    startIcon = {<Delete/>}
                    size='large'
                    variant='contained'
                    color='secondary'>
                    Delete
                </Button>
            </ButtonGroup>
        </div>
    </div>
  )
}

export default Buttons