/**
 *  ${TM_NEW_FILE_BASENAME}
 *
 *  Created by ${TM_FULLNAME} on ${TM_DATE}.
 *  Copyright (c) ${TM_YEAR} ${TM_ORGANIZATION_NAME}. All rights reserved.
 */
YUI.add("${TM_NEW_FILE_BASENAME}", function (Y) {
	// declare variables
	var Superclass, mixins, instanceProperties, classProperties, MyModule;
	
	// The class your class inherits from
	Superclass = Y.Base;
	
	// mixins to add
	mixins = [];
	
	// instance methods and properties
	instanceProperties = {
		initializer: function (config) {
			
		},
		destructor: function () {
			
		}
	};
	
	// static properties
	classProperties = {
		ATTRS: {
			
		}
	};

	// generate the class
	MyModule = Y.Base.create("video-base", Superclass, mixins, instanceProperties, classProperties);
	
	// expose the module publicly
	Y.MyModule = MyModule;
	
}, "YUI_VERSION", {
	requires: ["base-build", "base-base"],
	skinnable: false,
	group: "YOUR_GROUP"
});
