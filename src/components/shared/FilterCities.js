import React, { useEffect, useState } from "react";
import { CATEGORIES, THEMES } from "@/data/data";
import { Select } from "react-daisyui";

function FilterCities({ initialCities, setCities }) {
  const [themes, setThemes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filterCities = () => {
    setCities(
      initialCities.filter(
        (city) =>
          (city.description + city.state + city.city + city.title)
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
        setSearch(event.target.value);
        break;
      case "category":
        setCategory(event.target.value);
        break;
      case "theme":
        if (event.target.checked) {
          setThemes([...themes, event.target.value]);
        } else {
          setThemes(
            themes.filter((theme) => theme != event.target.value));
        }
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    filterCities();
  }, [search, category, themes]);
  return (
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
  );
}

export default FilterCities;
