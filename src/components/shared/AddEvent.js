import { useState } from "react";
import Title from "./Title";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddEvent({onEventSubmit, close}) {
  const [inputs, setInputs] = useState({});
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

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
  const handlesubmit = () =>{
    onEventSubmit(
        {
            title: inputs.title,
            description: inputs.description,
            startDate: selectedStartDate,
            endDate: selectedEndDate
        }
    );
    setInputs({});
    setSelectedStartDate("");
    setSelectedEndDate("");
    close();
  }
  return (
  <div className="flex flex-col justify-center gap-3">
    <Title first={"Add New Event"}/>
    <div
      className="  mx-auto py-6  px-7 md:px-14 lg:px-16 flex flex-col gap-5"
    >
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
      <button
          className=" text-white px-4 py-2 rounded-lg bg-mainColor hover:bg-gray-600 float-right"
          onClick={handlesubmit}
        >
          Submit
      </button>

    </div>
  </div>
);}

export default AddEvent;
