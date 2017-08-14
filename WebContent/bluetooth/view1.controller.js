sap.ui.controller("bluetooth.view1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf bluetooth.view1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf bluetooth.view1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf bluetooth.view1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf bluetooth.view1
*/
//	onExit: function() {
//
//	}

	onBluetoothPressed:function(){
		
		  window.cordova.plugins.zbtprinter.print(address, "^XA^FO20,20^A0N,25,25^FDThis is a ZPL test.^FS^XZ",
				    function(success) {
				        alert("Zbtprinter print success: " + success);
				    }, function(fail) {
				        alert("Zbtprinter print fail:" + fail);
				        deferred.reject(fail);
				    }
				);
	}
	
});