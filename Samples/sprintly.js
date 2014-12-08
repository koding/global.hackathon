// Sprintly is a project management software-as-a-service product
// designed to bridge the communication gap between developers and team managers.
// With Sprintly, you can manage development projects and track team progress in real-time.
// Learn more about Sprintly's feature set and integrations at https://sprint.ly

// We recently released a Javascript SDK for accessing Sprintly data via our Python-based API.
// Find the code and additional documentation at https://github.com/sprintly/sprintly-data.
// Documentation for the Python API can be found at https://sprintly.uservoice.com/knowledgebase/topics/15784-api


// This example pulls all of the items in your project backlog and logs their count.
// Note: you need a Sprintly account and at least one product with some tasks ('items')
// added to it in order to get started.

// Install the SDK via npm: $ npm install --save sprintly/sprintly-data
var sprintly = require('sprintly-data');

var email = window.prompt('sprintly email:');
var apiKey = window.prompt('sprintly API key:');

// Initialize the sprintly client
// The client returns a products Backbone collection as well as a user Backbone model
var client = sprintly.createClient(email, apiKey);

// Fetch your Sprintly products. (note: returns jquery promise)
// Get the product that you'd like to pull items from, passing your product's id to get().
// Easiest way to get your product's id from the url: https://sprint.ly/product/product_id/...
var products = client.products.fetch();
var myProduct = client.products.get(<YOUR_PRODUCT_ID>);

// Pull in all items in your project's backlog. (note: returns jquery promise)
// When all backlog items are fetched, log the collection count to the console.
var backlogCollection = myProduct.getItemsByStatus('backlog');
backlogCollection.done(function() {
  console.log(backlogCollection.length);
});