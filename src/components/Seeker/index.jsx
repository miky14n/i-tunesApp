import { useState } from "react";
import InputText from "../InputText";
import PersonalButton from "../PersonalButton";
import { fetchItunesData, getDataFilter } from "../../lib/getData";

export default function Seeker({setData= () => {} }) {
    const [toSrech,setToSerch]=useState("");
    const [filter,setFilter] = useState("all");
    
    const fetchData = async () => {
      const response = await fetchItunesData(toSrech)
      const data = getDataFilter(response,filter)
      setData(data) 
    };
    const filterOptions = {
      all: "All",
      track: "Song",
      audiobook: "Audio Book",
      movie: "Movie",
      tvShow: "Tv Show",
    };
    return (
  <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 items-end px-4 py-6 bg-white rounded-xl shadow-sm">
    <InputText
      filterOptions={filterOptions}
      onSelectChange={setFilter}
      onInputChange={setToSerch}
    />
    <PersonalButton action={fetchData} />
  </div>
);

}