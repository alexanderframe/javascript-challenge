// from data.js
let tableData = data;
console.log(tableData)

// Create variables to store the table, the date input field, and the filter button
const tbody = d3.select('tbody');
const inputField = d3.select('#datetime');
const filterButton = d3.select('#filter-btn');

// Create table with all unfiltered data upon page load
renderTable(tableData);

// Create function to render table
function renderTable(tableData) {
    // Clear table initially each time function is called
    d3.selectAll('tbody>tr').remove();
    // For loop to grab the value of each UFO sighting and create a new row for each sighting
    for (let i = 0; i < tableData.length; i++) {
        let record = tableData[i];
        let fields = Object.values(record);
        let row = tbody.append('tr');
        // For loop to values of each sighting into the created rows
        for (let j = 0; j < fields.length; j++) {
            row.append('td').text(fields[j])
        }
    }
}

// Event handler to render filtered table when Filter Table button is clicked
filterButton.on('click', function() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Grab the value inside the input field and check that it's working
    let inputValue = inputField.property('value');
    console.log(inputValue);
    // filter tableData using inputValue
    filteredData = data.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
    // Run renderTable that will use newly filtered data
    renderTable(filteredData);
});

// Event handler to refresh the table with all unfiltered data when Refresh Table button is clicked
d3.select('#refresh-btn').on('click', function() {
    d3.event.preventDefault();
    renderTable(tableData);
})

// Event handler to clear table when clear table is clicked
// Alien truthers are pretty paranoid so this is an extremely important element in case someone sneak's up on them from behind
d3.select('#clear-btn').on('click', function () {
    d3.event.preventDefault();
    d3.selectAll('tbody>tr').remove();
});


