  var tableModule = function() {

      //===========================================
      //      Dummy Data
      //============================================
      var tablename = 'sampleTable';
      var celldata = 'cell';
      var rowHeaderElementData = 'rowHead';
      var columnHeaderElementData = 'colHead';
      //=============================================
      console.time('hello');


      var createTable = function(rows, cols) {


          var tableWrap = document.createElement('div');
          tableWrap.setAttribute('class', 'tableWrap');

          var leftHeader = _createTableElement('div', 'leftHeader', tableWrap);
          var commonHeader = _createTableElement('div', 'commonHeader cellDimensions rowHeaderWidth', leftHeader);
          _insertText(commonHeader, tablename);

          var leftRowHeader = _createLeftRowHeader(rows, leftHeader);
          var tableAndColHeader = _createTableElement('div', 'tableAndColHeader', tableWrap);
          var tableColHeader = _createColHeader(cols, tableAndColHeader);


          var tableBody = _createTableBody(rows, cols, tableAndColHeader);

          //fixes the width calculation and also makes sure both row header and table are side to side
          _fixTablebodyWidth(tableBody, leftHeader, tableAndColHeader);


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
      };


      var _fixTablebodyWidth = function(tableBody, leftHeader, tableAndColHeader) {
          //fixes the width calculation and also makes sure both row header and table are side to side
          var tableBodyWidth = window.getComputedStyle(tableBody).getPropertyValue('width');
          var leftHeaderWidth = window.getComputedStyle(leftHeader).getPropertyValue('width');
          tableAndColHeader.style.width = parseInt(tableBodyWidth) + parseInt(leftHeaderWidth) + 5 + 'px';

      }


      var _createTableBody = function(rows, columns, parentNode) {
          var tableBodydiv = _createTableElement('div', 'tableBody tableWidth tableHeight', parentNode);
          var tableBodyTable = _createTableElement('table', '', tableBodydiv);
          for (i = 0; i < rows; ++i) {
              var tableRow = _createTableElement('tr', 'tableRow', tableBodyTable);
              for (j = 0; j < columns; ++j) {
                  var cell = _createTableElement('td', 'cell cellDimensions', tableRow);
                  _insertText(cell, celldata);
              }
          }
          return tableBodydiv;
      }


      var _createColHeader = function(columns, parentNode) {
          var tableColHeaderdiv = _createTableElement('div', 'tableColHeader tableWidth', parentNode);
          var tableColHeaderTable = _createTableElement('table', '', tableColHeaderdiv);
          for (i = 0; i < columns; ++i) {
              var colHeaderElement = _createTableElement('th', 'colHeaderElement cellDimensions', tableColHeaderTable);
              _insertText(colHeaderElement, columnHeaderElementData);
          }
          return tableColHeaderdiv;
      }

      var _createLeftRowHeader = function(rowCount, parentNode) {
          var leftRowHeader = _createTableElement('div', 'leftRowHeader rowHeaderWidth tableHeight', parentNode);
          var leftRowHeaderTable = _createTableElement('table', '', leftRowHeader);
          for (i = 0; i < rowCount; ++i) {
              var rowHeaderElement = _createTableElement('tr', 'rowHeaderElement cellDimensions', leftRowHeaderTable);
              _insertText(rowHeaderElement, rowHeaderElementData);
          }
          return leftRowHeader;
      }



      var _createTableElement = function(nodeType, classname, parentNode) {
          var element = document.createElement(nodeType);
          element.setAttribute('class', classname);
          parentNode.appendChild(element);
          return element;
      }

      var _insertText = function(node, text) {
          node.appendChild(document.createTextNode(text));
      }

      var insertTable = function(insertionDivId, table) {
          var tableInsertionDiv = document.getElementById(insertionDivId);
          tableInsertionDiv.appendChild(table);
      }


      var insertData = function(rowHeaderData, colHeaderData, cellData, table) {

      }

      return {
          createTable: createTable,
          insertTable: insertTable,
          insertData: insertData
      }
  }();

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
