var vg_1 = "vis1.json";

vegaEmbed("#bubble_chart", vg_1)
  .then(function(result) {
    // Access the Vega view instance as result.view
    var view = result.view;
    
    // Now you can work with the Vega view
    // For example, you can update data or interact with the visualization here
    
    // Example: Update data
    var new_data = { /* your new data object */ };
    view.change("source_0", vega.changeset().insert(new_data)).run();
  })
.catch(console.error);


var vg_2 = "vis2.json";

vegaEmbed("#scatter_plot", vg_2)
  .then(function(result) {
    // Access the Vega view instance as result.view
    var view = result.view;
    
    // Now you can work with the Vega view
    // For example, you can update data or interact with the visualization here
    
    // Example: Update data
    var new_data = { /* your new data object */ };
    view.change("source_0", vega.changeset().insert(new_data)).run();
  })
.catch(console.error);

var vg_3 = "vis3.json";

vegaEmbed("#globe_plot", vg_3)
  .then(function(result) {
    // Access the Vega view instance as result.view
    var view = result.view;
    
    // Now you can work with the Vega view
    // For example, you can update data or interact with the visualization here
    
    // Example: Update data
    var new_data = { /* your new data object */ };
    view.change("source_0", vega.changeset().insert(new_data)).run();
  })
.catch(console.error);
