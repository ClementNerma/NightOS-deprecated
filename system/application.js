
/**
  * Application instance
  * @constructor
  * @param {Object} certificate The application certificate
  * @param {string} app The application launcher source code (app.js)
  */

var Application = function(certificate, app) {

	this.certificate = certificate;
	this.app = app;

	this.stacks = [];
    this.errors = [];
	
}

/* Application stacks */

Application.prototype.pushStack = function(stack) { return this.stacks.push(stack); }

Application.prototype.popStack = function(stack) { return this.stacks.pop(); }

Application.prototype.lastStack = function(n) {

	return (typeof(n) !== 'undefined') ? (this.stacks[this.stacks.length - 1] === n) : this.stacks[this.stacks.length - 1];

}

/* Application stacks */

Application.prototype.pushError = function(error) { return this.errors.push(error); }

Application.prototype.popError = function(error) { return this.errors.pop(); }

Application.prototype.lastError = function(n) {

	return (typeof(n) !== 'undefined') ? (this.errors[this.errors.length - 1] === n) : this.errors[this.errors.length - 1];

}

Application.prototype.getStacks = function() { return this.stacks; }

/* Get app informations */

/**
  * Get the certificate of the application
  * @returns {Object} The application certificate
  */

Application.prototype.getCertificate = function() { return this.certificate; }

/**
  * Get the application launched source code (app.js file)
  * @returns {string} The application launcher (app.js)
  */

Application.prototype.getLauncher = function() { return this.app; }

/* System app functions */

/**
  * Close the application
  */

Application.prototype.quit = function() {
	return sys.quitApp(window.App.name, window.App.ID);
}

/* Frames */

/**
  * Load a frame which is in the same directory
  * @param {string} name The frame name (ex: the name is "UI" if the frame file is "UI.frm")
  * @param {Object} context [optional] The node where the frame will be loaded. Default : document.body
  */

Application.prototype.loadFrame = function(name, context) { return Storage.loadFrame(this.certificate, name, context); }

/* Storage watcher */

/**
  * Watch a directory
  * @param {string} path directory path
  * @param {Object} options Watcher options
  * @param {function} callback Callback - Called when a file is modified in the path
  */

Application.prototype.watchDir = function(path, options, callback) { return Storage.watchDir(this.certificate, path, options, callback); }

/* Storage */

/**
 * Write a value in a file
 * @param {string} file
 * @param {string} value
 * @param {string} charset [optional] Change the default write charset. Default : utf8
 * @returns {Boolean} Success of writing
 */

Application.prototype.writeFile = function(file, value, charset) { return Storage.writeFile(this.certificate, file, value, charset); }


/**
 * Add a value to the end of a file
 * @param {string} file
 * @param {string} value
 * @param {string} charset [optional] Change the default write charset. Default : utf8
 * @returns {Boolean} Success of writing
 */

Application.prototype.appendFile = function(file, value, charset) { return Storage.appendFile(this.certificate, file, value, charset); }

/**
  * Read a file
  * @param {string} file
  * @param {string} charset
  * @returns {string} The file content
  */

Application.prototype.readFile = function(file, charset) { return Storage.readFile(this.certificate, file, charset); }

/**
  * Rename a file or a directory
  * @param {string} old_name Old name
  * @param {string} new_name New name
  * @returns {Boolean} Return true if success
  */

Application.prototype.rename = function(old_name, new_name) { return Storage.rename(this.certificate, old_name, new_name); }

/**
  * Remove a file
  * @param {string} file File path
  * @param {Boolean} Return true if success
  */

Application.prototype.removeFile = function(file) { return Storage.removeFile(this.certificate, file); }

/**
  * Copy a file
  * @param {string} srcFile File path
  * @param {string} destFile File destination
  * @param {Number} BUFF_LENGTH Buffer length. If not specified, BUFF_LENGTH equals System.FileSystem.defaultBufferLength
  * @returns {Boolean} Return true if sucess
  */

Application.prototype.copyFile = function(srcFile, destFile, BUFFER_LENGTH) { return Storage.copyFile(this.certificate, srcFile, destFile, BUFFER_LENGTH); }

/**
  * Move a file
  * @param {string} srcFile File path
  * @param {string} destFile File destination
  * @param {Number} BUFF_LENGTH Buffer length. If not specified, BUFF_LENGTH equals System.FileSystem.defaultBufferLength
  * @returns {Boolean} Return true if sucess
  */

Application.prototype.moveFile = function(srcFile, destFile, BUFFER_LENGTH) { return Storage.moveFile(this.certificate, srcFile, destFile, BUFFER_LENGTH); }

/**
  * Create a new directory
  * @param {string} directory
  * @returns {Boolean}
  */

Application.prototype.makeDir = function(path) { return Storage.makeDir(this.certificate, path); }

/**
  * Read a directory
  * @param {string} directory
  * @returns {Array}
  */

Application.prototype.readDir = function(path) { return Storage.readDir(this.certificate, path); }

/**
  * Return files list from a directory
  * @param {string} directory
  * @returns {Array}
  */

Application.prototype.readDirFiles = function(path) { return Storage.readDirFiles(this.certificate, path); }

/**
  * Return directorys list from a directory
  * @param {string} directory
  * @returns {Array}
  */

Application.prototype.readSubDirs = function(path) { return Storage.readSubDirs(this.certificate, path); }

/**
  * Remove a directory
  * @param {string} directory
  * @returns {Boolean}
  */

Application.prototype.removeDir = function(path) { return Storage.removeDir(this.certificate, path); }

/**
 * Check if a path exists AND is a file
 * @param {string} path The path to test
 * @returns {Boolean} true if the specified path is a file
 */

Application.prototype.fileExists = function(path) { return Storage.fileExists(path); }

/**
 * Check if a path exists AND is a directory
 * @param {string} path The path to test
 * @returns {Boolean} true if the specified path is a directory
 */

Application.prototype.directoryExists = function(path) { return Storage.directoryExists(path); }

/**
  * Check if a path exists
  * @param {string} path The path to test
  * @returns {Boolean} true if the specified path exists
  */

Application.prototype.exists = function(path) { return Storage.exists(path); }

/**
  * Get informations from a file, such as size...
  * @param {string} path The file path
  * @returns {Boolean|Object} Return false if an error occured, else return an object which contains many informations on the file
  */

Application.prototype.getFileInformations = function(path) { return Storage.getFileInformations(this.certificate, path); }

/**
  * Get the size of a file
  * @param {string} path The file path
  * @returns {Boolean|Object} Return false if an error occured, else return the file size
  */

Application.prototype.getFileSize = function(path) { return Storage.getFileSize(this.certificate, path); }

/* User Interaction (dialogs) */

/**
  * Display dialog boxes to interact with user
  */

Application.prototype.dialog = new function() {};

/*
 * Display an alert dialog box
 * @param {string} title Dialog title
 * @param {string} content Dialog content
 * @param {function} buttons Dialog buttons
 */

Application.prototype.dialog.alert = function(title, content, buttons) { return Dialogs.alert(title, content, buttons); }

/*
 * Display an info dialog box
 * @param {string} title Dialog title
 * @param {string} content Dialog content
 * @param {function} callback Dialog callback
 */

Application.prototype.dialog.info = function(title, content, callback) { return Dialogs.info(title, content, callback); }

/*
 * Display a warning dialog box
 * @param {string} title Dialog title
 * @param {string} content Dialog content
 * @param {function} callback Dialog callback
 */

Application.prototype.dialog.warning = function(title, content, callback) { return Dialogs.warning(title, content, callback); }

/*
 * Display an error dialog box
 * @param {string} title Dialog title
 * @param {string} content Dialog content
 * @param {function} callback Dialog callback
 */

Application.prototype.dialog.error = function(title, content, callback) { return Dialogs.error(title, content, callback); }

/*
 * Display a confirmation dialog box
 * @param {string} title Dialog title
 * @param {string} content Dialog content
 * @param {function} yes Dialog callback on yes
 * @param {function} no Dialog callback on no
 */

Application.prototype.dialog.confirm = function(title, content, yes, no) { return Dialogs.confirm(title, content, yes, no); }

/*
 * Display an input dialog box
 * @param {string} title Dialog title
 * @param {string} content Dialog content
 * @param {string} type Input type (number|text|...)
 * @param {function} callback Dialog callback
 */

Application.prototype.dialog.input = function(title, content, type, callback) { return Dialogs.input(title, content, type, callback); }

/* System events */

/**
  * Etablish events
  */

Application.prototype.events = new function() {

	var _events = {
		createCrashSave: function() { return true; },
		loadCrashSave: function() {},
		explorerOpen: function(name, args) {
			return Core.applications.launch(name, args);
		},
		quit: function() {
			return App.quit();
		}
	};

	this.onRespondingTest = function(val) { return val * val; }

	/**
	  * Set or get an event
	  * @param {string} name The name of the event
	  * @param {function} callback If omitted, this function return the specified event. Else, the event will be erased and replaced by the specified callback.
	  * @returns {Boolean|function} Return false if an error occured. Else, return the event callback.
	  */

	this.on = function(name, callback) {

		if(typeof(_events[name]) !== 'function')
			return false;

		if(typeof(callback) === 'function')
			_events[name] = callback;

		return _events[name];

	};

}

Object.freeze(Application.prototype);
Object.freeze(Application.prototype.dialog);
