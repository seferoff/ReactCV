import React from "react";
import "./PersonalInfo.css";

function PersonalInfo() {
  return (
    <div>
      <h1 className="bashliq">Shexsi melumat</h1>
      <table className="info">
        <tr>
          <td>Adi:</td>
          <td>Intigam</td>
        </tr>
        <tr>
          <td>Soyadi:</td>
          <td>Seferov</td>
        </tr>
        <tr>
          <td>Dogum tarixi:</td>
          <td>02.02.1990</td>
        </tr>
        <tr>
          <td>Yashayish yeri:</td>
          <td>Gence sheheri, Yeni Gence qesebesi</td>
        </tr>
      </table>
    </div>
  );
}

export default PersonalInfo;
