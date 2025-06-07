import { useState } from "react";
import InputText from "../InputText";
import PersonalButton from "../PersonalButton";
import { fetchItunesData } from "../../lib/getData";

export default function Seeker({setData= () => {} }) {
    const [toSrech,setToSerch]=useState("");
    const [filter,setFilter] = useState("all");
    
    const fetchData = async () => {
      const response = await fetchItunesData(toSrech)
      setData(response.results) 
    };
    
    return(
        <>
        <InputText filterOptions={["All", "Music", "TvShow"]} onSelectChange={setFilter} onInputChange={setToSerch}/>
        <PersonalButton action={fetchData}/>
        </>
    );
}