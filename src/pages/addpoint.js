import AddEvent from "@/components/shared/AddEvent";
import { FormMap } from "@/components/shared/Maps/FormMap";
import Modal from "@/components/shared/Modal";
import Title from "@/components/shared/Title";
import { ALGERIA, CATEGORIES, THEMES, TRANSPORTS, initialViewState } from "@/data/data";
import { useEffect, useState } from "react";

const MAX_COUNT = 4;

function AddPointForm(props) {
  const [viewState, setViewState] = useState(initialViewState)
  const [inputs, setInputs] = useState({});

  const [themes, setThemes] = useState([]);
  const [position, setPosition] = useState({longitude:initialViewState.longitude,latitude:initialViewState.latitude})
  const [transports, setTransports] = useState([]);
  const [selectedWillaya, setSelectedWillaya] = useState("");
  const [selectedTown, setSelectedTown] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("")
  const [events, setevents] = useState([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEventsPopupOpen, setIsEventsPopupOpen] = useState(false);

  
  useEffect(() => {
    if (selectedWillaya !== "") {
      setViewState({longitude:Number(ALGERIA[selectedWillaya]["lng"]),latitude:Number(ALGERIA[selectedWillaya]["lat"]),zoom:10});
      setPosition({longitude:Number(ALGERIA[selectedWillaya]["lng"]),latitude:Number(ALGERIA[selectedWillaya]["lat"])})
    }
    else {
      // setCommunes([]);
      setViewState(initialViewState);
      setPosition({longitude:initialViewState.longitude,latitude:initialViewState.latitude})
    }
  }, [selectedWillaya]);
  useEffect(() => {
    
  
    console.log(selectedWillaya,selectedTown,inputs,themes,transports,position,openTime,closeTime);

  }, [position])
  

  const handleWillayaSelect = (e) => {
    setSelectedWillaya(e.target.value);
  };

  const eventsubmited = (event) => {
    const availableEvents = [...events];
    availableEvents.push(event);
    setevents(availableEvents);
    //console.log(events);
  };

  const handleTownSelect = (e) => {
    setSelectedTown(e.target.value);
  };

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleThemeCheckBox(event) {
    if (event.target.checked) {
      setThemes([...themes, event.target.value]);
    } else {
      setThemes(themes.filter((theme) => theme != event.target.value));
    }
  }

  function handleTransportCheckBox(event) {
    if (event.target.checked) {
      setTransports([...transports, event.target.value]);
    } else {
      setTransports(transports.filter((theme) => theme != event.target.value));
    }
    
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

      <form
        onSubmit={handleSubmit}
        className=" shadow-xl mx-auto py-6  px-7 md:px-14 lg:px-16 flex flex-col gap-5"
      >
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
        <div className="w-full flex flex-col gap-1">
          <p className="text-lg md:text-left text-center mb-2">
            Choose the point themes :
          </p>
          <div className="flex flex-row gap-2 md:gap-4 justify-center md:justify-start md:items-center  text-base ">
            {THEMES.map((theme) => (
              <div className="flex items-center gap-2 " key={theme}>
                <input
                  type="checkbox"
                  name={theme}
                  value={theme}
                  id={theme}
                  onChange={handleThemeCheckBox}
                />
                <label htmlFor={theme}>{theme}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-lg md:text-left text-center mb-2">
            Select the Transportations to the point :
          </p>
          <div className="flex flex-row gap-2 md:gap-4 justify-center md:justify-start md:items-center  text-base ">
            {TRANSPORTS.map((transport) => (
              <div className="flex items-center gap-2 " key={transport}>
                <input
                  type="checkbox"
                  name={transport}
                  value={transport}
                  id={transport}
                  onChange={handleTransportCheckBox}
                />
                <label htmlFor={transport}>{transport}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-lg text-center md:text-left mb-2">
            Select the intrest point category :
          </p>
          <div className="flex flex-row gap-2 md:gap-4 justify-center md:justify-start md:items-center  text-base ">
            {CATEGORIES.map(category=>(
              <div className="flex items-center gap-2 " key={category}>
              <input
              required
              type="radio"
              name="category"
              value={category}
              id={category}
              onChange={handleChange}
            />
            <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row items-center  lg:flex-row md:justify-between relative">
          <div className="flex items-center flex-wrap justify-center gap-4">
            <label htmlFor="timeOpen" className="text-gray-500">
              Date d'ouvertue :{" "}
            </label>
            <input
              value={openTime}
              onChange={(e) => setOpenTime(e.target.value)}
              type="time"
              name="timeOpen"
              id="timeOpen"
            />
            <label htmlFor="timeClose" className="text-gray-500">
              Date de fermeture :{" "}
            </label>
            <input
              value={closeTime}
              onChange={(e) => setCloseTime(e.target.value)}
              type="time"
              name="timeClose"
              id="timeClose"
            />
            <select
              name="wilaya"
              value={selectedWillaya}
              onChange={handleWillayaSelect}
              className="simple-select w-40 lg:w-52"
            >
              <option value={""}>Choisir La Wilaya</option>
              {Object.keys(ALGERIA)?.map((wilaya) => (
                <option key={wilaya} value={wilaya} className="cursor-pointer">
                  {wilaya}
                </option>
              ))}
            </select>
            <select
              name="commune"
              value={selectedTown}
              onChange={handleTownSelect}
              className="simple-select w-40 lg:w-52"
            >
              <option value={""}>Choisir La Commune</option>
              {ALGERIA &&
                ALGERIA[selectedWillaya]?.communes.map((commune) => (
                  <option
                    key={commune}
                    value={commune}
                    className="cursor-pointer"
                  >
                    {commune}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row items-center  lg:flex-row md:justify-between ">
          {/* The popup button*/}
          {isPopupOpen ? (
            /*Map*/
            <Modal onClose={() => setIsPopupOpen(false)}>
              <div className="flex flex-col gap-3 justify-center items-center h-[550px] md:h-[650px]  w-[380px] md:w-[600px] lg:w-[950px] xl:w-[1050px]">
               <p className=" text-lg font-semibold text-gray-600">Deplacez le pointeur jaune vers la postion du point du lieu touristique:</p> 
                <FormMap position={position} setPosition={setPosition} setViewState={setViewState} viewState={viewState} />
              </div>
            </Modal>
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

        {isEventsPopupOpen && (
          <Modal onClose={() => setIsEventsPopupOpen(false)}>
            <AddEvent
              close={() => setIsEventsPopupOpen(false)}
              onEventSubmit={eventsubmited}
            />
          </Modal>
        )}

        <div className="flex flex-row gap-3 flex-wrap">
          <button
            className="p-2 bg-mainColor cursor-pointer w-fit text-lg font-bold rounded-sm text-white shadow-sm flex flex-row gap-2 items-center"
            onClick={() => setIsEventsPopupOpen(true)}
          >
            <span>add event</span>
            <img
              src="/sections/addPointForm/plus.png"
              alt="plus"
              className="w-5 h-5"
            />
          </button>
          {events.map((event) => (
            <div
              className={`p-2 bg-slate-100 shadow-sm ${
                events.length === 0 && "hidden"
              }`}
            >
              {event.title}
            </div>
          ))}
        </div>
        <div
          className={`${
            events.length === 0 && "hidden"
          } rounded-lg cursor-pointer p-2 w-fit flex justify-center items-center  bg-[#EE462F]`}
          onClick={() => {
            setevents([]);
          }}
        >
          Reset
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
      </form>
    </div>
  );
}

export default AddPointForm;
