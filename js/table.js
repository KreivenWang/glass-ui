/* 
<table id="myTable2">
<tr>
<!--When a header is clicked, run the sortTable function, with a parameter,
0 for sorting by names, 1 for sorting by country: -->
<th onclick="sortTable(0)">Name</th>
<th onclick="sortTable(1)">Country</th>
</tr>
*/

export class Table {
  static allTh(table) {
    return [...table.rows[0].getElementsByTagName('th')];
  }
  static sortTable(th, table, n) {
    var rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    switching = true;
    // Set the sorting direction to ascending:
    dir = 'asc';
    this.allTh(table).forEach(_th => {
      _th.getElementsByTagName('span')[0].className = 'arrow';
    });
    // th.getElementsByTagName('span')[0].className -= 'desc';
    th.getElementsByTagName('span')[0].className = 'arrow asc';
    /* Make a loop that will continue until
  no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
    first, which contains table headers): */
      for (i = 1; i < rows.length - 1; i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
      one from current row and one from the next: */
        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];
        /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
        if (dir == 'asc') {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == 'desc') {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == 'asc') {
          dir = 'desc';
          th.getElementsByTagName('span')[0].className = 'arrow desc';
          switching = true;
        }
      }
    }
  }

  static findAllSortableTables() {
    const tables = [...document.querySelectorAll(`table.gls`)].filter(table => {
      console.log(table.getAttribute('sortable') !== null);
      return table.getAttribute('sortable') !== null;
    });
    return tables;
  }

  static initHeaderSort() {
    this.findAllSortableTables().forEach(table => {
      [...table.rows[0].getElementsByTagName('th')].forEach((th, i) => {
        th.onclick = this.sortTable.bind(this, th, table, i);
      });
    });
  }
}

export default Table;
