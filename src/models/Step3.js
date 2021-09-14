import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { MDBDataTable } from 'mdbreact';

let dataJSON = [];
var finalArray = [];
var finalJSON;

function setUpFunc() {
  finalArray = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Consumption',
        field: 'consumption',
        sort: 'asc',
        width: 200
      }
    ]}

  dataJSON = localStorage.getItem('tempJSON');

  const myJSON = JSON.stringify(finalArray);

  finalJSON = myJSON + dataJSON + "}";
  finalJSON = finalJSON.replace(/}"rows/gi, ',"rows');

  const obj = JSON.parse(finalJSON);
  return obj;
}


const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  const user = JSON.parse(localStorage.getItem('user'));
  if(user.roles[1] ) {
    console.log("admin");
  }

if(user.roles[1]) {
  return (
    <>
     <div>
      <br/>
      <table>
        <tr>
          <th>Name&ensp;&ensp;&ensp;</th>
          <th>Type&ensp;&ensp;&ensp;</th>
          <th>Consumption</th>
        </tr>
        <tr>
          <td>{localStorage.getItem('typeSelected')}</td>
          <td>{localStorage.getItem('type')}</td>
          <td>{localStorage.getItem('consumption')}</td>
        </tr>
      </table>
     </div>
        <div>
          <MDBDataTable
            striped
            bordered
            small
            data={setUpFunc()}
          />
        </div>
    </>
  );
}
else{
  return (
    <>
    <div>
      <br/>
      <table>
        <tr>
          <th>Name&ensp;</th>
          <th>Type&ensp;</th>
          <th>Consumption</th>
        </tr>
        <tr>
          <td>{localStorage.getItem('typeSelected')}</td>
          <td>{localStorage.getItem('type')}</td>
          <td>{localStorage.getItem('consumption')}</td>
        </tr>
      </table>
     </div>
    </>
  );
}
};

export default Step3;
