/// <reference path="/Scripts/knockout-3.2.0.js"/>

$(function() {
	var viewModel = {
		firstName: ko.observable("Mike")
	};
	ko.applyBindings(viewModel);
})
