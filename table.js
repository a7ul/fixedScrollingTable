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
      leftHeader.setAttribute('class', 'leftHeader rowHeaderWidth');
      tableWrap.appendChild(leftHeader);

      var commonHeader = document.createElement('div');
      commonHeader.setAttribute('class', 'commonHeader cellDimensions');
      commonHeader.appendChild(document.createTextNode(tablename))
      leftHeader.appendChild(commonHeader);


      var leftRowHeader = document.createElement('div');
      leftRowHeader.setAttribute('class', 'leftRowHeader tableHeight');
      leftHeader.appendChild(leftRowHeader);

      var leftRowHeaderFrag = document.createDocumentFragment();

      for (i = 0; i < rows; ++i) {
          var rowHeaderElement = document.createElement('div');
          rowHeaderElement.setAttribute('class', 'rowHeaderElement cellDimensions');
          rowHeaderElement.appendChild(document.createTextNode(rowHeaderElementData));
          leftRowHeaderFrag.appendChild(rowHeaderElement);
      }
      leftRowHeader.appendChild(leftRowHeaderFrag);



      var tableAndColHeader = document.createElement('div');
      tableAndColHeader.setAttribute('class', 'tableAndColHeader');
      tableWrap.appendChild(tableAndColHeader);

      var tableColHeader = document.createElement('div');
      tableColHeader.setAttribute('class', 'tableColHeader tableWidth');
      tableAndColHeader.appendChild(tableColHeader);

      var tableColHeaderFrag = document.createDocumentFragment();

      for (i = 0; i < cols; ++i) {
          var colHeaderElement = document.createElement('div');
          colHeaderElement.setAttribute('class', 'colHeaderElement cellDimensions');
          colHeaderElement.appendChild(document.createTextNode(columnHeaderElementData));
          tableColHeaderFrag.appendChild(colHeaderElement);
      }

      tableColHeader.appendChild(tableColHeaderFrag);

      var tableBody = document.createElement('div');
      tableBody.setAttribute('class', 'tableBody tableWidth tableHeight');
      tableAndColHeader.appendChild(tableBody);

      var tableBodyFrag = document.createDocumentFragment();

      for (i = 0; i < rows; ++i) {
          var tableRow = document.createElement('div');
          tableRow.setAttribute('class', 'tableRow');
          tableBodyFrag.appendChild(tableRow);

          var tableRowFrag = document.createDocumentFragment();

          for (j = 0; j < cols; ++j) {
              var cell = document.createElement('div');
              cell.setAttribute('class', 'cell cellDimensions');
              cell.appendChild(document.createTextNode(celldata));
              tableRowFrag.appendChild(cell);
          }
          tableRow.appendChild(tableRowFrag);
      }

      tableBody.appendChild(tableBodyFrag);


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

  //  <!--  <div id='tableContainerDiv'>
  //      <div class="tableWrap">
  //          <div class="leftHeader rowHeaderWidth">
  //              <div class='commonHeader cellDimensions'>
  //                  sample
  //              </div>

  //              <div class='leftRowHeader tableHeight'>
  //                  <div class='rowHeaderElement cellDimensions'>RowHead</div>
  //                  <div class='rowHeaderElement cellDimensions'>RowHead</div>
  //                  <div class='rowHeaderElement cellDimensions'>RowHead</div>
  //                  <div class='rowHeaderElement cellDimensions'>RowHead</div>
  //                  <div class='rowHeaderElement cellDimensions'>RowHead</div>
  //                  <div class='rowHeaderElement cellDimensions'>RowHead</div>
  //                  <div class='rowHeaderElement cellDimensions'>RowHead</div>
  //              </div>
  //          </div>
  //          <div class='tableAndColHeader'>
  //              <div class='tableColHeader tableWidth'>
  //                  <div class='colHeaderElement cellDimensions'> ColHeader </div>
  //                  <div class='colHeaderElement cellDimensions'> ColHeader </div>
  //                  <div class='colHeaderElement cellDimensions'> ColHeader </div>
  //                  <div class='colHeaderElement cellDimensions'> ColHeader </div>
  //                  <div class='colHeaderElement cellDimensions'> ColHeader </div>
  //              </div>
  //              <div class='tableBody tableWidth tableHeight'>
  //                  <div class='tableRow'>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                  </div>
  //                  <div class='tableRow'>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                  </div>
  //                  <div class='tableRow'>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                  </div>
  //                  <div class='tableRow'>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                  </div>
  //                  <div class='tableRow'>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                  </div>
  //                  <div class='tableRow'>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                  </div>
  //                  <div class='tableRow'>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                      <div class='cell cellDimensions'>cell</div>
  //                  </div>
  //              </div>
  //          </div>

  //      </div>
  //  </div> -->
