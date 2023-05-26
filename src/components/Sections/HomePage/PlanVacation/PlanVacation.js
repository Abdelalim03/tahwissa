import { AlgeriaMap } from "@/components/shared/Map";
import { CATEGORIES, THEMES } from "@/data/data";
import React, { useEffect, useState } from "react";
import { Select } from "react-daisyui";

function PlanVacation() {
  const initialCities = [
    {
      x: 3.1845359510239177,
      y: 36.720780606450575,
      city: "bougaa",
      state: "setif",
      themes: ["Histoire"],
      category: "Place",
      description: "",
    },
  ];
  const [cities, setCities] = useState(initialCities);
  const [themes, setThemes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filterCities = () => {
    setCities(
      initialCities.filter(
        (city) =>
          (city.description + city.state + city.bougaa)
            .toLowerCase()
            .includes(search.toLowerCase()) &&
          (category === "" || city.category === category) &&
          (!themes.length ||
            city.themes.some((theme) => themes.includes(theme)))
      )
    );
  };
  const handleChange = (event) => {
    switch (event.target.name) {
      case "point":
        setSearch(event.target.value, filterCities);
        break;
      case "category":
        setCategory(event.target.value, filterCities);
        break;
      case "theme":
        if (event.target.checked) {
          setThemes([...themes, event.target.value], filterCities);
        } else {
          setThemes(
            themes.filter((theme) => theme != event.target.value),
            filterCities
          );
        }
        break;
      default:
        return;
    }
    //  filterCities();
  };
  useEffect(() => {
    filterCities();
  }, [search, category, themes]);

  return (
    <div className="vacation flex flex-col py-20 justify-between items-center gap-8 font-display">
      <div className="flex lg:gap-3 flex-col mx-auto">
        <p className="text-center text-3xl font-semibold">Plan Your Vacation</p>
        <p className="text-center text-base text-gray-500">
          For many people a trip is a headache. Register to be able to jointly{" "}
          <br />
          determine vacation destinations an dates
        </p>
      </div>
      <div className="filter flex flex-col gap-4  md:flex-row md:justify-center items-center ">
        <input
          name="point"
          type="text"
          placeholder="Rechercher un point d'interêt"
          className="w-[320px] max-w-xs rounded-sm py-2 outline-none font-normal px-4 border-2"
          onChange={handleChange}
          value={search}
        />
        <Select
          color="info"
          bordered
          value={category}
          onChange={handleChange}
          name="category"
          className="py-2 px-4 rounded-sm max-w-xs outline-none border-2"
        >
          <option value={""}>Choisir la catégorie</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
        <div className="flex flex-wrap justify-center text-xl gap-4 items-center">
        {THEMES.map((them) => (
          
            <div key={them} className="flex  justify-center items-center">
              <input
                type="checkbox"
                name="theme"
                value={them}
                id={them}
                onChange={handleChange}
                color="#42a7c3"
                className="h-5 w-5 mr-2"
              />
              <label className="text-mainColor" htmlFor={them}>
                {them}
              </label>
            </div>
          
        ))}
        </div>
      </div>
      <div className=" flex justify-center items-center h-[550px] md:h-[650px] w-[80%]">
        <AlgeriaMap cities={cities} setCities={setCities} />
      </div>
    </div>
  );
}

export default PlanVacation;
