import Model from "@/components/shared/Modal";
import Title from "@/components/shared/Title";
import { useState } from "react";

const MAX_COUNT = 4;

function AddPointForm(props) {
  const [inputs, setInputs] = useState({});
  const [themes, setThemes] = useState({});
  const [transports, settransport] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleThemeCheckBox(event) {
    const name = event.target.name;
    const value = event.target.checked;
    setThemes((values) => ({ ...values, [name]: value }));
  }

  function handleTransportCheckBox(event) {
    const name = event.target.name;
    const value = event.target.checked;
    settransport((values) => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    /*event.preventDefault();
    alert(inputs.contact);*/
    console.log(inputs);
    console.log(themes);
    console.log(transports);
    alert("brixton bulyyyy");

    /*const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        })
    }
    
    fetch('', requestOptions).then((res) => {
      return res.json();
    }).then((data) => {
      htmlFor(let f of uploadedFiles){
        let uploadData = new FormData();
        uploadData.append('pointId', data.IntrestPointid);
        uploadData.append('imgFile', f);
        fetch('',{
          method: 'POST',
          body: uploadData
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    }).catch((err) => {console.log(err); setMsg('Error')})
    setOpen(true);*/
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) {
          setFileLimit(true);
        }
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  return (
    <div className="example py-24  min-h-screen overflow-auto flex flex-col gap-10">
      <Title first={"Add New Point"} />

      <htmlForm
        onSubmit={handleSubmit}
        className=" shadow-xl mx-auto py-6  px-7 md:px-14 lg:px-16 flex flex-col gap-5"
      >
        <div className="w-full flex flex-col gap-1">
          <p className="text-lg md:text-left text-center mb-2">
            Choose the point themes :
          </p>
          <div className="flex flex-row gap-2 md:gap-4 justify-center md:justify-start md:items-center  text-base ">
            <input
              type="checkbox"
              name="theme1"
              value="theme1"
              id="theme1"
              onChange={handleThemeCheckBox}
            />
            <label htmlFor="theme1">theme1</label>
            <input
              type="checkbox"
              name="theme2"
              value="theme2"
              id="theme2"
              onChange={handleThemeCheckBox}
            />
            <label htmlFor="theme2">theme2</label>
            <input
              type="checkbox"
              name="theme3"
              value="theme3"
              id="theme3"
              onChange={handleThemeCheckBox}
            />
            <label htmlFor="theme3">theme3</label>
            <input
              type="checkbox"
              name="theme4"
              value="theme4"
              id="theme4"
              onChange={handleThemeCheckBox}
            />
            <label htmlFor="theme4">theme4</label>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-lg md:text-left text-center mb-2">
            Select the Transportations to the point :
          </p>
          <div className="flex flex-row gap-2 md:gap-4 justify-center md:justify-start md:items-center  text-base ">
            <input
              type="checkbox"
              name="tram"
              value="tram"
              id="tram"
              onChange={handleTransportCheckBox}
            />
            <label htmlFor="tram">tramway</label>
            <input
              type="checkbox"
              name="train"
              value="train"
              id="train"
              onChange={handleTransportCheckBox}
            />
            <label htmlFor="train">train</label>
            <input
              type="checkbox"
              name="bus"
              value="bus"
              id="bus"
              onChange={handleTransportCheckBox}
            />
            <label htmlFor="bus">bus</label>
            <input
              type="checkbox"
              name="metro"
              value="metro"
              id="metro"
              onChange={handleTransportCheckBox}
            />
            <label htmlFor="metro">metro</label>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-lg text-center md:text-left mb-2">
            Select the intrest point category :
          </p>
          <div className="md:flex md:flex-row gap-2 md:gap-4 text-sm md:text-base grid grid-flow-row grid-rows-2 grid-cols-6">
            <input
              required
              type="radio"
              name="category"
              value="Categroy1"
              id="category1"
              onChange={handleChange}
            />
            <label htmlFor="category1">category1</label>
            <input
              required
              type="radio"
              name="category"
              value="Categroy2"
              id="category2"
              onChange={handleChange}
            />
            <label htmlFor="category2">category2</label>
            <input
              required
              type="radio"
              name="category"
              value="Categroy3"
              id="category3"
              onChange={handleChange}
            />
            <label htmlFor="category3">category3</label>
            <input
              required
              type="radio"
              name="category"
              value="Categroy4"
              id="category4"
              onChange={handleChange}
            />
            <label htmlFor="category4">category4</label>
            <input
              required
              type="radio"
              name="category"
              value="Categroy5"
              id="category5"
              onChange={handleChange}
            />
            <label htmlFor="category5">categroy5</label>
          </div>
        </div>
        <input
          required
          className="w-full p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm"
          type="text"
          placeholder="Title"
          name="title"
          value={inputs.title || ""}
          onChange={handleChange}
        />
        <textarea
          className="resize-none p-2 h-[150px] border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm"
          name="description"
          placeholder="Description"
          value={inputs.description || ""}
          onChange={handleChange}
        ></textarea>
        <div className="flex flex-col gap-5 md:flex-row items-center  lg:flex-row md:justify-between ">
          {/* The popup button*/}
          {isPopupOpen ? ( 
            <Model onClose={() => setIsPopupOpen(false)} >
              <div>brixton bulyyyy</div>
            </Model>
          ) : (
            <div
              className="w-[340px] lg:w-[500px]  p-2 cursor-pointer mb-2 text-lg font-bold rounded-sm text-white shadow-sm flex flex-row justify-between items-center px-6 bg-mainColor"
              onClick={() => setIsPopupOpen(true)}
            >
              <p>Repere the announce on the map</p>
              <div className="h-full flex flex-col justify-center">
                <img
                  src="/sections/addPointForm/pin.png"
                  alt="pin"
                  className="h-[17px] w-[12px] lg:h-[25px] lg:w-[20px]"
                />
              </div>
            </div>
          )}

          <div className="App text-sm">
            <div className="flex">
              <label
                className="w-[340px] lg:w-[500px] bg-mainGray cursor-pointer mb-2 text-lg  text-gray-900 text-center  p-2 shadow-sm rounded-sm font-bold"
                htmlFor="fileUpload"
              >
                Upload images
              </label>
              <input
                id="fileUpload"
                type="file"
                multiple
                accept="image/png"
                onChange={handleFileEvent}
                disabled={fileLimit}
                className="w-0"
              />
            </div>
            <div className="w-[340px] lg:w-[500px] flex flex-col justify-center items-center gap-2 text-sm">
              <div className="uploaded-files-list flex flex-col gap-1">
                {uploadedFiles.map((file) => (
                  <div
                    className={`p-2 w-[340px] lg:w-[500px] bg-slate-100 shadow-sm ${
                      uploadedFiles.length === 0 && "hidden"
                    }`}
                  >
                    {file.name}
                  </div>
                ))}
              </div>
              <div
                className={`${
                  uploadedFiles.length === 0 && "hidden"
                } rounded-lg cursor-pointer p-2 w-fit flex justify-center items-center  bg-[#EE462F]`}
                onClick={() => {
                  setUploadedFiles([]);
                  setFileLimit(false);
                }}
              >
                Reset
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse w-full">
          <input type="submit" id="submit" className="w-0 h-0" />
          <label
            htmlFor="submit"
            className="submit-button rounded-lg p-2 w-fit flex justify-center items-center gap-2 cursor-pointer hover:scale-110 bg-[#EE462F] text-white"
          >
            <img
              alt="submit"
              src="/sections/addPointForm/submit.png"
              className="w-3 h-3"
            />
            <span>Submit</span>
          </label>
        </div>
      </htmlForm>
    </div>
  );
}

export default AddPointForm;
