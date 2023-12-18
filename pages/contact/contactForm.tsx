import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
const StyledTextField = styled(TextField)`
  /* default */
  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #2c5de4;
  }
  fieldset {
    border-radius: 15px;
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid rgba(41, 41, 41, 0.8);
  }

  // && .MuiInput-underline:hover:before {
  //   border-bottom: 1px solid #2c5de4;
  // }
  /* focused */
  .MuiInput-underline:after {
    border-bottom: 1px solid #2c5de4;
  }
`;
const StyledFormControlField = styled(FormControl)`
  /* default */
  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #2c5de4;
  }

  fieldset {
    border-radius: 15px;
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid rgba(41, 41, 41, 0.8);
  }

  // && .MuiInput-underline:hover:before {
  //   border-bottom: 1px solid #2c5de4;
  // }
  /* focused */
  .MuiInput-underline:after {
    border-bottom: 1px solid #2c5de4;
  }
`;
function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");
  const [country, setCountry] = useState("");
  const [selectFile, setSelectFile] = useState<File>();
  const [industry, setIndustry] = useState("");

  const handleAgeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setIndustry(event.target.value);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };
  const handleCountryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCountry(e.target.value);
  };
  const handleDetailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDetail(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    const formData = new FormData();
    formData.append("Details", JSON.stringify(formData));
    let Details = {
      name: name,
      phone: phone,
      email: email,
      detail: detail,
      country: country,
      industry: industry,
      file: selectFile,
    };

    setName("");
    setPhone("");
    setEmail("");
    setDetail("");
    setCountry("");
    setIndustry("");
    e.preventDefault();
  };

  const hiddenFileInput:any = useRef(null);

  const handleClick = (event:any) => {
    hiddenFileInput.current.click(event);
  };
  const handleChanges = (event: any) => {
    setSelectFile(event.target.files[0]);
  };

  return (
    // <Parallax scale={[1.1, 0.8]} easing="easeInOut" speed={10}>
    <div
      className="form_container"
 data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    data-aos-once="false" data-aos-anchor-placement="top-center"
    >
      <h2>Have a project in mind?</h2>
      <div className="container">
        <div className="row mt-3">
          <div className="offset-2"></div>
          <div className="col-lg-8">
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={(e) => {
                handleChange(e);
              }}
              // InputProps={{
              //   sx: {
              //     ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              //       border: "2px solid white",
              //     },
              //     "&:hover": {
              //       ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              //         border: "2px solid white",
              //         color: "#2c5de4s",
              //       },
              //     },
              //   },
              // }}
            />
          </div>
          <div className="offset-2"></div>
        </div>
        <div className="row mt-3  ">
          <div className="offset-2"></div>
          <div className="col-lg-4">
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label="Phone no"
              value={phone}
              onChange={(e) => {
                handlePhoneChange(e);
              }}
              variant="outlined"
            />
          </div>
          <div className="col-lg-4 email">
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label="Email"
              value={email}
              onChange={(e) => {
                handleEmailChange(e);
              }}
              variant="outlined"
            />
          </div>
          <div className="offset-2"></div>
        </div>
        <div className="row mt-3  ">
          <div className="offset-2"></div>
          <div className="col-lg-4 pt-2 country">
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label="Country"
              value={country}
              onChange={(e) => {
                handleCountryChange(e);
              }}
              variant="outlined"
            />
          </div>
          <div className="col-lg-4 select_type">
            <StyledFormControlField
              variant="outlined"
              sx={{ m: 1, minWidth: 120 }}
              fullWidth
            >
              <InputLabel id="demo-simple-select-standard-label">
                Select Industry Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={industry}
                onChange={handleAgeChange}
                label="Select Industry Type"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={`Manufacturing`}>Manufacturing</MenuItem>
                <MenuItem value={`Technology,Media Telicommunication`}>
                  Technology,Media Telicommunication
                </MenuItem>
              </Select>
            </StyledFormControlField>
          </div>
          <div className="offset-2"></div>
        </div>
        <div className="row my-2">
          <div className="offset-2"></div>
          <div className="col-lg-8">
            <StyledTextField
              fullWidth
              id="outlined-basic"
              label="Description"
              value={detail}
              onChange={(e) => {
                handleDetailChange(e);
              }}
              variant="outlined"
              multiline
              rows={4}
            />
          </div>

          <div className="offset-2"></div>
        </div>
        <div className="row my-3">
          <div className="offset-2"></div>
          <div className="col-lg-8">
            <Button onClick={handleClick}>
              Upload a file{" "}
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={(event) => {
                  handleChanges(event);
                }}
                style={{ display: "none" }}
              />
            </Button>

            {selectFile && <label>{selectFile.name}</label>}
          </div>

          <div className="offset-2"></div>
        </div>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
    // </Parallax>
  );
}

export default ContactForm;
