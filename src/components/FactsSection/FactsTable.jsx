import React from 'react';

const FactsTable = () => {
  return (
    <>
      <table>
        <caption>
          Data about the planets of our solar system (Planetary facts taken from
          NASA)
        </caption>

        <thead>
          <tr>
            <th scope='col'>Category</th>
            <th scope='col'>Type</th>
            <th scope='col'>Name</th>
            <th scope='col'>Mass (10²⁴ kg)</th>
            <th scope='col'>Diameter (km)</th>
            <th scope='col'>Density (kg/m³)</th>
            <th scope='col'>Gravity (m/s²)</th>
          </tr>
        </thead>

        <tbody>
          {/* Terrestrial Planets */}
          <tr>
            <th scope='rowgroup' colSpan={2} rowSpan={4}>
              Terrestrial Planets
            </th>
            <th scope='row'>Mercury</th>
            <td>0.330</td>
            <td>4,879</td>
            <td>5429</td>
            <td>3.7</td>
          </tr>

          <tr>
            <th scope='row'>Venus</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
            <td>8.9</td>
          </tr>

          <tr>
            <th scope='row'>Earth</th>
            <td>5.97</td>
            <td>12,756</td>
            <td>5514</td>
            <td>9.8</td>
          </tr>

          <tr>
            <th scope='row'>Mars</th>
            <td>0.642</td>
            <td>6,792</td>
            <td>3934</td>
            <td>3.7</td>
          </tr>

          {/* Jovian Planets */}
          <tr>
            <th scope='rowgroup' rowSpan={4}>
              Jovian Planets
            </th>
            <th scope='rowgroup' rowSpan={2}>
              Gas Giants
            </th>
            <th scope='row'>Jupiter</th>
            <td>1898</td>
            <td>142,984</td>
            <td>1326</td>
            <td>23.1</td>
          </tr>

          <tr>
            <th scope='row'>Saturn</th>
            <td>568</td>
            <td>120,536</td>
            <td>687</td>
            <td>9.0</td>
          </tr>

          <tr>
            <th scope='rowgroup' rowSpan={2}>
              Ice Giants
            </th>
            <th scope='row'>Uranus</th>
            <td>86.8</td>
            <td>51,118</td>
            <td>1271</td>
            <td>8.7</td>
          </tr>

          <tr>
            <th scope='row'>Neptune</th>
            <td>102</td>
            <td>49,528</td>
            <td>1638</td>
            <td>11.0</td>
          </tr>

          {/* Dwarf Planet */}
          <tr>
            <th scope='rowgroup' colSpan={2}>
              Dwarf Planets
            </th>
            <th scope='row'>Pluto</th>
            <td>0.0146</td>
            <td>2,377</td>
            <td>1850</td>
            <td>0.7</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FactsTable;
