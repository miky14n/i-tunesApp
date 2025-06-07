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
    
    return(
        <>
        <InputText filterOptions={["All", "song", "TvShow"]} onSelectChange={setFilter} onInputChange={setToSerch}/>
        <PersonalButton action={fetchData}/>
        </>
    );
}