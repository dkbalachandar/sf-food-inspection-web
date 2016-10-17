google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawCategoryCountChart);
function drawCategoryCountChart() {

    var jsonData = $.ajax({
        url: "/api/inspections/categoryCount",
        dataType: "json",
        async: false
    }).responseText;

    var contentAsArray = JSON.parse(jsonData);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Category');
    dataTable.addColumn('number', 'Count');

    for (var i = 0; i < contentAsArray.length; i++) {
        dataTable.addRow([contentAsArray[i].category, parseInt(contentAsArray[i].count)]);
    }
    var options = {
        title: "Food Inspection Category and its counts"
    };
    var chart = new google.visualization.PieChart(document.getElementById("categoryCountChart_values"));
    chart.draw(dataTable, options);
}