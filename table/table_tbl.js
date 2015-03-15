  var tableModule = {};

  tableModule.createTable = function(rows, cols) {

      //===========================================
      //      Dummy Data
      //============================================
      var tablename = 'sampleTable';
      var celldata = 'cell';
      var rowHeaderElementData = 'rowHead';
      var columnHeaderElementData = 'colHead';
      //=============================================
      console.time('hello');
      var tableWrap = document.createElement('div');
      tableWrap.setAttribute('class', 'tableWrap');

      var leftHeader = document.createElement('div');
      leftHeader.setAttribute('class', 'leftHeader');
      tableWrap.appendChild(leftHeader);

      var commonHeader = document.createElement('div');
      commonHeader.setAttribute('class', 'commonHeader cellDimensions rowHeaderWidth');
      commonHeader.appendChild(document.createTextNode(tablename))
      leftHeader.appendChild(commonHeader);


      var leftRowHeader = document.createElement('div');
      leftRowHeader.setAttribute('class', 'leftRowHeader rowHeaderWidth tableHeight');
      leftHeader.appendChild(leftRowHeader);

      var leftRowHeaderTable = document.createElement('table');
      leftRowHeader.appendChild(leftRowHeaderTable);

      var leftRowHeaderTableFrag = document.createDocumentFragment();

      for (i = 0; i < rows; ++i) {
          var rowHeaderElement = document.createElement('tr');
          rowHeaderElement.setAttribute('class', 'rowHeaderElement cellDimensions');
          rowHeaderElement.appendChild(document.createTextNode(rowHeaderElementData));
          leftRowHeaderTableFrag.appendChild(rowHeaderElement);
      }
      leftRowHeaderTable.appendChild(leftRowHeaderTableFrag);



      var tableAndColHeader = document.createElement('div');
      tableAndColHeader.setAttribute('class', 'tableAndColHeader');
      tableWrap.appendChild(tableAndColHeader);

      var tableColHeader = document.createElement('div');
      tableColHeader.setAttribute('class', 'tableColHeader tableWidth');
      tableAndColHeader.appendChild(tableColHeader);

      var tableColHeaderTable = document.createElement('table');
      tableColHeader.appendChild(tableColHeaderTable);

      var tableColHeaderTableFrag = document.createDocumentFragment();

      for (i = 0; i < cols; ++i) {
          var colHeaderElement = document.createElement('th');
          colHeaderElement.setAttribute('class', 'colHeaderElement cellDimensions');
          colHeaderElement.appendChild(document.createTextNode(columnHeaderElementData));
          tableColHeaderTableFrag.appendChild(colHeaderElement);
      }

      tableColHeaderTable.appendChild(tableColHeaderTableFrag);

      var tableBody = document.createElement('div');
      tableBody.setAttribute('class', 'tableBody tableWidth tableHeight');
      tableAndColHeader.appendChild(tableBody);

      var tableBodyTable = document.createElement('table');
      tableBody.appendChild(tableBodyTable);

      var tableBodyTableFrag = document.createDocumentFragment();

      for (i = 0; i < rows; ++i) {
          var tableRow = document.createElement('tr');
          tableRow.setAttribute('class', 'tableRow');
          tableBodyTableFrag.appendChild(tableRow);

          var tableRowFrag = document.createDocumentFragment();

          for (j = 0; j < cols; ++j) {
              var cell = document.createElement('td');
              cell.setAttribute('class', 'cell cellDimensions');
              cell.appendChild(document.createTextNode(celldata));
              tableRowFrag.appendChild(cell);
          }
          tableRow.appendChild(tableRowFrag);
      }

      tableBodyTable.appendChild(tableBodyTableFrag);


      //fixes the width calculation and also makes sure both row header and table are side to side
      var tableBodyWidth = window.getComputedStyle(tableBody).getPropertyValue('width');
      var leftRowHeaderWidth = window.getComputedStyle(leftRowHeader).getPropertyValue('width');
      tableAndColHeader.style.width = parseInt(tableBodyWidth) + parseInt(leftRowHeaderWidth) + 5 + 'px';


      //adding event listeners

      tableBody.addEventListener('scroll', function() {
          tableColHeader.scrollLeft = tableBody.scrollLeft;
          leftRowHeader.scrollTop = tableBody.scrollTop;
      });
      tableColHeader.addEventListener('scroll', function() {
          tableBody.scrollLeft = tableColHeader.scrollLeft;
      });

      leftRowHeader.addEventListener('scroll', function() {
          tableBody.scrollTop = leftRowHeader.scrollTop;
      });

      console.timeEnd('hello');
      return tableWrap;
  }



  tableModule.insertTable = function(insertionDivId, table) {
      var tableInsertionDiv = document.getElementById(insertionDivId);
      tableInsertionDiv.appendChild(table);
  }


  tableModule.insertData = function(rowHeaderData, colHeaderData, cellData, table) {


  }


// <!-- TABLE BELOW IS GENERATED DYNAMICALLY , THIS IS LEFT FOR REFERENCE -->
// <div class='tableWrap'>
//     <div class='leftHeader'>
//         <div class='commonHeader cellDimensions rowHeaderWidth'>
//             sample
//         </div>
//         <div class='leftRowHeader rowHeaderWidth tableHeight'>
//             <table>
//                 <tr class='rowHeaderElement cellDimensions'>
//                     <th>RowHead</th>
//                 </tr>
//                 <tr class='rowHeaderElement cellDimensions'>
//                     <th>RowHead</th>
//                 </tr>
//                 <tr class='rowHeaderElement cellDimensions'>
//                     <th>RowHead</th>
//                 </tr>
//                 <tr class='rowHeaderElement cellDimensions'>
//                     <th>RowHead</th>
//                 </tr>
//                 <tr class='rowHeaderElement cellDimensions'>
//                     <th>RowHead</th>
//                 </tr>
//                 <tr class='rowHeaderElement cellDimensions'>
//                     <th>RowHead</th>
//                 </tr>
//                 <tr class='rowHeaderElement cellDimensions'>
//                     <th>RowHead</th>
//                 </tr>
//             </table>
//         </div>
//     </div>
//     <div class='tableAndColHeader'>
//         <div class='tableColHeader tableWidth'>
//             <table>
//                 <th class='colHeaderElement cellDimensions'> ColHeader </th>
//                 <th class='colHeaderElement cellDimensions'> ColHeader </th>
//                 <th class='colHeaderElement cellDimensions'> ColHeader </th>
//                 <th class='colHeaderElement cellDimensions'> ColHeader </th>
//                 <th class='colHeaderElement cellDimensions'> ColHeader </th>
//             </table>
//         </div>
//         <div class='tableBody tableWidth tableHeight'>
//             <table>
//                 <tr class='tableRow'>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                 </tr>
//                 <tr class='tableRow'>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                 </tr>
//                 <tr class='tableRow'>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                 </tr>
//                 <tr class='tableRow'>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                 </tr>
//                 <tr class='tableRow'>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                 </tr>
//                 <tr class='tableRow'>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                 </tr>
//                 <tr class='tableRow'>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                     <td class='cell cellDimensions'>cell</td>
//                 </tr>
//             </table>
//         </div>
//     </div>

// </div>
