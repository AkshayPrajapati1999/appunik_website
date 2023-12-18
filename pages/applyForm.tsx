import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ApplyForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [selectFile, setSelectFile] = useState();
  const handleChange = (e:any) => {
    setName(e.target.value);
  };
  const handleJobChange = (e:any) => {
    setJobtitle(e.target.value);
  };
  function handlePhoneChange(e:any) {
    setPhone(e.target.value);
  }
  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };
  const handleDetailChange = (e:any) => {
    setDetail(e.target.value);
  };
  const handleSubmit = (e:any) => {
    debugger;
    const formData = new FormData();
    formData.append("Details", JSON.stringify(formData));
    let Details = {
      name: name,
      phone: phone,
      email: email,
      detail: detail,
      jobtitle: jobtitle,
      file: selectFile,
    };

    console.log(Details);
    setName("");
    setPhone("");
    setEmail("");
    setDetail("");
    setJobtitle("");
    e.preventDefault();
  };
  const hiddenFileInput:any = useRef(null);

  const handleClick = (event:any) => {
    hiddenFileInput.current.click(event);
  };
  const handleChanges = (event:any) => {
    debugger
    setSelectFile(event.target.files[0]);
  };

  return (
    <>
      <section className="form_banner">
        <div className="form_container ">
          <div className="container">
            <div className="row mt-3">
              <div className="offset-2"></div>
              <div className="col-lg-8">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Full Name"
                  variant="standard"
                  value={name || ""}
                  onChange={(e) => {handleChange(e)}}
                />
              </div>
              <div className="offset-2"></div>
            </div>
            <div className="row mt-3  ">
              <div className="offset-2"></div>
              <div className="col-lg-4">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Phone No"
                  value={phone || ""}
                  onChange={(e) => {handlePhoneChange(e);
                  }}
                  variant="standard"
                />
              </div>
              <div className="col-lg-4">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Email"
                  value={email || ""}
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                  variant="standard"
                />
              </div>
              <div className="offset-2"></div>
            </div>
            <div className="row mt-3">
              <div className="offset-2"></div>
              <div className="col-lg-8">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Job Title"
                  variant="standard"
                  value={jobtitle || ""}
                  onChange={(e) => {
                    handleJobChange(e);
                  }}
                />
              </div>
              <div className="offset-2"></div>
            </div>
            <div className="row my-3">
              <div className="offset-2"></div>
              <div className="col-lg-8">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Description"
                  value={detail}
                  onChange={(e) => {
                    handleDetailChange(e);
                  }}
                  variant="standard"
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
                  Upload a file
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChanges}
                    style={{ display: "none" }}
                  />
                </Button>

                {/* {selectFile && <label>{selectFile.name}</label>} */}
              </div>

              <div className="offset-2"></div>
            </div>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ApplyForm;
