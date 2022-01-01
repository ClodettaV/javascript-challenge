//----------------------LEVEL 1: Automatic Table and Date Search----------------------//

// from data.js
    var tableData = data;

// get a reference to the table body
    var tbody = d3.select('tbody');

// loop through the data in data.js and append rows to the table, which will contain values from each object in tableData
    tableData.forEach(item => {

        var table_row = tbody.append("tr");
        table_row.append("td").text(item.datetime);
        table_row.append("td").text(item.city);
        table_row.append("td").text(item.state);
        table_row.append("td").text(item.country);
        table_row.append("td").text(item.shape);
        table_row.append("td").text(item.comments);
    })


// create event listener
    d3.select('#filter-btn').on("click",  ()=> {
        
    // create variables for inputs and values for date
        var dateInput = d3.select('#datetime');
        var dateValue = dateInput.property('value');
        
    // filter data by date using input
        var filtered = tableData.filter(item => item.datetime === dateValue);

    // clear initial table for storing filtered data
        tbody.html(``);

    // append filtered data to the table
        filtered.forEach( item => {
            var tr = tbody.append('tr');
            tr.append('td').text(item.datetime);
            tr.append('td').text(item.city);
            tr.append('td').text(item.state);
            tr.append('td').text(item.country);
            tr.append('td').text(item.shape);
            tr.append('td').text(item.comments);
        });
    });