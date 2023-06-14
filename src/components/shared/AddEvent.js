import { useState } from "react";
import Title from "./Title";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddEvent({ onEventSubmit, close }) {
  const [inputs, setInputs] = useState({});
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [eventFiles, seteventFiles] = useState([]);
  const [eventLimit, seteventLimit] = useState(false);
  const EVENT_MAX_COUNT = 1;

  const handleUploadFiles = (files) => {
    const uploaded = [...eventFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === EVENT_MAX_COUNT) {
          seteventLimit(true);
        }
        if (uploaded.length > EVENT_MAX_COUNT) {
          alert(`You can only add a maximum of ${EVENT_MAX_COUNT} files`);
          seteventLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) seteventFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };
  const handlesubmit = () => {
    onEventSubmit({
      title: inputs.title,
      description: inputs.description,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      eventImg: eventFiles[0],
    });
    setInputs({});
    setSelectedStartDate("");
    setSelectedEndDate("");
    close();
  };
  return (
    <div className="flex flex-col justify-center gap-3">
      <Title first={"Add New Event"} />
      <div className="  mx-auto py-6  px-7 md:px-14 lg:px-16 flex flex-col gap-3">
        <input
          required
          className="w-[250px] lg:w-[500px] p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm"
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
        <div className="flex flex-col gap-5 md:flex-row items-center  lg:flex-row md:justify-between relative">
          <DatePicker
            selected={selectedStartDate}
            onChange={handleStartDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Enter the opening date"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <DatePicker
            selected={selectedEndDate}
            onChange={handleEndDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Enter the closing date"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="App text-sm">
          <div className="flex">
            <label
              className="w-[340px] lg:w-[500px] bg-mainGray cursor-pointer mb-2 text-lg  text-gray-900 text-center  p-2 shadow-sm rounded-sm font-bold"
              htmlFor="eventfileUpload"
            >
              Upload images
            </label>
            <input
              id="eventfileUpload"
              type="file"
              multiple
              accept="image/png"
              onChange={handleFileEvent}
              disabled={eventLimit}
              className="w-0"
            />
          </div>
          <div className="w-[340px] lg:w-[500px] flex flex-col justify-center items-center gap-2 text-sm">
            <div className="uploaded-files-list flex flex-col gap-1">
              {eventFiles.map((file) => (
                <div
                  className={`p-2 w-[340px] lg:w-[500px] bg-slate-100 shadow-sm ${
                    eventFiles.length === 0 && "hidden"
                  }`}
                >
                  {file.name}
                </div>
              ))}
            </div>
            <div
              className={`${
                eventFiles.length === 0 && "hidden"
              } rounded-lg cursor-pointer p-2 w-fit flex justify-center items-center  bg-[#EE462F]`}
              onClick={() => {
                seteventFiles([]);
                seteventLimit(false);
              }}
            >
              Reset
            </div>
          </div>
        </div>

        <button
          className=" text-white px-4 py-2 rounded-lg bg-mainColor hover:bg-gray-600 float-right"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddEvent;
