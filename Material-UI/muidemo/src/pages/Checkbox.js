import React, { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

function Check() {

    const [checked, setChecked] = useState(true);
  return (
    <div className='m-5'>
        <div>
            <h2> MUI Checkbox</h2>
        </div>
        <div className='container'>
        <FormGroup>
            <div>
                <FormControlLabel 
                    control={
                        <Checkbox defaultChecked={checked} 
                            onChange={(e)=> setChecked(e.target.checked)} />
                    } label="Label" 
                />
            </div>
            <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </div>
        </FormGroup>
        </div>

    </div>
  )
}

export default Check