import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Stack,
} from "@mui/material";

function Form() {
  return (
    <div className="m-5">
      <div>
        <h2> MUI Form</h2>
      </div>
      <div className="container">
        <FormGroup>
          <div>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </div>

          <div className="mt-3">
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </div>

          <div>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </div>

          <div>
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="Label"
            />
          </div>
          <div>
            <FormControlLabel
              control={<Checkbox defaultChecked color="success" />}
              label="Label"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Disabled"
            />
          </div>

          <div className="container">
            <div className="m-5">
                <Stack component="form" noValidate spacing={3}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                />
                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </Stack>
            </div>
          </div>
        </FormGroup>
      </div>
    </div>
  );
}

export default Form;
