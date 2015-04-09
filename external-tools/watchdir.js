(function() { var fs, np; fs = require('fs'); np = require('path'); exports.watchDirectory = function(dirname, options, listener) { var filter, fsListener, initial, matches, notifyListener, unwatchFile, watchFile, watchedFiles, _ref, _ref1, _ref2, _ref3, _ref4; if (!(listener != null)) { listener = options; options = {}; } if ((_ref = options.persistent) == null) { options.persistent = true; } if ((_ref1 = options.interval) == null) { options.interval = 100; } if ((_ref2 = options.recursive) == null) { options.recursive = true; } if ((_ref3 = options.initial) == null) { options.initial = 'initial'; } if ((_ref4 = options.exclude) == null) { options.exclude = { node_modules: true }; } matches = function(name, filter, defaultValue) { var ext; if (!(filter != null)) { return defaultValue; } else if (typeof filter === 'string') { ext = filter; return name.indexOf(ext, name.length - ext.length) !== -1; } else if (filter.constructor === RegExp) { return filter.test(name); } else if (typeof filter === 'function') { return filter(name); } else { return filter[name] === true; } }; filter = function(name) { if (matches(name, options.exclude, false)) { return false; } else { return matches(name, options.include, true); } }; watchedFiles = {}; notifyListener = function(filename, curr, prev, change) { if (filter(filename)) { return listener(filename, curr, prev, change); } }; fsListener = function(filename, depth, curr, prev) { var change; change = curr.nlink === 0 ? 'deleted' : prev.nlink === 0 ? 'created' : 'modified'; notifyListener(filename, curr, prev, change); if (change !== 'deleted') { return watchFile(filename, depth, curr); } else { return unwatchFile(filename); } }; unwatchFile = function(filename) { fs.unwatchFile(filename, watchedFiles[filename]); return delete watchedFiles[filename]; }; watchFile = function(filename, depth, stats) { var boundListener, child, _i, _len, _ref5; if (depth == null) { depth = 0; } if (stats == null) { stats = fs.statSync(filename); } if (stats.nlink > 0) { if (stats.isDirectory()) { if (!matches(filename, options.exclude, false)) { if (depth === 0 || options.recursive) { _ref5 = fs.readdirSync(filename); for (_i = 0, _len = _ref5.length; _i < _len; _i++) { child = _ref5[_i]; child = np.join(filename, child); watchFile(child, depth + 1); } } } } if (!(watchedFiles[filename] != null)) { boundListener = fsListener.bind(this, filename, depth); watchedFiles[filename] = boundListener; fs.watchFile(filename, options, boundListener); if (initial) { notifyListener(filename, stats, stats, initial); } } } }; initial = options.initial; watchFile(dirname); initial = 'created'; return function() { var key, _results; _results = []; for (key in watchedFiles) { _results.push(unwatchFile(key)); } return _results; }; }; }).call(this);