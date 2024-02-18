<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Belly Button Biodiversity</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
<!-- Include D3 library-->       
  <script src="https://d3js.org/d3-collection.v2.min.js"></script>   
  <!-- d3-TopoJSON library needed for dropdown -->          

</head>
 
<body>

<!-- Dropdown menu -->
<label for="sampleDropdown">Select a sample:</label>
<select id="sampleDropdown"></select>            

<!-- bar placeholder -->            
<div id="barChart"></div>
            
          
// URL  for samples .json file
// const jsonUrl = samples.json
// const jsonUrl = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json')
            
// const jsonUrl = "C:\Users\Owner\OneDrive\MSU after class\Homework\Mod 14\Mod_14_Starter_Code\StarterCode\samples.json"
            
<script> 
// Select the dropdown and chart elements
const sampleDropdown = d3.select("#sampleDropdown");
const barChart = d3.select("#barChart");

//Use D3 to read in JSON file
d3.json(jsonUrl).then(data => {
  // pull samples 
  const sampleNames = data.names;

  // fill drop down with samples
  sampleDropdown            
    .selectALL("option")
    .data(sampleNames)          
    .enter()          
    .append("option")          
    .text(d => d)          
    .attr("value", d => d);

  // Initial sample value
  const initialSample = sampleNames[0];

   //Function to update the chart based on sample           
  function updateChart(selectedSample) {
    // get index of sample             
    const selectedIndex = sampleNames.indexOf(selectedSample);

    
    // get top 10 OTUs          
    const top100TUs = data.samples[selectedIndex].slice(0, 10);
              
    // Create horizontal bar chart
    const barChart = d3.select("#barChart");
              
              
    // Remove chart elements          
    barChart.selectALL("*").remove();
              
     
    barChart          
        .selectALL("div")          
        .data(top100TUs.reverse())      
        .enter()
        .append("div")    
        .style("width", d => '${d.sample_values}px')      
        .text(d => 'OTU ${d.otu_ids}')
        .attr("title", d => d.otu_labels)      
        .attr("class", "bar");           
              
  } 


  // Initial chart update              
  updateChart(initialSample);
              
  sampleDropdown.on("chanage", function() {
    const selectedSample = d3.select(this).property("value");
    updateChart(selectedSample);
  });     
 
});              
              
 </script>             
              
 <style>             
 /* style bar chart */
 #barChart {
      display: flex;
      flex-direction: column;        
  }
 
 .bar {
    background-color: steelblue;               
    margin: 2px 0;
    padding: 5px;          
    color: white;          

 }
 
 </style>             
  
</body>
</html>



