import React  from "react";
import { FormGroup } from "reactstrap";
import Autocomplete from 'react-autocomplete-select'
import axios from 'axios';

var jsonArr = [];

async function fetchData(selectedValue) {
  try {
    if(selectedValue === "Auto")
    {
        console.log("It is auto");
        localStorage.setItem('autosFlag', "true");
    }
    else {
        console.log("It is motor");
        localStorage.setItem('autosFlag', "false");
    }
    localStorage.setItem('selectedValue', selectedValue);
    const fetchApi = "api/all" + selectedValue;
    await axios.get(fetchApi)
    .then(res=>{
      let tempData=res.data;
      localStorage.setItem('tempData', tempData);
      for (var i = 0; i < tempData["data"].length; i++) {
        console.log("~~~~~~~~~~~~~~~~~");
        console.log(tempData["data"][i]);
        console.log("~~~~~~~~~~~~~~~~~");
        jsonArr.push({
          type: tempData["data"][i].type
      });
    }
  })
  .catch(err=>{
      console.log(err);
  })
    //localStorage.setItem('fetchData', result.json());
    //localStorage.setItem('jsonArr', jsonArr);
    
  } catch (error) {
    console.error(error);
  }
  jsonArr = JSON.stringify(jsonArr);
  localStorage.setItem('jsonArr', jsonArr);
}

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
    <FormGroup>
    <h3>Search for Autos or Motors</h3>

    <Autocomplete 
    
      searchPattern={'startsWith'}
      
      selectOnBlur = {false}

      placeholder = "Search"
      onFocus={(e) => e.target.placeholder = " "}
      onBlur={(e) => e.target.placeholder = "Search"}
      
      maxOptionsLimit = {10}
      
      searchEnabled = {true}
      
      getItemValue={(item)=>{ return item.email }}

      onSelect = {
                    selectedValue => {
                    fetchData(selectedValue)
                 }} 

      itemsData = {[ 
                    {
                       "email": "Auto"
                     },
                     {
                       "email": "Motor"
                     }
                  ]}
   
    />
      </FormGroup>
    </>

  );
};

export default Step1;