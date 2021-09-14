import React from "react";
import { FormGroup } from "reactstrap";
import Autocomplete from 'react-autocomplete-select';
import axios from 'axios';

var jsonArray = [];
var a = [];
var myObject = {};

async function saveData(selectedValue) {
  try {
    localStorage.setItem('typeSelected', selectedValue);
    const type = localStorage.getItem('selectedValue');

    const fetchApi = "api/all" + type;
    const result = await axios.get(fetchApi)
    .then(res=>{
      let tempData=res.data;
      localStorage.setItem('JSONdata', tempData);

      for (var i = 0; i < tempData["data"].length; i++) {
        jsonArray.push({
          name: tempData["data"][i].name,
          type: tempData["data"][i].type,
          consumption: tempData["data"][i].consumption
      });
        if(tempData["data"][i].name === selectedValue) {
          localStorage.setItem('type', tempData["data"][i].type);
          localStorage.setItem('consumption', tempData["data"][i].consumption);
        }
        localStorage.setItem('jsonArray', jsonArray);
    }

    myObject.rows = [];

    for (var j = 0; j < tempData["data"].length; j++){
         myObject.rows.push({"@name" : tempData["data"][j].name});
         myObject.rows.push({"type" : tempData["data"][j].type });
         myObject.rows.push({"consumption" : tempData["data"][j].consumption + "&" });
    }

    var tempJSON = [];
    const myJSON = JSON.stringify(myObject);
    tempJSON = myJSON.replace(/[{}]/g, '');
    tempJSON = tempJSON.replace(/[@]/g, '{"');
    tempJSON = tempJSON.replace(/[&]/g, '}');
    tempJSON = tempJSON.replaceAll('"{"', '{"');
    tempJSON = tempJSON.replaceAll('}"', '}');
    tempJSON = tempJSON.replaceAll('}', '"}');
    
    localStorage.setItem('tempJSON', tempJSON)
  })
  .catch(err=>{
      console.log(err);
  })
    localStorage.setItem('fetchedData', result.json());
  } catch (error) {
    console.error(error);
  }
}


function testFunc() {
  
  if(localStorage.getItem('autosFlag') === "true") {
    a = [{name: "BMW"}, {name: "Honda"} ,{name: "Ford"}, {name: "Porsche"}, {name: "Renault"}, 
    {name: "Suzuki"}, {name: "Citroen"}, {name: "Mercedes"}, {name: "Mitsubitsi"}, {name: "Ford"},
    {name: "Volkswagen"}, {name: "Nissan"}, {name: "Opel"}, {name: "Toyota"}, {name: "Bentley"} , 
    {name: "Chrysler"}, {name: "Chevrolet"}, {name: "Alfa Romeo"}];
  }
  else {
    a = [{name: "Yamaha"}, { name: "Suzuki"}, { name: "Kawasaki"}, { name: "Simpson"}, { name: "Harley-Davidson"}
    , { name: "Indian"}, { name: "KTM"}, { name: "Hayabusa"}, { name: "Triumph"}, { name: "Mitsubitsi"} ,
    { name: "AKT Motors"}, { name: "Alta"}, { name: "Italika"}, { name: "Lamborghini"}, { name: "Levis"}, { name: "Quasar"}
    , { name: "Velocette"}];
  }
  return a; 
}

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <FormGroup>
        <div>

        <h3>Search for a specific type of {localStorage.getItem('selectedValue')}</h3>

        <Autocomplete 
         
        searchPattern={'startsWith'}
         
        selectOnBlur = {false}

         placeholder = "Search"
         onFocus={(e) => e.target.placeholder = " "}
         onBlur={(e) => e.target.placeholder = "Search"}
         
         maxOptionsLimit = {20}

         var itemsData = { 
          testFunc()
         }
         
         searchEnabled = {true}
         
         getItemValue={(item)=>{ return item.name }}
         
         optionsJSX = { (value)=><span>{value}</span> }
                  
         onSelect = {
          selectedValue => { 
          saveData(selectedValue)
         }}

       />
   </div>
  
      </FormGroup>
    </>
  );
};

export default Step2;
