// from data.js
var tableData = data;
var date = d3.select("#datetime")
var button = d3.select("#filter-btn")
var shape = d3.select('#shape')
// Reference to the table body
var tbody = d3.select("tbody");

// Create table: append a row and cell for each data point
tableData.forEach((data_entry) => {
    console.log(data_entry);
    var row = tbody.append("tr");
    Object.entries(data_entry).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);

    })

})

//filter for all dates after input date
button.on("click",function(){
    // clears data
    d3.select("tbody").html("");
    // keeps page from refreshing
    d3.event.preventDefault();
    // filter data to only dates on or after input date
    var inputValue = date.property("value")
    var inputShape = shape.property("value")
    if (inputShape === "") {
        var filteredData = tableData.filter(filtered => filtered.datetime >= inputValue);
        // re-create table
        var tbody = d3.select("tbody");
        filteredData.forEach((data_entry1) => {
            var row = tbody.append("tr");
            Object.entries(data_entry1).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
    
        })
    } else {
        var filteredData = tableData.filter(filtered => filtered.datetime >= inputValue &&
            filtered.shape === inputShape);
        // re-create table
        var tbody = d3.select("tbody");
        filteredData.forEach((data_entry1) => {
            var row = tbody.append("tr");
            Object.entries(data_entry1).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        }
        
    )}
})