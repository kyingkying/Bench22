/*!
 * jQuery JavaScript Library v1.10.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-24T18:39Z
 */
(function(window, undefined) {
    // Can't do this because several apps including ASP.NET trace
    // the stack via arguments.caller.callee and Firefox dies if
    // you try to trace through "use strict" call chains. (#13335)
    // Support: Firefox 18+
    //"use strict";
    var // The deferred used on DOM ready
    readyList, // A central reference to the root jQuery(document)
    rootjQuery, // Support: IE<10
    // For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
    core_strundefined = typeof undefined, // Use the correct document accordingly with window argument (sandbox)
    location = window.location, document = window.document, docElem = document.documentElement, // Map over jQuery in case of overwrite
    _jQuery = window.jQuery, // Map over the $ in case of overwrite
    _$ = window.$, // [[Class]] -> type pairs
    class2type = {}, // List of deleted data cache ids, so we can reuse them
    core_deletedIds = [], core_version = "1.10.0", // Save a reference to some core methods
    core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, // Define a local copy of jQuery
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        return new jQuery.fn.init(selector, context, rootjQuery);
    }, // Used for matching numbers
    core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, // Used for splitting on whitespace
    core_rnotwhite = /\S+/g, // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, // Match a standalone tag
    rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, // JSON RegExp
    rvalidchars = /^[\],:{}\s]*$/, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, // Matches dashed string for camelizing
    rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
    fcamelCase = function(all, letter) {
        "dk.brics.javascriptSlicer.unreachable";
        return letter.toUpperCase();
    }, // The ready event handler
    completed = function(event) {
        // readyState === "complete" is good enough for us to call the dom ready in oldIE
        if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
            detach();
            jQuery.ready();
        }
    }, // Clean-up method for dom ready events
    detach = function() {
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", completed, false);
            window.removeEventListener("load", completed, false);
        } else {
            "dk.brics.javascriptSlicer.unreachable";
            document.detachEvent("onreadystatechange", completed);
            window.detachEvent("onload", completed);
        }
    };
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: core_version,
        constructor: jQuery,
        init: function(selector, context, rootjQuery) {
            var match, elem;
            // HANDLE: $(""), $(null), $(undefined), $(false)
            if (!selector) {
                "dk.brics.javascriptSlicer.unreachable";
                return this;
            }
            // Handle HTML strings
            if (typeof selector === "string") {
                if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [ null, selector, null ];
                } else {
                    match = rquickExpr.exec(selector);
                }
                // Match html or make sure no context is specified for #id
                if (match && (match[1] || !context)) {
                    // HANDLE: $(html) -> $(array)
                    if (match[1]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        context = context instanceof jQuery ? context[0] : context;
                        // scripts is true for back-compat
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        // HANDLE: $(html, props)
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            for (match in context) {
                                "dk.brics.javascriptSlicer.unreachable";
                                // Properties of context are called as methods if possible
                                if (jQuery.isFunction(this[match])) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    this[match](context[match]);
                                } else {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this;
                    } else {
                        elem = document.getElementById(match[2]);
                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        if (elem && elem.parentNode) {
                            // Handle the case where IE and Opera return items
                            // by name instead of ID
                            if (/* TAJS avoid this anti bug behaviour */ false && elem.id !== match[2]) {
                                "dk.brics.javascriptSlicer.unreachable";
                                return rootjQuery.find(selector);
                            }
                            // Otherwise, we inject the element directly into the jQuery object
                            this.length = 1;
                            this[0] = elem;
                        }
                        this.context = document;
                        this.selector = selector;
                        return this;
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!context || context.jquery) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return (context || rootjQuery).find(selector);
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        return this.constructor(context).find(selector);
                    }
                }
            } else {
                if (selector.nodeType) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this;
                } else {
                    if (jQuery.isFunction(selector)) {
                        return rootjQuery.ready(selector);
                    }
                }
            }
            if (selector.selector !== undefined) {
                "dk.brics.javascriptSlicer.unreachable";
                this.selector = selector.selector;
                this.context = selector.context;
            }
            return jQuery.makeArray(selector, this);
        },
        // Start with an empty selector
        selector: "",
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return core_slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
            "dk.brics.javascriptSlicer.unreachable";
            return num == null ? // Return a 'clean' array
            this.toArray() : // Return just the object
            num < 0 ? this[this.length + num] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
            "dk.brics.javascriptSlicer.unreachable";
            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            ret.context = this.context;
            // Return the newly-formed element set
            return ret;
        },
        // Execute a callback for every element in the matched set.
        // (You can seed the arguments with an array of args, but this is
        // only used internally.)
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        ready: function(fn) {
            // Add the callback
            jQuery.ready.promise().done(fn);
            return this;
        },
        slice: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.pushStack(core_slice.apply(this, arguments));
        },
        first: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.eq(0);
        },
        last: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.eq(-1);
        },
        eq: function(i) {
            "dk.brics.javascriptSlicer.unreachable";
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        map: function(callback) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.pushStack(jQuery.map(this, function(elem, i) {
                "dk.brics.javascriptSlicer.unreachable";
                return callback.call(elem, i, elem);
            }));
        },
        end: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.prevObject || this.constructor(null);
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: core_push,
        sort: [].sort,
        splice: [].splice
    };
    // Give the init function the jQuery prototype for later instantiation
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function() {
        var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            "dk.brics.javascriptSlicer.unreachable";
            target = {};
        }
        // extend jQuery itself if only one argument is passed
        if (length === i) {
            target = this;
            --i;
        }
        for (;i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    // Prevent never-ending loop
                    if (target === copy) {
                        "dk.brics.javascriptSlicer.unreachable";
                        continue;
                    }
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            "dk.brics.javascriptSlicer.unreachable";
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                        assumeTypeOf('clone', 'undefined', false);
                        assumeTypeOf('copy', 'undefined', false);
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else {
                        if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
        }
        // Return the modified object
        return target;
    };
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        // Non-digits removed to match rinlinejQuery
        expando: "jQuery" + (core_version + "TAJS_RANDOM_1").replace(/\D/g, ""),
        noConflict: function(deep) {
            "dk.brics.javascriptSlicer.unreachable";
            if (window.$ === jQuery) {
                "dk.brics.javascriptSlicer.unreachable";
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                "dk.brics.javascriptSlicer.unreachable";
                window.jQuery = _jQuery;
            }
            return jQuery;
        },
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Hold (or release) the ready event
        holdReady: function(hold) {
            "dk.brics.javascriptSlicer.unreachable";
            if (hold) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.readyWait++;
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.ready(true);
            }
        },
        // Handle when the DOM is ready
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if (!document.body) {
                "dk.brics.javascriptSlicer.unreachable";
                return setTimeout(jQuery.ready);
            }
            // Remember that the DOM is ready
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // If there are functions bound, to execute
            readyList.resolveWith(document, [ jQuery ]);
            // Trigger any bound ready events
            if (jQuery.fn.trigger) {
                jQuery(document).trigger("ready").off("ready");
            }
        },
        // See test/unit/core.js for details concerning isFunction.
        // Since version 1.3, DOM methods and functions like alert
        // aren't supported. They return false on IE (#2968).
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray || function(obj) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.type(obj) === "array";
        },
        isWindow: function(obj) {
            /* jshint eqeqeq: false */
            return obj != null && obj == obj.window;
        },
        isNumeric: function(obj) {
            "dk.brics.javascriptSlicer.unreachable";
            return !isNaN(parseFloat(obj)) && isFinite(obj);
        },
        type: function(obj) {
            if (obj == null) {
                return String(obj);
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
        },
        isPlainObject: function(obj) {
            var key;
            // Must be an Object.
            // Because of IE, we also have to check the presence of the constructor property.
            // Make sure that DOM nodes and window objects don't pass through, as well
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            try {
                // Not own constructor property must be Object
                if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return false;
                }
            } catch (e) {
                "dk.brics.javascriptSlicer.unreachable";
                // IE8,9 Will throw exceptions on certain host objects #9897
                return false;
            }
            // Begin TAJS modification:
            // jQuery relies on implementation details left unspecified in the ECMA standard.
            // We can achieve the same effect, but we have to rewrite the check for own properties manually
            for (key in obj) {
                if (!core_hasOwn.call(obj, key)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return false;
                }
            }
            return key === undefined || true;
        },
        isEmptyObject: function(obj) {
            "dk.brics.javascriptSlicer.unreachable";
            var name;
            for (name in obj) {
                "dk.brics.javascriptSlicer.unreachable";
                return false;
            }
            return true;
        },
        error: function(msg) {
            "dk.brics.javascriptSlicer.unreachable";
            throw new Error(msg);
        },
        // data: string of html
        // context (optional): If specified, the fragment will be created in this context, defaults to document
        // keepScripts (optional): If true, will include scripts passed in the html string
        parseHTML: function(data, context, keepScripts) {
            "dk.brics.javascriptSlicer.unreachable";
            if (!data || typeof data !== "string") {
                "dk.brics.javascriptSlicer.unreachable";
                return null;
            }
            if (typeof context === "boolean") {
                "dk.brics.javascriptSlicer.unreachable";
                keepScripts = context;
                context = false;
            }
            context = context || document;
            var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
            // Single tag
            if (parsed) {
                "dk.brics.javascriptSlicer.unreachable";
                return [ context.createElement(parsed[1]) ];
            }
            parsed = jQuery.buildFragment([ data ], context, scripts);
            if (scripts) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
        },
        parseJSON: function(data) {
            "dk.brics.javascriptSlicer.unreachable";
            // Attempt to parse using the native JSON parser first
            if (window.JSON && window.JSON.parse) {
                "dk.brics.javascriptSlicer.unreachable";
                return window.JSON.parse(data);
            }
            if (data === null) {
                "dk.brics.javascriptSlicer.unreachable";
                return data;
            }
            if (typeof data === "string") {
                "dk.brics.javascriptSlicer.unreachable";
                // Make sure leading/trailing whitespace is removed (IE can't handle it)
                data = jQuery.trim(data);
                if (data) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Make sure the incoming data is actual JSON
                    // Logic borrowed from http://json.org/json2.js
                    if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return new Function("return " + data)();
                    }
                }
            }
            jQuery.error("Invalid JSON: " + data);
        },
        // Cross-browser xml parsing
        parseXML: function(data) {
            "dk.brics.javascriptSlicer.unreachable";
            var xml, tmp;
            if (!data || typeof data !== "string") {
                "dk.brics.javascriptSlicer.unreachable";
                return null;
            }
            try {
                "dk.brics.javascriptSlicer.unreachable";
                if (window.DOMParser) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Standard
                    tmp = new DOMParser();
                    xml = tmp.parseFromString(data, "text/xml");
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    // IE
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = "false";
                    xml.loadXML(data);
                }
            } catch (e) {
                "dk.brics.javascriptSlicer.unreachable";
                xml = undefined;
            }
            if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.error("Invalid XML: " + data);
            }
            return xml;
        },
        noop: function() {},
        // Evaluates a script in a global context
        // Workarounds based on findings by Jim Driscoll
        // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
        globalEval: function(data) {
            "dk.brics.javascriptSlicer.unreachable";
            if (data && jQuery.trim(data)) {
                "dk.brics.javascriptSlicer.unreachable";
                // We use execScript on Internet Explorer
                // We use an anonymous function so that context is window
                // rather than jQuery in Firefox
                (window.execScript || function(data) {
                    "dk.brics.javascriptSlicer.unreachable";
                    window["eval"].call(window, data);
                })(data);
            }
        },
        // Convert dashed to camelCase; used by the css and data modules
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function(string) {
            "dk.brics.javascriptSlicer.unreachable";
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        // args is for internal usage only
        each: function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) {
                "dk.brics.javascriptSlicer.unreachable";
                if (isArray) {
                    "dk.brics.javascriptSlicer.unreachable";
                    for (;i < length; i++) {
                        "dk.brics.javascriptSlicer.unreachable";
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            "dk.brics.javascriptSlicer.unreachable";
                            break;
                        }
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    for (i in obj) {
                        "dk.brics.javascriptSlicer.unreachable";
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            "dk.brics.javascriptSlicer.unreachable";
                            break;
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            "dk.brics.javascriptSlicer.unreachable";
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            "dk.brics.javascriptSlicer.unreachable";
                            break;
                        }
                    }
                }
            }
            return obj;
        },
        // Use native String.trim function wherever possible
        trim: core_trim && !core_trim.call(" ") ? function(text) {
            "dk.brics.javascriptSlicer.unreachable";
            return text == null ? "" : core_trim.call(text);
        } : // Otherwise use our own trimming functionality
        function(text) {
            "dk.brics.javascriptSlicer.unreachable";
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        // results is for internal usage only
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                } else {
                    core_push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            var len;
            if (arr) {
                if (core_indexOf) {
                    return core_indexOf.call(arr, elem, i);
                }
                "dk.brics.javascriptSlicer.unreachable";
                len = arr.length;
                i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                for (;i < len; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Skip accessing in sparse arrays
                    if (i in arr && arr[i] === elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return i;
                    }
                }
            }
            "dk.brics.javascriptSlicer.unreachable";
            return -1;
        },
        merge: function(first, second) {
            var l = second.length, i = first.length, j = 0;
            if (typeof l === "number") {
                for (;j < l; j++) {
                    first[i++] = second[j];
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                while (second[j] !== undefined) {
                    "dk.brics.javascriptSlicer.unreachable";
                    first[i++] = second[j++];
                }
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, inv) {
            "dk.brics.javascriptSlicer.unreachable";
            var retVal, ret = [], i = 0, length = elems.length;
            inv = !!inv;
            // Go through the array, only saving the items
            // that pass the validator function
            for (;i < length; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                retVal = !!callback(elems[i], i);
                if (inv !== retVal) {
                    "dk.brics.javascriptSlicer.unreachable";
                    ret.push(elems[i]);
                }
            }
            return ret;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
            var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
            // Go through the array, translating each of the items to their
            if (isArray) {
                for (;i < length; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        "dk.brics.javascriptSlicer.unreachable";
                        ret[ret.length] = value;
                    }
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                for (i in elems) {
                    "dk.brics.javascriptSlicer.unreachable";
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        "dk.brics.javascriptSlicer.unreachable";
                        ret[ret.length] = value;
                    }
                }
            }
            // Flatten any nested arrays
            return core_concat.apply([], ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function(fn, context) {
            "dk.brics.javascriptSlicer.unreachable";
            var args, proxy, tmp;
            if (typeof context === "string") {
                "dk.brics.javascriptSlicer.unreachable";
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if (!jQuery.isFunction(fn)) {
                "dk.brics.javascriptSlicer.unreachable";
                return undefined;
            }
            // Simulated bind
            args = core_slice.call(arguments, 2);
            proxy = function() {
                "dk.brics.javascriptSlicer.unreachable";
                return fn.apply(context || this, args.concat(core_slice.call(arguments)));
            };
            // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        // Multifunctional method to get and set values of a collection
        // The value/s can optionally be executed if it's a function
        access: function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0, length = elems.length, bulk = key == null;
            // Sets many values
            if (jQuery.type(key) === "object") {
                "dk.brics.javascriptSlicer.unreachable";
                chainable = true;
                for (i in key) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
                }
            } else {
                if (value !== undefined) {
                    chainable = true;
                    if (!jQuery.isFunction(value)) {
                        raw = true;
                    }
                    if (bulk) {
                        // Bulk operations run against the entire set
                        if (raw) {
                            fn.call(elems, value);
                            fn = null;
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            bulk = fn;
                            fn = function(elem, key, value) {
                                "dk.brics.javascriptSlicer.unreachable";
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                    }
                    if (fn) {
                        "dk.brics.javascriptSlicer.unreachable";
                        for (;i < length; i++) {
                            "dk.brics.javascriptSlicer.unreachable";
                            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                        }
                    }
                }
            }
            return chainable ? elems : // Gets
            bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
        },
        now: function() {
            return new Date().getTime();
        },
        // A method for quickly swapping in/out CSS properties to get correct calculations.
        // Note: this method belongs to the css module but it's needed here for the support module.
        // If support gets modularized, this method should be moved back to the css module.
        swap: function(elem, options, callback, args) {
            var ret, name, old = {};
            // Remember the old values, and insert the new ones
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.apply(elem, args || []);
            // Revert the old values
            for (name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        }
    });
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            // Catch cases where $(document).ready() is called after the browser event has already occurred.
            // we once tried to use readyState "interactive" here, but it caused issues like the one
            // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
            if (document.readyState === "complete") {
                "dk.brics.javascriptSlicer.unreachable";
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                setTimeout(jQuery.ready);
            } else {
                if (document.addEventListener) {
                    // Use the handy event callback
                    document.addEventListener("DOMContentLoaded", completed, false);
                    // A fallback to window.onload, that will always work
                    window.addEventListener("load", completed, false);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Ensure firing before onload, maybe late but safe also for iframes
                    document.attachEvent("onreadystatechange", completed);
                    // A fallback to window.onload, that will always work
                    window.attachEvent("onload", completed);
                    // If IE and not a frame
                    // continually check to see if the document is ready
                    var top = false;
                    try {
                        "dk.brics.javascriptSlicer.unreachable";
                        top = window.frameElement == null && document.documentElement;
                    } catch (e) {}
                    if (top && top.doScroll) {
                        "dk.brics.javascriptSlicer.unreachable";
                        (function doScrollCheck() {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (!jQuery.isReady) {
                                "dk.brics.javascriptSlicer.unreachable";
                                try {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    // Use the trick by Diego Perini
                                    // http://javascript.nwbox.com/IEContentLoaded/
                                    top.doScroll("left");
                                } catch (e) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    return setTimeout(doScrollCheck, 50);
                                }
                                // detach all dom ready events
                                detach();
                                // and execute any waiting functions
                                jQuery.ready();
                            }
                        })();
                    }
                }
            }
        }
        return readyList.promise(obj);
    };
    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArraylike(obj) {
        var length = obj.length, type = jQuery.type(obj);
        if (jQuery.isWindow(obj)) {
            "dk.brics.javascriptSlicer.unreachable";
            return false;
        }
        if (obj.nodeType === 1 && length) {
            "dk.brics.javascriptSlicer.unreachable";
            return true;
        }
        return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
    }
    // All jQuery objects should point back to these
    rootjQuery = jQuery(document);
    /*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-15
 */
    (function(window, undefined) {
        var i, support, cachedruns, Expr, getText, isXML, compile, outermostContext, sortInput, // Local document vars
        setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, // Instance-specific data
        expando = "sizzle" + "TAJS_DATE_1", preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), hasDuplicate = false, sortOrder = function() {
            return 0;
        }, // General-purpose constants
        strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, // Instance methods
        hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, // Use a stripped-down indexOf if we can't use a native one
        indexOf = arr.indexOf || function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            var i = 0, len = this.length;
            for (;i < len; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                if (this[i] === elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return i;
                }
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/css3-syntax/#characters
        characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Loosely modeled on CSS identifier characters
        // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
        // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        identifier = characterEncoding.replace("w", "w#"), // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", // Prefer arguments quoted,
        //   then not containing pseudos/brackets,
        //   then attribute selectors/non-parenthetical expressions,
        //   then anything else
        // These preferences are here to reduce the number of selectors
        //   needing tokenize in the PSEUDO preFilter
        pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rsibling = new RegExp(whitespace + "*[+~]"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            //TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            TAG: new RegExp("^((?:\\\\.|[\\w*-]|[^\\x00-\\xa0])+)"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rescape = /'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            "dk.brics.javascriptSlicer.unreachable";
            var high = "0x" + escaped - 65536;
            // NaN means non-codepoint
            // Support: Firefox
            // Workaround erroneous numeric interpretation of +"0x"
            return high !== high || escapedWhitespace ? escaped : // BMP codepoint
            high < 0 ? String.fromCharCode(high + 65536) : // Supplemental Plane codepoint (surrogate pair)
            String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        };
        // Optimize for push.apply( _, NodeList )
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            // Support: Android<4.0
            // Detect silently failing push.apply
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            "dk.brics.javascriptSlicer.unreachable";
            push = {
                apply: arr.length ? // Leverage slice if possible
                function(target, els) {
                    "dk.brics.javascriptSlicer.unreachable";
                    push_native.apply(target, slice.call(els));
                } : // Support: IE<9
                // Otherwise append directly
                function(target, els) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var j = target.length, i = 0;
                    // Can't trust NodeList.length
                    while (target[j++] = els[i++]) {}
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            "dk.brics.javascriptSlicer.unreachable";
            var match, elem, m, nodeType, // QSA vars
            i, groups, old, nid, newContext, newSelector;
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                "dk.brics.javascriptSlicer.unreachable";
                setDocument(context);
            }
            context = context || document;
            results = results || [];
            if (!selector || typeof selector !== "string") {
                "dk.brics.javascriptSlicer.unreachable";
                return results;
            }
            if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                "dk.brics.javascriptSlicer.unreachable";
                return [];
            }
            if (documentIsHTML && !seed) {
                "dk.brics.javascriptSlicer.unreachable";
                // Shortcuts
                if (match = rquickExpr.exec(selector)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Speed-up: Sizzle("#ID")
                    if (m = match[1]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (nodeType === 9) {
                            "dk.brics.javascriptSlicer.unreachable";
                            elem = context.getElementById(m);
                            // Check parentNode to catch when Blackberry 4.6 returns
                            // nodes that are no longer in the document #6963
                            if (elem && elem.parentNode) {
                                "dk.brics.javascriptSlicer.unreachable";
                                // Handle the case where IE, Opera, and Webkit return items
                                // by name instead of ID
                                if (elem.id === m) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                "dk.brics.javascriptSlicer.unreachable";
                                return results;
                            }
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            // Context is not a document
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                "dk.brics.javascriptSlicer.unreachable";
                                results.push(elem);
                                return results;
                            }
                        }
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (match[2]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                "dk.brics.javascriptSlicer.unreachable";
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        }
                    }
                }
                // QSA path
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    "dk.brics.javascriptSlicer.unreachable";
                    nid = old = expando;
                    newContext = context;
                    newSelector = nodeType === 9 && selector;
                    // qSA works strangely on Element-rooted queries
                    // We can work around this by specifying an extra ID on the root
                    // and working up from there (Thanks to Andrew Dupont for the technique)
                    // IE 8 doesn't work on object elements
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        "dk.brics.javascriptSlicer.unreachable";
                        groups = tokenize(selector);
                        if (old = context.getAttribute("id")) {
                            "dk.brics.javascriptSlicer.unreachable";
                            nid = old.replace(rescape, "\\$&");
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            context.setAttribute("id", nid);
                        }
                        nid = "[id='" + nid + "'] ";
                        i = groups.length;
                        while (i--) {
                            "dk.brics.javascriptSlicer.unreachable";
                            groups[i] = nid + toSelector(groups[i]);
                        }
                        newContext = rsibling.test(selector) && context.parentNode || context;
                        newSelector = groups.join(",");
                    }
                    if (newSelector) {
                        "dk.brics.javascriptSlicer.unreachable";
                        try {
                            "dk.brics.javascriptSlicer.unreachable";
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {} finally {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (!old) {
                                "dk.brics.javascriptSlicer.unreachable";
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            // All others
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
 * For feature detection
 * @param {Function} fn The function to test for native support
 */
        function isNative(fn) {
            return rnative.test(fn + "");
        }
        /**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
        function createCache() {
            var keys = [];
            function cache(key, value) {
                "dk.brics.javascriptSlicer.unreachable";
                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                if (keys.push(key += " ") > Expr.cacheLength) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Only keep the most recent entries
                    delete cache[keys.shift()];
                }
                return cache[key] = value;
            }
            return cache;
        }
        /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return false;
            } finally {
                // Remove from its parent by default
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
                // release memory in IE
                div = null;
            }
        }
        /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied if the test fails
 * @param {Boolean} test The result of a test. If true, null will be set as the handler in leiu of the specified handler
 */
        function addHandle(attrs, handler, test) {
            attrs = attrs.split("|");
            var current, i = attrs.length, setHandle = test ? null : handler;
            while (i--) {
                // Don't override a user's handler
                if (!(current = Expr.attrHandle[attrs[i]]) || current === handler) {
                    Expr.attrHandle[attrs[i]] = setHandle;
                }
            }
        }
        /**
 * Fetches boolean attributes by node
 * @param {Element} elem
 * @param {String} name
 */
        function boolHandler(elem, name) {
            "dk.brics.javascriptSlicer.unreachable";
            // XML does not need to be checked as this will not be assigned for XML documents
            var val = elem.getAttributeNode(name);
            return val && val.specified ? val.value : elem[name] === true ? name.toLowerCase() : null;
        }
        /**
 * Fetches attributes without interpolation
 * http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
 * @param {Element} elem
 * @param {String} name
 */
        function interpolationHandler(elem, name) {
            "dk.brics.javascriptSlicer.unreachable";
            // XML does not need to be checked as this will not be assigned for XML documents
            return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
        /**
 * Uses defaultValue to retrieve value in IE6/7
 * @param {Element} elem
 * @param {String} name
 */
        function valueHandler(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            // Ignore the value *property* on inputs by using defaultValue
            // Fallback to Sizzle.attr by returning undefined where appropriate
            // XML does not need to be checked as this will not be assigned for XML documents
            if (elem.nodeName.toLowerCase() === "input") {
                "dk.brics.javascriptSlicer.unreachable";
                return elem.defaultValue;
            }
        }
        /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns Returns -1 if a precedes b, 1 if a follows b
 */
        function siblingCheck(a, b) {
            "dk.brics.javascriptSlicer.unreachable";
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            // Use IE sourceIndex if available on both nodes
            if (diff) {
                "dk.brics.javascriptSlicer.unreachable";
                return diff;
            }
            // Check if b follows a
            if (cur) {
                "dk.brics.javascriptSlicer.unreachable";
                while (cur = cur.nextSibling) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (cur === b) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
        function createInputPseudo(type) {
            return function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
        function createButtonPseudo(type) {
            return function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                "dk.brics.javascriptSlicer.unreachable";
                argument = +argument;
                return markFunction(function(seed, matches) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    // Match elements found at the specified indexes
                    while (i--) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (seed[j = matchIndexes[i]]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        /**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
        isXML = Sizzle.isXML = function(elem) {
            // documentElement is verified for cases where it doesn't yet exist
            // (such as loading iframes in IE - #4833)
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        // Expose support vars for convenience
        support = Sizzle.support = {};
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
        setDocument = Sizzle.setDocument = function(node) {
            var doc = node ? node.ownerDocument || node : preferredDoc;
            // If no document and documentElement is available, return
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                "dk.brics.javascriptSlicer.unreachable";
                return document;
            }
            // Set our document
            document = doc;
            docElem = doc.documentElement;
            // Support tests
            documentIsHTML = !isXML(doc);
            /* Attributes
	---------------------------------------------------------------------- */
            // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
            support.attributes = assert(function(div) {
                // Support: IE<8
                // Prevent attribute/property "interpolation"
                div.innerHTML = "<a href='#'></a>";
                addHandle("type|href|height|width", interpolationHandler, div.firstChild.getAttribute("href") === "#");
                // Support: IE<9
                // Use getAttributeNode to fetch booleans when getAttribute lies
                addHandle(booleans, boolHandler, div.getAttribute("disabled") == null);
                div.className = "i";
                return !div.getAttribute("className");
            });
            // Support: IE<9
            // Retrieving value should defer to defaultValue
            support.input = assert(function(div) {
                div.innerHTML = "<input>";
                div.firstChild.setAttribute("value", "");
                return div.firstChild.getAttribute("value") === "";
            });
            // IE6/7 still return empty string for value,
            // but are actually retrieving the property
            addHandle("value", valueHandler, support.attributes && support.input);
            /* getElement(s)By*
	---------------------------------------------------------------------- */
            // Check if getElementsByTagName("*") returns only elements
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(doc.createComment(""));
                return !div.getElementsByTagName("*").length;
            });
            // Check if getElementsByClassName can be trusted
            support.getElementsByClassName = assert(function(div) {
                div.innerHTML = "<div class='a'></div><div class='a i'></div>";
                // Support: Safari<4
                // Catch class over-caching
                div.firstChild.className = "i";
                // Support: Opera<10
                // Catch gEBCN failure to find non-leading classes
                return div.getElementsByClassName("i").length === 2;
            });
            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !doc.getElementsByName || !doc.getElementsByName(expando).length;
            });
            // ID find and filter
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (typeof context.getElementById !== strundefined && documentIsHTML) {
                        "dk.brics.javascriptSlicer.unreachable";
                        var m = context.getElementById(id);
                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        return m && m.parentNode ? [ m ] : [];
                    }
                };
                Expr.filter["ID"] = function(id) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                // Support: IE6/7
                // getElementById is not reliable as a find shortcut
                delete Expr.find["ID"];
                Expr.filter["ID"] = function(id) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
            }
            // Tag
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                "dk.brics.javascriptSlicer.unreachable";
                if (typeof context.getElementsByTagName !== strundefined) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return context.getElementsByTagName(tag);
                }
            } : function(tag, context) {
                "dk.brics.javascriptSlicer.unreachable";
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                // Filter out possible comments
                if (tag === "*") {
                    "dk.brics.javascriptSlicer.unreachable";
                    while (elem = results[i++]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (elem.nodeType === 1) {
                            "dk.brics.javascriptSlicer.unreachable";
                            tmp.push(elem);
                        }
                    }
                    return tmp;
                }
                return results;
            };
            // Class
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                "dk.brics.javascriptSlicer.unreachable";
                if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return context.getElementsByClassName(className);
                }
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */
            // QSA and matchesSelector support
            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            rbuggyMatches = [];
            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See http://bugs.jquery.com/ticket/13378
            rbuggyQSA = [];
            if (support.qsa = isNative(doc.querySelectorAll)) {
                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                assert(function(div) {
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // http://bugs.jquery.com/ticket/12359
                    div.innerHTML = "<select><option selected=''></option></select>";
                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    if (!div.querySelectorAll("[selected]").length) {
                        "dk.brics.javascriptSlicer.unreachable";
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }
                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    if (!div.querySelectorAll(":checked").length) {
                        "dk.brics.javascriptSlicer.unreachable";
                        rbuggyQSA.push(":checked");
                    }
                });
                assert(function(div) {
                    // Support: Opera 10-12/IE8
                    // ^= $= *= and empty values
                    // Should not select anything
                    // Support: Windows 8 Native Apps
                    // The type attribute is restricted during .innerHTML assignment
                    var input = doc.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("t", "");
                    if (div.querySelectorAll("[t^='']").length) {
                        "dk.brics.javascriptSlicer.unreachable";
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }
                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    if (!div.querySelectorAll(":enabled").length) {
                        "dk.brics.javascriptSlicer.unreachable";
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    div.querySelectorAll("*,:x");
                    "dk.brics.javascriptSlicer.unreachable";
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = isNative(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    // Check to see if it's possible to do matchesSelector
                    // on a disconnected node (IE 9)
                    support.disconnectedMatch = matches.call(div, "div");
                    // This should fail with an exception
                    // Gecko does not error, returns false instead
                    matches.call(div, "[s!='']:x");
                    "dk.brics.javascriptSlicer.unreachable";
                    rbuggyMatches.push("!=", pseudos);
                });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            /* Contains
	---------------------------------------------------------------------- */
            // Element contains another
            // Purposefully does not implement inclusive descendent
            // As in, an element does not contain itself
            contains = isNative(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                "dk.brics.javascriptSlicer.unreachable";
                if (b) {
                    "dk.brics.javascriptSlicer.unreachable";
                    while (b = b.parentNode) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (b === a) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return true;
                        }
                    }
                }
                return false;
            };
            /* Sorting
	---------------------------------------------------------------------- */
            // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
            // Detached nodes confoundingly follow *each other*
            support.sortDetached = assert(function(div1) {
                // Should return 1, but returns 4 (following)
                return div1.compareDocumentPosition(doc.createElement("div")) & 1;
            });
            // Document order sorting
            sortOrder = docElem.compareDocumentPosition ? function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                "dk.brics.javascriptSlicer.unreachable";
                var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                if (compare) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Disconnected nodes
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Choose the first element that is related to our preferred document
                        if (a === doc || contains(preferredDoc, a)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return -1;
                        }
                        if (b === doc || contains(preferredDoc, b)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return 1;
                        }
                        // Maintain original order
                        return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                    }
                    return compare & 4 ? -1 : 1;
                }
                // Not directly comparable, sort on existence of method
                return a.compareDocumentPosition ? -1 : 1;
            } : function(a, b) {
                "dk.brics.javascriptSlicer.unreachable";
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                // Exit early if the nodes are identical
                if (a === b) {
                    "dk.brics.javascriptSlicer.unreachable";
                    hasDuplicate = true;
                    return 0;
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!aup || !bup) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (aup === bup) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return siblingCheck(a, b);
                        }
                    }
                }
                // Otherwise we need full lists of their ancestors for comparison
                cur = a;
                while (cur = cur.parentNode) {
                    "dk.brics.javascriptSlicer.unreachable";
                    ap.unshift(cur);
                }
                cur = b;
                while (cur = cur.parentNode) {
                    "dk.brics.javascriptSlicer.unreachable";
                    bp.unshift(cur);
                }
                // Walk down the tree looking for a discrepancy
                while (ap[i] === bp[i]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    i++;
                }
                return i ? // Do a sibling check if the nodes have a common ancestor
                siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
                ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };
            return doc;
        };
        Sizzle.matches = function(expr, elements) {
            "dk.brics.javascriptSlicer.unreachable";
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            "dk.brics.javascriptSlicer.unreachable";
            // Set document vars if needed
            if ((elem.ownerDocument || elem) !== document) {
                "dk.brics.javascriptSlicer.unreachable";
                setDocument(elem);
            }
            // Make sure that attribute selectors are quoted
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                "dk.brics.javascriptSlicer.unreachable";
                try {
                    "dk.brics.javascriptSlicer.unreachable";
                    var ret = matches.call(elem, expr);
                    // IE 9's matchesSelector returns false on disconnected nodes
                    if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                    // fragment in IE 9
                    elem.document && elem.document.nodeType !== 11) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return ret;
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            // Set document vars if needed
            if ((context.ownerDocument || context) !== document) {
                "dk.brics.javascriptSlicer.unreachable";
                setDocument(context);
            }
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            "dk.brics.javascriptSlicer.unreachable";
            // Set document vars if needed
            if ((elem.ownerDocument || elem) !== document) {
                "dk.brics.javascriptSlicer.unreachable";
                setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val;
        };
        Sizzle.error = function(msg) {
            "dk.brics.javascriptSlicer.unreachable";
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
        Sizzle.uniqueSort = function(results) {
            "dk.brics.javascriptSlicer.unreachable";
            var elem, duplicates = [], j = 0, i = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                "dk.brics.javascriptSlicer.unreachable";
                while (elem = results[i++]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (elem === results[i]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    "dk.brics.javascriptSlicer.unreachable";
                    results.splice(duplicates[j], 1);
                }
            }
            return results;
        };
        /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
        getText = Sizzle.getText = function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
                "dk.brics.javascriptSlicer.unreachable";
                // If no nodeType, this is expected to be an array
                for (;node = elem[i]; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Do not traverse comment nodes
                    ret += getText(node);
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (see #11153)
                    if (typeof elem.textContent === "string") {
                        "dk.brics.javascriptSlicer.unreachable";
                        return elem.textContent;
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Traverse its children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            "dk.brics.javascriptSlicer.unreachable";
                            ret += getText(elem);
                        }
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (nodeType === 3 || nodeType === 4) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return elem.nodeValue;
                    }
                }
            }
            // Do not include comment or processing instruction nodes
            return ret;
        };
        Expr = Sizzle.selectors = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    "dk.brics.javascriptSlicer.unreachable";
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        "dk.brics.javascriptSlicer.unreachable";
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    "dk.brics.javascriptSlicer.unreachable";
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        "dk.brics.javascriptSlicer.unreachable";
                        // nth-* requires argument
                        if (!match[3]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            Sizzle.error(match[0]);
                        }
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (match[3]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            Sizzle.error(match[0]);
                        }
                    }
                    return match;
                },
                PSEUDO: function(match) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var excess, unquoted = !match[5] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return null;
                    }
                    // Accept quoted arguments as-is
                    if (match[3] && match[4] !== undefined) {
                        "dk.brics.javascriptSlicer.unreachable";
                        match[2] = match[4];
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (unquoted && rpseudo.test(unquoted) && (// Get excess from tokenize (recursively)
                        excess = tokenize(unquoted, true)) && (// advance to the next closing parenthesis
                        excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // excess is a negative index
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        }
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        "dk.brics.javascriptSlicer.unreachable";
                        return true;
                    } : function(elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return function(elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return operator === "!=";
                        }
                        if (!operator) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return true;
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    function(elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        "dk.brics.javascriptSlicer.unreachable";
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                        if (parent) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                "dk.brics.javascriptSlicer.unreachable";
                                while (dir) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    node = elem;
                                    while (node = node[dir]) {
                                        "dk.brics.javascriptSlicer.unreachable";
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            return false;
                                        }
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                "dk.brics.javascriptSlicer.unreachable";
                                // Seek `elem` from a previously-cached index
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = cache[0] === dirruns && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (// Fallback to seeking `elem` from the start
                                diff = nodeIndex = 0) || start.pop()) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    // When found, cache indexes on `parent` and break
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        "dk.brics.javascriptSlicer.unreachable";
                                        outerCache[type] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }
                            } else {
                                "dk.brics.javascriptSlicer.unreachable";
                                if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    diff = cache[1];
                                } else {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    // Use the same loop as above to seek `elem` from the start
                                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                        "dk.brics.javascriptSlicer.unreachable";
                                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            // Cache the index of each encountered element
                                            if (useCache) {
                                                "dk.brics.javascriptSlicer.unreachable";
                                                (node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ];
                                            }
                                            if (node === elem) {
                                                "dk.brics.javascriptSlicer.unreachable";
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    if (fn[expando]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return fn(argument);
                    }
                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        "dk.brics.javascriptSlicer.unreachable";
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            "dk.brics.javascriptSlicer.unreachable";
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                "dk.brics.javascriptSlicer.unreachable";
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                not: markFunction(function(selector) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        "dk.brics.javascriptSlicer.unreachable";
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        // Match elements unmatched by `matcher`
                        while (i--) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (elem = unmatched[i]) {
                                "dk.brics.javascriptSlicer.unreachable";
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function(elem, context, xml) {
                        "dk.brics.javascriptSlicer.unreachable";
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return function(elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return function(elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                lang: markFunction(function(lang) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) {
                        "dk.brics.javascriptSlicer.unreachable";
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        var elemLang;
                        do {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                "dk.brics.javascriptSlicer.unreachable";
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                // Miscellaneous
                target: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return elem === docElem;
                },
                focus: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                enabled: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return elem.disabled === false;
                },
                disabled: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return elem.disabled === true;
                },
                checked: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if (elem.parentNode) {
                        "dk.brics.javascriptSlicer.unreachable";
                        elem.parentNode.selectedIndex;
                    }
                    return elem.selected === true;
                },
                // Contents
                empty: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
                    //   not comment, processing instructions, or others
                    // Thanks to Diego Perini for the nodeName shortcut
                    //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return !Expr.pseudos["empty"](elem);
                },
                // Element/input types
                header: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var attr;
                    // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
                    // use getAttribute instead to test this case
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
                },
                // Position-in-collection
                first: createPositionalPseudo(function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var i = 0;
                    for (;i < length; i += 2) {
                        "dk.brics.javascriptSlicer.unreachable";
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var i = 1;
                    for (;i < length; i += 2) {
                        "dk.brics.javascriptSlicer.unreachable";
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var i = argument < 0 ? argument + length : argument;
                    for (;--i >= 0; ) {
                        "dk.brics.javascriptSlicer.unreachable";
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var i = argument < 0 ? argument + length : argument;
                    for (;++i < length; ) {
                        "dk.brics.javascriptSlicer.unreachable";
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };
        // Add button/input type pseudos
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        function tokenize(selector, parseOnly) {
            "dk.brics.javascriptSlicer.unreachable";
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                "dk.brics.javascriptSlicer.unreachable";
                return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                "dk.brics.javascriptSlicer.unreachable";
                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (match) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Don't consume trailing commas as valid
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                matched = false;
                // Combinators
                if (match = rcombinators.exec(soFar)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                for (type in Expr.filter) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        "dk.brics.javascriptSlicer.unreachable";
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }
                if (!matched) {
                    "dk.brics.javascriptSlicer.unreachable";
                    break;
                }
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
            tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
            "dk.brics.javascriptSlicer.unreachable";
            var i = 0, len = tokens.length, selector = "";
            for (;i < len; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                selector += tokens[i].value;
            }
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            "dk.brics.javascriptSlicer.unreachable";
            var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
            return combinator.first ? // Check against closest ancestor/preceding element
            function(elem, context, xml) {
                "dk.brics.javascriptSlicer.unreachable";
                while (elem = elem[dir]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (elem.nodeType === 1 || checkNonElements) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return matcher(elem, context, xml);
                    }
                }
            } : // Check against all ancestor/preceding elements
            function(elem, context, xml) {
                "dk.brics.javascriptSlicer.unreachable";
                var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
                if (xml) {
                    "dk.brics.javascriptSlicer.unreachable";
                    while (elem = elem[dir]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (elem.nodeType === 1 || checkNonElements) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (matcher(elem, context, xml)) {
                                "dk.brics.javascriptSlicer.unreachable";
                                return true;
                            }
                        }
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    while (elem = elem[dir]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (elem.nodeType === 1 || checkNonElements) {
                            "dk.brics.javascriptSlicer.unreachable";
                            outerCache = elem[expando] || (elem[expando] = {});
                            if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                                "dk.brics.javascriptSlicer.unreachable";
                                if ((data = cache[1]) === true || data === cachedruns) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    return data === true;
                                }
                            } else {
                                "dk.brics.javascriptSlicer.unreachable";
                                cache = outerCache[dir] = [ dirkey ];
                                cache[1] = matcher(elem, context, xml) || cachedruns;
                                if (cache[1] === true) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            "dk.brics.javascriptSlicer.unreachable";
            return matchers.length > 1 ? function(elem, context, xml) {
                "dk.brics.javascriptSlicer.unreachable";
                var i = matchers.length;
                while (i--) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!matchers[i](elem, context, xml)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        function condense(unmatched, map, filter, context, xml) {
            "dk.brics.javascriptSlicer.unreachable";
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (;i < len; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                if (elem = unmatched[i]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!filter || filter(elem, context, xml)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        newUnmatched.push(elem);
                        if (mapped) {
                            "dk.brics.javascriptSlicer.unreachable";
                            map.push(i);
                        }
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            "dk.brics.javascriptSlicer.unreachable";
            if (postFilter && !postFilter[expando]) {
                "dk.brics.javascriptSlicer.unreachable";
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                "dk.brics.javascriptSlicer.unreachable";
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
                "dk.brics.javascriptSlicer.unreachable";
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                [] : // ...otherwise use results directly
                results : matcherIn;
                // Find primary matches
                if (matcher) {
                    "dk.brics.javascriptSlicer.unreachable";
                    matcher(matcherIn, matcherOut, context, xml);
                }
                // Apply postFilter
                if (postFilter) {
                    "dk.brics.javascriptSlicer.unreachable";
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while (i--) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (elem = temp[i]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                if (seed) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (postFinder || preFilter) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (postFinder) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                "dk.brics.javascriptSlicer.unreachable";
                                if (elem = matcherOut[i]) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    // Restore matcherIn since elem is not yet a final match
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while (i--) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                "dk.brics.javascriptSlicer.unreachable";
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        "dk.brics.javascriptSlicer.unreachable";
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        function matcherFromTokens(tokens) {
            "dk.brics.javascriptSlicer.unreachable";
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                "dk.brics.javascriptSlicer.unreachable";
                return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            } ];
            for (;i < len; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                if (matcher = Expr.relative[tokens[i].type]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    // Return special upon seeing a positional matcher
                    if (matcher[expando]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Find the next relative operator (if any) for proper handling
                        j = ++i;
                        for (;j < len; j++) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (Expr.relative[tokens[j].type]) {
                                "dk.brics.javascriptSlicer.unreachable";
                                break;
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                }
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            "dk.brics.javascriptSlicer.unreachable";
            // A counter to specify which element is currently being matched
            var matcherCachedRuns = 0, bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, expandContext) {
                "dk.brics.javascriptSlicer.unreachable";
                var elem, j, matcher, setMatched = [], matchedCount = 0, i = "0", unmatched = seed && [], outermost = expandContext != null, contextBackup = outermostContext, // We must always have either seed elements or context
                elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
                if (outermost) {
                    "dk.brics.javascriptSlicer.unreachable";
                    outermostContext = context !== document && context;
                    cachedruns = matcherCachedRuns;
                }
                // Add elements passing elementMatchers directly to results
                // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
                for (;(elem = elems[i]) != null; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (byElement && elem) {
                        "dk.brics.javascriptSlicer.unreachable";
                        j = 0;
                        while (matcher = elementMatchers[j++]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (matcher(elem, context, xml)) {
                                "dk.brics.javascriptSlicer.unreachable";
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            "dk.brics.javascriptSlicer.unreachable";
                            dirruns = dirrunsUnique;
                            cachedruns = ++matcherCachedRuns;
                        }
                    }
                    // Track unmatched elements for set filters
                    if (bySet) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // They will have gone through all possible matchers
                        if (elem = !matcher && elem) {
                            "dk.brics.javascriptSlicer.unreachable";
                            matchedCount--;
                        }
                        // Lengthen the array for every element, matched or not
                        if (seed) {
                            "dk.brics.javascriptSlicer.unreachable";
                            unmatched.push(elem);
                        }
                    }
                }
                // Apply set filters to unmatched elements
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    "dk.brics.javascriptSlicer.unreachable";
                    j = 0;
                    while (matcher = setMatchers[j++]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        matcher(unmatched, setMatched, context, xml);
                    }
                    if (seed) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            "dk.brics.javascriptSlicer.unreachable";
                            while (i--) {
                                "dk.brics.javascriptSlicer.unreachable";
                                if (!(unmatched[i] || setMatched[i])) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    push.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        "dk.brics.javascriptSlicer.unreachable";
                        Sizzle.uniqueSort(results);
                    }
                }
                // Override manipulation of globals by nested matchers
                if (outermost) {
                    "dk.brics.javascriptSlicer.unreachable";
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, group) {
            "dk.brics.javascriptSlicer.unreachable";
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                "dk.brics.javascriptSlicer.unreachable";
                // Generate a function of recursive functions that can be used to check each element
                if (!group) {
                    "dk.brics.javascriptSlicer.unreachable";
                    group = tokenize(selector);
                }
                i = group.length;
                while (i--) {
                    "dk.brics.javascriptSlicer.unreachable";
                    cached = matcherFromTokens(group[i]);
                    if (cached[expando]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        setMatchers.push(cached);
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        elementMatchers.push(cached);
                    }
                }
                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            }
            return cached;
        };
        function multipleContexts(selector, contexts, results) {
            "dk.brics.javascriptSlicer.unreachable";
            var i = 0, len = contexts.length;
            for (;i < len; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        function select(selector, context, results, seed) {
            "dk.brics.javascriptSlicer.unreachable";
            var i, tokens, token, type, find, match = tokenize(selector);
            if (!seed) {
                "dk.brics.javascriptSlicer.unreachable";
                // Try to minimize operations if there is only one group
                if (match.length === 1) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Take a shortcut and set the context if the root selector is an ID
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return results;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    }
                    // Fetch a seed set for right-to-left matching
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        "dk.brics.javascriptSlicer.unreachable";
                        token = tokens[i];
                        // Abort if we hit a combinator
                        if (Expr.relative[type = token.type]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            break;
                        }
                        if (find = Expr.find[type]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // Search, expanding context for leading sibling combinators
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                                "dk.brics.javascriptSlicer.unreachable";
                                // If seed is empty or no tokens remain, we can return early
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            // Compile and execute a filtering function
            // Provide `match` to avoid retokenization if we modified the selector above
            compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector));
            return results;
        }
        // Deprecated
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        // Easy API for creating new setFilters
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        // One-time assignments
        // Sort stability
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Initialize against the default document
        setDocument();
        // Support: Chrome<<14
        // Always assume duplicates if they aren't passed to the comparison function
        [ 0, 0 ].sort(sortOrder);
        support.detectDuplicates = hasDuplicate;
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
    })(window);
    // String to Object options format cache
    var optionsCache = {};
    // Convert String-formatted options into Object-formatted ones and store in cache
    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
    jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var // Flag to know if list is currently firing
        firing, // Last fire value (for non-forgettable lists)
        memory, // Flag to know if list was already fired
        fired, // End of the loop when firing
        firingLength, // Index of currently firing callback (modified by remove if needed)
        firingIndex, // First callback to fire (used internally by add and fireWith)
        firingStart, // Actual callback list
        list = [], // Stack of fire calls for repeatable lists
        stack = !options.once && [], // Fire callbacks
        fire = function(data) {
            memory = options.memory && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for (;list && firingIndex < firingLength; firingIndex++) {
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    "dk.brics.javascriptSlicer.unreachable";
                    memory = false;
                    // To prevent further calls using add
                    break;
                }
            }
            firing = false;
            if (list) {
                if (stack) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (stack.length) {
                        "dk.brics.javascriptSlicer.unreachable";
                        fire(stack.shift());
                    }
                } else {
                    if (memory) {
                        list = [];
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        self.disable();
                    }
                }
            }
        }, // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (list) {
                    // First, we save the current length
                    var start = list.length;
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            if (type === "function") {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else {
                                "dk.brics.javascriptSlicer.unreachable";
                                if (arg && arg.length && type !== "string") {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    // Inspect recursively
                                    add(arg);
                                }
                            }
                        });
                    })(arguments);
                    // Do we need to add the callbacks to the
                    // current firing batch?
                    if (firing) {
                        "dk.brics.javascriptSlicer.unreachable";
                        firingLength = list.length;
                    } else {
                        if (memory) {
                            "dk.brics.javascriptSlicer.unreachable";
                            firingStart = start;
                            fire(memory);
                        }
                    }
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                "dk.brics.javascriptSlicer.unreachable";
                if (list) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.each(arguments, function(_, arg) {
                        "dk.brics.javascriptSlicer.unreachable";
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            "dk.brics.javascriptSlicer.unreachable";
                            list.splice(index, 1);
                            // Handle firing indexes
                            if (firing) {
                                "dk.brics.javascriptSlicer.unreachable";
                                if (index <= firingLength) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    firingLength--;
                                }
                                if (index <= firingIndex) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
                "dk.brics.javascriptSlicer.unreachable";
                return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
            },
            // Remove all callbacks from the list
            empty: function() {
                "dk.brics.javascriptSlicer.unreachable";
                list = [];
                firingLength = 0;
                return this;
            },
            // Have the list do nothing anymore
            disable: function() {
                list = stack = memory = undefined;
                return this;
            },
            // Is it disabled?
            disabled: function() {
                "dk.brics.javascriptSlicer.unreachable";
                return !list;
            },
            // Lock the list in its current state
            lock: function() {
                stack = undefined;
                if (!memory) {
                    self.disable();
                }
                return this;
            },
            // Is it locked?
            locked: function() {
                "dk.brics.javascriptSlicer.unreachable";
                return !stack;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
                args = args || [];
                args = [ context, args.slice ? args.slice() : args ];
                if (list && (!fired || stack)) {
                    if (firing) {
                        "dk.brics.javascriptSlicer.unreachable";
                        stack.push(args);
                    } else {
                        fire(args);
                    }
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                "dk.brics.javascriptSlicer.unreachable";
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                "dk.brics.javascriptSlicer.unreachable";
                return !!fired;
            }
        };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [ // action, add listener, listener list, final state
            [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    return state;
                },
                always: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.each(tuples, function(i, tuple) {
                            "dk.brics.javascriptSlicer.unreachable";
                            var action = tuple[0], fn = jQuery.isFunction(fns[i]) && fns[i];
                            // deferred[ done | fail | progress ] for forwarding actions to newDefer
                            deferred[tuple[1]](function() {
                                "dk.brics.javascriptSlicer.unreachable";
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                } else {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                }
                            });
                        });
                        fns = null;
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            // Keep pipe for back-compat
            promise.pipe = promise.then;
            // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                // promise[ done | fail | progress ] = list.add
                promise[tuple[1]] = list.add;
                // Handle state
                if (stateString) {
                    list.add(function() {
                        // state = [ resolved | rejected ]
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                // deferred[ resolve | reject | notify ]
                deferred[tuple[0]] = function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            promise.promise(deferred);
            // Call given func if any
            if (func) {
                "dk.brics.javascriptSlicer.unreachable";
                func.call(deferred, deferred);
            }
            // All done!
            return deferred;
        },
        // Deferred helper
        when: function(subordinate) {
            "dk.brics.javascriptSlicer.unreachable";
            var i = 0, resolveValues = core_slice.call(arguments), length = resolveValues.length, // the count of uncompleted subordinates
            remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
            deferred = remaining === 1 ? subordinate : jQuery.Deferred(), // Update function for both resolve and progress values
            updateFunc = function(i, contexts, values) {
                "dk.brics.javascriptSlicer.unreachable";
                return function(value) {
                    "dk.brics.javascriptSlicer.unreachable";
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                    if (values === progressValues) {
                        "dk.brics.javascriptSlicer.unreachable";
                        deferred.notifyWith(contexts, values);
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (!--remaining) {
                            "dk.brics.javascriptSlicer.unreachable";
                            deferred.resolveWith(contexts, values);
                        }
                    }
                };
            }, progressValues, progressContexts, resolveContexts;
            // add listeners to Deferred subordinates; treat others as resolved
            if (length > 1) {
                "dk.brics.javascriptSlicer.unreachable";
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (;i < length; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        --remaining;
                    }
                }
            }
            // if we're not waiting on anything, resolve the master
            if (!remaining) {
                "dk.brics.javascriptSlicer.unreachable";
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    jQuery.support = function(support) {
        var all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
        // Setup
        div.setAttribute("className", "t");
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        // Finish early in limited (non-browser) environments
        all = div.getElementsByTagName("*") || [];
        a = div.getElementsByTagName("a")[0];
        if (!a || !a.style || !all.length) {
            "dk.brics.javascriptSlicer.unreachable";
            return support;
        }
        // First batch of tests
        select = document.createElement("select");
        opt = select.appendChild(document.createElement("option"));
        input = div.getElementsByTagName("input")[0];
        a.style.cssText = "top:1px;float:left;opacity:.5";
        // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
        support.getSetAttribute = div.className !== "t";
        // IE strips leading whitespace when .innerHTML is used
        support.leadingWhitespace = div.firstChild.nodeType === 3;
        // Make sure that tbody elements aren't automatically inserted
        // IE will insert them into empty tables
        support.tbody = !div.getElementsByTagName("tbody").length;
        // Make sure that link elements get serialized correctly by innerHTML
        // This requires a wrapper element in IE
        support.htmlSerialize = !!div.getElementsByTagName("link").length;
        // Get the style information from getAttribute
        // (IE uses .cssText instead)
        support.style = /top/.test(a.getAttribute("style"));
        // Make sure that URLs aren't manipulated
        // (IE normalizes it by default)
        support.hrefNormalized = a.getAttribute("href") === "/a";
        // Make sure that element opacity exists
        // (IE uses filter instead)
        // Use a regex to work around a WebKit issue. See #5145
        support.opacity = /^0.5/.test(a.style.opacity);
        // Verify style float existence
        // (IE uses styleFloat instead of cssFloat)
        support.cssFloat = !!a.style.cssFloat;
        // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
        support.checkOn = !!input.value;
        // Make sure that a selected-by-default option has a working selected property.
        // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
        support.optSelected = opt.selected;
        // Tests for enctype support on a form (#6743)
        support.enctype = !!document.createElement("form").enctype;
        // Makes sure cloning an html5 element does not cause problems
        // Where outerHTML is undefined, this still works
        support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        // Will be defined later
        support.inlineBlockNeedsLayout = false;
        support.shrinkWrapBlocks = false;
        support.pixelPosition = false;
        support.deleteExpando = true;
        support.noCloneEvent = true;
        support.reliableMarginRight = true;
        support.boxSizingReliable = true;
        // Make sure checked status is properly cloned
        input.checked = true;
        support.noCloneChecked = input.cloneNode(true).checked;
        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as disabled)
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        // Support: IE<9
        try {
            delete div.test;
        } catch (e) {
            "dk.brics.javascriptSlicer.unreachable";
            support.deleteExpando = false;
        }
        // Check if we can trust getAttribute("value")
        input = document.createElement("input");
        input.setAttribute("value", "");
        support.input = input.getAttribute("value") === "";
        // Check if an input maintains its value after becoming a radio
        input.value = "t";
        input.setAttribute("type", "radio");
        support.radioValue = input.value === "t";
        // #11217 - WebKit loses check when the name is after the checked attribute
        input.setAttribute("checked", "t");
        input.setAttribute("name", "t");
        fragment = document.createDocumentFragment();
        fragment.appendChild(input);
        // Check if a disconnected checkbox will retain its checked
        // value of true after appended to the DOM (IE6/7)
        support.appendChecked = input.checked;
        // WebKit doesn't clone checked state correctly in fragments
        support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE<9
        // Opera does not clone events (and typeof div.attachEvent === undefined).
        // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
        if (div.attachEvent) {
            "dk.brics.javascriptSlicer.unreachable";
            div.attachEvent("onclick", function() {
                "dk.brics.javascriptSlicer.unreachable";
                support.noCloneEvent = false;
            });
            div.cloneNode(true).click();
        }
        // Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
        // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
        for (i in {
            submit: true,
            change: true,
            focusin: true
        }) {
            div.setAttribute(eventName = "on" + i, "t");
            support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        // Support: IE<9
        // Iteration over object's inherited properties before its own.
/* TAJS bugfix: break in for-in.         for (i in jQuery(support)) {
            break;
        }
        support.ownLast = i !== "0";*/ jQuery(support); support.ownLast = false;
        // Run tests that need a body at doc ready
        jQuery(function() {
            var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", body = document.getElementsByTagName("body")[0];
            if (!body) {
                "dk.brics.javascriptSlicer.unreachable";
                // Return for frameset docs that don't have a body
                return;
            }
            container = document.createElement("div");
            container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            body.appendChild(container).appendChild(div);
            // Support: IE8
            // Check if table cells still have offsetWidth/Height when they are set
            // to display:none and there are still other visible table cells in a
            // table row; if so, offsetWidth/Height are not reliable for use when
            // determining if an element has been hidden directly using
            // display:none (it is still safe to use offsets if a parent element is
            // hidden; don safety goggles and see bug #4512 for more information).
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            tds = div.getElementsByTagName("td");
            tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            isSupported = tds[0].offsetHeight === 0;
            tds[0].style.display = "";
            tds[1].style.display = "none";
            // Support: IE8
            // Check if empty table cells still have offsetWidth/Height
            support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
            // Check box-sizing and margin behavior.
            div.innerHTML = "";
            div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            // Workaround failing boxSizing test due to offsetWidth returning wrong value
            // with some non-1 values of body zoom, ticket #13543
            jQuery.swap(body, body.style.zoom != null ? {
                zoom: 1
            } : {}, function() {
                support.boxSizing = div.offsetWidth === 4;
            });
            // Use window.getComputedStyle because jsdom on node.js will break without it.
            if (window.getComputedStyle) {
                support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                    width: "4px"
                }).width === "4px";
                // Check if div with explicit width and no margin-right incorrectly
                // gets computed margin-right based on width of container. (#3333)
                // Fails in WebKit before Feb 2011 nightlies
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                marginDiv = div.appendChild(document.createElement("div"));
                marginDiv.style.cssText = div.style.cssText = divReset;
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
            }
            if (typeof div.style.zoom !== core_strundefined) {
                // Support: IE<8
                // Check if natively block-level elements act like inline-block
                // elements when setting their display to 'inline' and giving
                // them layout
                div.innerHTML = "";
                div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                // Support: IE6
                // Check if elements with layout shrink-wrap their children
                div.style.display = "block";
                div.innerHTML = "<div></div>";
                div.firstChild.style.width = "5px";
                support.shrinkWrapBlocks = div.offsetWidth !== 3;
                if (support.inlineBlockNeedsLayout) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Prevent IE 6 from affecting layout for positioned elements #11048
                    // Prevent IE from shrinking the body in IE 7 mode #12869
                    // Support: IE<8
                    body.style.zoom = 1;
                }
            }
            body.removeChild(container);
            // Null elements to avoid leaks in IE
            container = div = tds = marginDiv = null;
        });
        // Null elements to avoid leaks in IE
        all = select = fragment = opt = a = input = null;
        return support;
    }({});
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
    function internalData(elem, name, data, pvt) {
        if (!jQuery.acceptData(elem)) {
            "dk.brics.javascriptSlicer.unreachable";
            return;
        }
        var ret, thisCache, internalKey = jQuery.expando, // We have to handle DOM nodes and JS objects differently because IE6-7
        // can't GC object references properly across the DOM-JS boundary
        isNode = elem.nodeType, // Only DOM nodes need the global jQuery cache; JS object data is
        // attached directly to the object so GC can occur automatically
        cache = isNode ? jQuery.cache : elem, // Only defining an ID for JS objects if its cache already exists allows
        // the code to shortcut on the same path as a DOM node with no cache
        id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        // Avoid doing any more work than we need to when trying to get data on an
        // object that has no data at all
        if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
            return;
        }
        "dk.brics.javascriptSlicer.unreachable";
        if (!id) {
            "dk.brics.javascriptSlicer.unreachable";
            // Only DOM nodes need a new unique ID for each element since their data
            // ends up in the global cache
            if (isNode) {
                "dk.brics.javascriptSlicer.unreachable";
                id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++;
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                id = internalKey;
            }
        }
        if (!cache[id]) {
            "dk.brics.javascriptSlicer.unreachable";
            // Avoid exposing jQuery metadata on plain JS objects when the object
            // is serialized using JSON.stringify
            cache[id] = isNode ? {} : {
                toJSON: jQuery.noop
            };
        }
        // An object can be passed to jQuery.data instead of a key/value pair; this gets
        // shallow copied over onto the existing cache
        if (typeof name === "object" || typeof name === "function") {
            "dk.brics.javascriptSlicer.unreachable";
            if (pvt) {
                "dk.brics.javascriptSlicer.unreachable";
                cache[id] = jQuery.extend(cache[id], name);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                cache[id].data = jQuery.extend(cache[id].data, name);
            }
        }
        thisCache = cache[id];
        // jQuery data() is stored in a separate object inside the object's internal data
        // cache in order to avoid key collisions between internal data and user-defined
        // data.
        if (!pvt) {
            "dk.brics.javascriptSlicer.unreachable";
            if (!thisCache.data) {
                "dk.brics.javascriptSlicer.unreachable";
                thisCache.data = {};
            }
            thisCache = thisCache.data;
        }
        if (data !== undefined) {
            "dk.brics.javascriptSlicer.unreachable";
            thisCache[jQuery.camelCase(name)] = data;
        }
        // Check for both converted-to-camel and non-converted data property names
        // If a data property was specified
        if (typeof name === "string") {
            "dk.brics.javascriptSlicer.unreachable";
            // First Try to find as-is property data
            ret = thisCache[name];
            // Test for null|undefined property data
            if (ret == null) {
                "dk.brics.javascriptSlicer.unreachable";
                // Try to find the camelCased property
                ret = thisCache[jQuery.camelCase(name)];
            }
        } else {
            "dk.brics.javascriptSlicer.unreachable";
            ret = thisCache;
        }
        return ret;
    }
    function internalRemoveData(elem, name, pvt) {
        "dk.brics.javascriptSlicer.unreachable";
        if (!jQuery.acceptData(elem)) {
            "dk.brics.javascriptSlicer.unreachable";
            return;
        }
        var thisCache, i, isNode = elem.nodeType, // See jQuery.data for more information
        cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
        // If there is already no cache entry for this object, there is no
        // purpose in continuing
        if (!cache[id]) {
            "dk.brics.javascriptSlicer.unreachable";
            return;
        }
        if (name) {
            "dk.brics.javascriptSlicer.unreachable";
            thisCache = pvt ? cache[id] : cache[id].data;
            if (thisCache) {
                "dk.brics.javascriptSlicer.unreachable";
                // Support array or space separated string names for data keys
                if (!jQuery.isArray(name)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // try the string as a key before any manipulation
                    if (name in thisCache) {
                        "dk.brics.javascriptSlicer.unreachable";
                        name = [ name ];
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        // split the camel cased version by spaces unless a key with the spaces exists
                        name = jQuery.camelCase(name);
                        if (name in thisCache) {
                            "dk.brics.javascriptSlicer.unreachable";
                            name = [ name ];
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            name = name.split(" ");
                        }
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    // If "name" is an array of keys...
                    // When data is initially created, via ("key", "val") signature,
                    // keys will be converted to camelCase.
                    // Since there is no way to tell _how_ a key was added, remove
                    // both plain key and camelCase key. #12786
                    // This will only penalize the array argument path.
                    name = name.concat(jQuery.map(name, jQuery.camelCase));
                }
                i = name.length;
                while (i--) {
                    "dk.brics.javascriptSlicer.unreachable";
                    delete thisCache[name[i]];
                }
                // If there is no data left in the cache, we want to continue
                // and let the cache object itself get destroyed
                if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return;
                }
            }
        }
        // See jQuery.data for more information
        if (!pvt) {
            "dk.brics.javascriptSlicer.unreachable";
            delete cache[id].data;
            // Don't destroy the parent cache unless the internal data object
            // had been the only thing left in it
            if (!isEmptyDataObject(cache[id])) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
        }
        // Destroy the cache
        if (isNode) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.cleanData([ elem ], true);
        } else {
            "dk.brics.javascriptSlicer.unreachable";
            if (jQuery.support.deleteExpando || cache != cache.window) {
                "dk.brics.javascriptSlicer.unreachable";
                /* jshint eqeqeq: true */
                delete cache[id];
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                cache[id] = null;
            }
        }
    }
    jQuery.extend({
        cache: {},
        // The following elements throw uncatchable exceptions if you
        // attempt to add expando properties to them.
        noData: {
            applet: true,
            embed: true,
            // Ban all objects except for Flash (which handle expandos)
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(elem) {
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
            return !!elem && !isEmptyDataObject(elem);
        },
        data: function(elem, name, data) {
            "dk.brics.javascriptSlicer.unreachable";
            return internalData(elem, name, data);
        },
        removeData: function(elem, name) {
            "dk.brics.javascriptSlicer.unreachable";
            return internalRemoveData(elem, name);
        },
        // For internal use only.
        _data: function(elem, name, data) {
            return internalData(elem, name, data, true);
        },
        _removeData: function(elem, name) {
            "dk.brics.javascriptSlicer.unreachable";
            return internalRemoveData(elem, name, true);
        },
        // A method for determining if a DOM node can handle the data expando
        acceptData: function(elem) {
            // Do not set data on non-element because it will not be cleared (#8335).
            if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
                "dk.brics.javascriptSlicer.unreachable";
                return false;
            }
            var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
            // nodes accept data unless otherwise specified; rejection can be conditional
            return !noData || noData !== true && elem.getAttribute("classid") === noData;
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            "dk.brics.javascriptSlicer.unreachable";
            var attrs, name, data = null, i = 0, elem = this[0];
            // Special expections of .data basically thwart jQuery.access,
            // so implement the relevant behavior ourselves
            // Gets all values
            if (key === undefined) {
                "dk.brics.javascriptSlicer.unreachable";
                if (this.length) {
                    "dk.brics.javascriptSlicer.unreachable";
                    data = jQuery.data(elem);
                    if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                        "dk.brics.javascriptSlicer.unreachable";
                        attrs = elem.attributes;
                        for (;i < attrs.length; i++) {
                            "dk.brics.javascriptSlicer.unreachable";
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                "dk.brics.javascriptSlicer.unreachable";
                                name = jQuery.camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        jQuery._data(elem, "parsedAttrs", true);
                    }
                }
                return data;
            }
            // Sets multiple values
            if (typeof key === "object") {
                "dk.brics.javascriptSlicer.unreachable";
                return this.each(function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.data(this, key);
                });
            }
            return arguments.length > 1 ? // Sets one value
            this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.data(this, key, value);
            }) : // Gets one value
            // Try to fetch any internally stored data first
            elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
        },
        removeData: function(key) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.removeData(this, key);
            });
        }
    });
    function dataAttr(elem, key, data) {
        "dk.brics.javascriptSlicer.unreachable";
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            "dk.brics.javascriptSlicer.unreachable";
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                "dk.brics.javascriptSlicer.unreachable";
                try {
                    "dk.brics.javascriptSlicer.unreachable";
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : // Only convert to a number if it doesn't change the string
                    +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                // Make sure we set the data so it isn't changed later
                jQuery.data(elem, key, data);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                data = undefined;
            }
        }
        return data;
    }
    // checks a cache object for emptiness
    function isEmptyDataObject(obj) {
        "dk.brics.javascriptSlicer.unreachable";
        var name;
        for (name in obj) {
            "dk.brics.javascriptSlicer.unreachable";
            // if the public data object is empty, the private is still empty
            if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                "dk.brics.javascriptSlicer.unreachable";
                continue;
            }
            if (name !== "toJSON") {
                "dk.brics.javascriptSlicer.unreachable";
                return false;
            }
        }
        return true;
    }
    jQuery.extend({
        queue: function(elem, type, data) {
            "dk.brics.javascriptSlicer.unreachable";
            var queue;
            if (elem) {
                "dk.brics.javascriptSlicer.unreachable";
                type = (type || "fx") + "queue";
                queue = jQuery._data(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!queue || jQuery.isArray(data)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        queue = jQuery._data(elem, type, jQuery.makeArray(data));
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            "dk.brics.javascriptSlicer.unreachable";
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                "dk.brics.javascriptSlicer.unreachable";
                fn = queue.shift();
                startLength--;
            }
            hooks.cur = fn;
            if (fn) {
                "dk.brics.javascriptSlicer.unreachable";
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") {
                    "dk.brics.javascriptSlicer.unreachable";
                    queue.unshift("inprogress");
                }
                // clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                "dk.brics.javascriptSlicer.unreachable";
                hooks.empty.fire();
            }
        },
        // not intended for public consumption - generates a queueHooks object, or returns the current one
        _queueHooks: function(elem, type) {
            "dk.brics.javascriptSlicer.unreachable";
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery._removeData(elem, type + "queue");
                    jQuery._removeData(elem, key);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            "dk.brics.javascriptSlicer.unreachable";
            var setter = 2;
            if (typeof type !== "string") {
                "dk.brics.javascriptSlicer.unreachable";
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                "dk.brics.javascriptSlicer.unreachable";
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                var queue = jQuery.queue(this, type, data);
                // ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.dequeue(this, type);
            });
        },
        // Based off of the plugin by Clint Helfers, with permission.
        // http://blindsignals.com/index.php/2009/07/jquery-delay/
        delay: function(time, type) {
            "dk.brics.javascriptSlicer.unreachable";
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                "dk.brics.javascriptSlicer.unreachable";
                var timeout = setTimeout(next, time);
                hooks.stop = function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    clearTimeout(timeout);
                };
            });
        },
        clearQueue: function(type) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
            "dk.brics.javascriptSlicer.unreachable";
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                "dk.brics.javascriptSlicer.unreachable";
                if (!--count) {
                    "dk.brics.javascriptSlicer.unreachable";
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            if (typeof type !== "string") {
                "dk.brics.javascriptSlicer.unreachable";
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                "dk.brics.javascriptSlicer.unreachable";
                tmp = jQuery._data(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    "dk.brics.javascriptSlicer.unreachable";
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var nodeHook, boolHook, rclass = /[\t\r\n\f]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = jQuery.support.getSetAttribute, getSetInput = jQuery.support.input;
    jQuery.fn.extend({
        attr: function(name, value) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.removeAttr(this, name);
            });
        },
        prop: function(name, value) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            "dk.brics.javascriptSlicer.unreachable";
            name = jQuery.propFix[name] || name;
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                // try/catch handles cases where IE balks (such as removing a property on window)
                try {
                    "dk.brics.javascriptSlicer.unreachable";
                    this[name] = undefined;
                    delete this[name];
                } catch (e) {}
            });
        },
        addClass: function(value) {
            "dk.brics.javascriptSlicer.unreachable";
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                "dk.brics.javascriptSlicer.unreachable";
                return this.each(function(j) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                "dk.brics.javascriptSlicer.unreachable";
                // The disjunction here is for better compressibility (see removeClass)
                classes = (value || "").match(core_rnotwhite) || [];
                for (;i < len; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                    if (cur) {
                        "dk.brics.javascriptSlicer.unreachable";
                        j = 0;
                        while (clazz = classes[j++]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                "dk.brics.javascriptSlicer.unreachable";
                                cur += clazz + " ";
                            }
                        }
                        elem.className = jQuery.trim(cur);
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            "dk.brics.javascriptSlicer.unreachable";
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                "dk.brics.javascriptSlicer.unreachable";
                return this.each(function(j) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                "dk.brics.javascriptSlicer.unreachable";
                classes = (value || "").match(core_rnotwhite) || [];
                for (;i < len; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    elem = this[i];
                    // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                    if (cur) {
                        "dk.brics.javascriptSlicer.unreachable";
                        j = 0;
                        while (clazz = classes[j++]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // Remove *all* instances
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                "dk.brics.javascriptSlicer.unreachable";
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        elem.className = value ? jQuery.trim(cur) : "";
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            "dk.brics.javascriptSlicer.unreachable";
            var type = typeof value, isBool = typeof stateVal === "boolean";
            if (jQuery.isFunction(value)) {
                "dk.brics.javascriptSlicer.unreachable";
                return this.each(function(i) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                if (type === "string") {
                    "dk.brics.javascriptSlicer.unreachable";
                    // toggle individual class names
                    var className, i = 0, self = jQuery(this), state = stateVal, classNames = value.match(core_rnotwhite) || [];
                    while (className = classNames[i++]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // check each className given, space separated list
                        state = isBool ? state : !self.hasClass(className);
                        self[state ? "addClass" : "removeClass"](className);
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (type === core_strundefined || type === "boolean") {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (this.className) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // store className if set
                            jQuery._data(this, "__className__", this.className);
                        }
                        // If the element has a class name or if we're passed "false",
                        // then remove the whole classname (if there was one, the above saved it).
                        // Otherwise bring back whatever was previously saved (if anything),
                        // falling back to the empty string if nothing was stored.
                        this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
                    }
                }
            });
        },
        hasClass: function(selector) {
            "dk.brics.javascriptSlicer.unreachable";
            var className = " " + selector + " ", i = 0, l = this.length;
            for (;i < l; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return true;
                }
            }
            return false;
        },
        val: function(value) {
            "dk.brics.javascriptSlicer.unreachable";
            var ret, hooks, isFunction, elem = this[0];
            if (!arguments.length) {
                "dk.brics.javascriptSlicer.unreachable";
                if (elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? // handle most common string cases
                    ret.replace(rreturn, "") : // handle cases where value is null/undef or number
                    ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                "dk.brics.javascriptSlicer.unreachable";
                var val;
                if (this.nodeType !== 1) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return;
                }
                if (isFunction) {
                    "dk.brics.javascriptSlicer.unreachable";
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    val = value;
                }
                // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                    "dk.brics.javascriptSlicer.unreachable";
                    val = "";
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (typeof val === "number") {
                        "dk.brics.javascriptSlicer.unreachable";
                        val += "";
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (jQuery.isArray(val)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            val = jQuery.map(val, function(value) {
                                "dk.brics.javascriptSlicer.unreachable";
                                return value == null ? "" : value + "";
                            });
                        }
                    }
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    "dk.brics.javascriptSlicer.unreachable";
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Use proper attribute retrieval(#6932, #12072)
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : elem.text;
                }
            },
            select: {
                get: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    // Loop through all the selected options
                    for (;i < max; i++) {
                        "dk.brics.javascriptSlicer.unreachable";
                        option = options[i];
                        // oldIE doesn't update selected after form reset (#2551)
                        if ((option.selected || i === index) && (// Don't return options that are disabled or in a disabled optgroup
                        jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // Get the specific value for the option
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            if (one) {
                                "dk.brics.javascriptSlicer.unreachable";
                                return value;
                            }
                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        "dk.brics.javascriptSlicer.unreachable";
                        option = options[i];
                        if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) {
                            "dk.brics.javascriptSlicer.unreachable";
                            optionSet = true;
                        }
                    }
                    // force browsers to behave consistently when non-matching value is set
                    if (!optionSet) {
                        "dk.brics.javascriptSlicer.unreachable";
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        },
        attr: function(elem, name, value) {
            "dk.brics.javascriptSlicer.unreachable";
            var hooks, ret, nType = elem.nodeType;
            // don't get/set attributes on text, comment and attribute nodes
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === core_strundefined) {
                "dk.brics.javascriptSlicer.unreachable";
                return jQuery.prop(elem, name, value);
            }
            // All attributes are lowercase
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                "dk.brics.javascriptSlicer.unreachable";
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            if (value !== undefined) {
                "dk.brics.javascriptSlicer.unreachable";
                if (value === null) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.removeAttr(elem, name);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return ret;
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        elem.setAttribute(name, value + "");
                        return value;
                    }
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return ret;
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    ret = jQuery.find.attr(elem, name);
                    // Non-existent attributes return null, we normalize to undefined
                    return ret == null ? undefined : ret;
                }
            }
        },
        removeAttr: function(elem, value) {
            "dk.brics.javascriptSlicer.unreachable";
            var name, propName, i = 0, attrNames = value && value.match(core_rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                "dk.brics.javascriptSlicer.unreachable";
                while (name = attrNames[i++]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    propName = jQuery.propFix[name] || name;
                    // Boolean attributes get special treatment (#10870)
                    if (jQuery.expr.match.bool.test(name)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Set corresponding property to false
                        if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            elem[propName] = false;
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
                        }
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.attr(elem, name, "");
                    }
                    elem.removeAttribute(getSetAttribute ? name : propName);
                }
            }
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Setting the type on a radio button after the value resets the value in IE6-9
                        // Reset value to default in case type is set after value during creation
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            "dk.brics.javascriptSlicer.unreachable";
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(elem, name, value) {
            "dk.brics.javascriptSlicer.unreachable";
            var ret, hooks, notxml, nType = elem.nodeType;
            // don't get/set properties on text, comment and attribute nodes
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                "dk.brics.javascriptSlicer.unreachable";
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                "dk.brics.javascriptSlicer.unreachable";
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
            }
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                }
            }
        }
    });
    // Hooks for boolean attributes
    boolHook = {
        set: function(elem, value, name) {
            "dk.brics.javascriptSlicer.unreachable";
            if (value === false) {
                "dk.brics.javascriptSlicer.unreachable";
                // Remove boolean attributes when set to false
                jQuery.removeAttr(elem, name);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // IE<8 needs the *property* name
                    elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
                }
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
        jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) {
            "dk.brics.javascriptSlicer.unreachable";
            var fn = jQuery.expr.attrHandle[name], ret = isXML ? undefined : /* jshint eqeqeq: false */
            (jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
            jQuery.expr.attrHandle[name] = fn;
            return ret;
        } : function(elem, name, isXML) {
            "dk.brics.javascriptSlicer.unreachable";
            return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
        };
    });
    // fix oldIE attroperties
    if (!getSetInput || !getSetAttribute) {
        "dk.brics.javascriptSlicer.unreachable";
        jQuery.attrHooks.value = {
            set: function(elem, value, name) {
                "dk.brics.javascriptSlicer.unreachable";
                if (jQuery.nodeName(elem, "input")) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Does not return so that setAttribute is also used
                    elem.defaultValue = value;
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Use nodeHook if defined (#1954); otherwise setAttribute is fine
                    return nodeHook && nodeHook.set(elem, value, name);
                }
            }
        };
    }
    // IE6/7 do not support getting/setting some attributes with get/setAttribute
    if (!getSetAttribute) {
        "dk.brics.javascriptSlicer.unreachable";
        // Use this for any attribute in IE6/7
        // This fixes almost every IE6/7 issue
        nodeHook = {
            set: function(elem, value, name) {
                "dk.brics.javascriptSlicer.unreachable";
                // Set the existing or create a new attribute node
                var ret = elem.getAttributeNode(name);
                if (!ret) {
                    "dk.brics.javascriptSlicer.unreachable";
                    elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
                }
                ret.value = value += "";
                // Break association with cloned elements by also using setAttribute (#9646)
                return name === "value" || value === elem.getAttribute(name) ? value : undefined;
            }
        };
        jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = // Some attributes are constructed with empty-string values when not defined
        function(elem, name, isXML) {
            "dk.brics.javascriptSlicer.unreachable";
            var ret;
            return isXML ? undefined : (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
        };
        jQuery.valHooks.button = {
            get: function(elem, name) {
                "dk.brics.javascriptSlicer.unreachable";
                var ret = elem.getAttributeNode(name);
                return ret && ret.specified ? ret.value : undefined;
            },
            set: nodeHook.set
        };
        // Set contenteditable to false on removals(#10429)
        // Setting to empty string throws an error as an invalid value
        jQuery.attrHooks.contenteditable = {
            set: function(elem, value, name) {
                "dk.brics.javascriptSlicer.unreachable";
                nodeHook.set(elem, value === "" ? false : value, name);
            }
        };
        // Set width and height to auto instead of 0 on empty string( Bug #8150 )
        // This is for removals
        jQuery.each([ "width", "height" ], function(i, name) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.attrHooks[name] = {
                set: function(elem, value) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (value === "") {
                        "dk.brics.javascriptSlicer.unreachable";
                        elem.setAttribute(name, "auto");
                        return value;
                    }
                }
            };
        });
    }
    // Some attributes require a special call on IE
    // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if (!jQuery.support.hrefNormalized) {
        "dk.brics.javascriptSlicer.unreachable";
        // href/src property should get the full normalized URL (#10299/#12915)
        jQuery.each([ "href", "src" ], function(i, name) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.propHooks[name] = {
                get: function(elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return elem.getAttribute(name, 4);
                }
            };
        });
    }
    if (!jQuery.support.style) {
        "dk.brics.javascriptSlicer.unreachable";
        jQuery.attrHooks.style = {
            get: function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                // Return undefined in the case of empty string
                // Note: IE uppercases css property names, but if we were to .toLowerCase()
                // .cssText, that would destroy case senstitivity in URL's, like in "background"
                return elem.style.cssText || undefined;
            },
            set: function(elem, value) {
                "dk.brics.javascriptSlicer.unreachable";
                return elem.style.cssText = value + "";
            }
        };
    }
    // Safari mis-reports the default selected property of an option
    // Accessing the parent's selectedIndex property fixes it
    if (!jQuery.support.optSelected) {
        "dk.brics.javascriptSlicer.unreachable";
        jQuery.propHooks.selected = {
            get: function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                var parent = elem.parentNode;
                if (parent) {
                    "dk.brics.javascriptSlicer.unreachable";
                    parent.selectedIndex;
                    // Make sure that it also works with optgroups, see #5701
                    if (parent.parentNode) {
                        "dk.brics.javascriptSlicer.unreachable";
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        };
    }
    jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // IE6/7 call enctype encoding
    if (!jQuery.support.enctype) {
        "dk.brics.javascriptSlicer.unreachable";
        jQuery.propFix.enctype = "encoding";
    }
    // Radios and checkboxes getter/setter
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                "dk.brics.javascriptSlicer.unreachable";
                if (jQuery.isArray(value)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                }
            }
        };
        if (!jQuery.support.checkOn) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.valHooks[this].get = function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                // Support: Webkit
                // "" is returned instead of "on" if a value isn't specified
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });
    var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    function returnTrue() {
        "dk.brics.javascriptSlicer.unreachable";
        return true;
    }
    function returnFalse() {
        return false;
    }
    function safeActiveElement() {
        "dk.brics.javascriptSlicer.unreachable";
        try {
            "dk.brics.javascriptSlicer.unreachable";
            return document.activeElement;
        } catch (err) {}
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            "dk.brics.javascriptSlicer.unreachable";
            var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if (!elemData) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                "dk.brics.javascriptSlicer.unreachable";
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) {
                "dk.brics.javascriptSlicer.unreachable";
                handler.guid = jQuery.guid++;
            }
            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) {
                "dk.brics.javascriptSlicer.unreachable";
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                "dk.brics.javascriptSlicer.unreachable";
                eventHandle = elemData.handle = function(e) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
                };
                // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
                eventHandle.elem = elem;
            }
            // Handle multiple events separated by a space
            types = (types || "").match(core_rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                "dk.brics.javascriptSlicer.unreachable";
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!type) {
                    "dk.brics.javascriptSlicer.unreachable";
                    continue;
                }
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};
                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    "dk.brics.javascriptSlicer.unreachable";
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    // Only use addEventListener/attachEvent if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Bind the global event handler to the element
                        if (elem.addEventListener) {
                            "dk.brics.javascriptSlicer.unreachable";
                            elem.addEventListener(type, eventHandle, false);
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (elem.attachEvent) {
                                "dk.brics.javascriptSlicer.unreachable";
                                elem.attachEvent("on" + type, eventHandle);
                            }
                        }
                    }
                }
                if (special.add) {
                    "dk.brics.javascriptSlicer.unreachable";
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        "dk.brics.javascriptSlicer.unreachable";
                        handleObj.handler.guid = handler.guid;
                    }
                }
                // Add to the element's handler list, delegates in front
                if (selector) {
                    "dk.brics.javascriptSlicer.unreachable";
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    handlers.push(handleObj);
                }
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
            // Nullify elem to prevent memory leaks in IE
            elem = null;
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            "dk.brics.javascriptSlicer.unreachable";
            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(core_rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                "dk.brics.javascriptSlicer.unreachable";
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    "dk.brics.javascriptSlicer.unreachable";
                    for (type in events) {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                origCount = j = handlers.length;
                while (j--) {
                    "dk.brics.javascriptSlicer.unreachable";
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            "dk.brics.javascriptSlicer.unreachable";
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            "dk.brics.javascriptSlicer.unreachable";
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            // Remove the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) {
                "dk.brics.javascriptSlicer.unreachable";
                delete elemData.handle;
                // removeData also checks for emptiness and clears the expando if empty
                // so use it instead of delete
                jQuery._removeData(elem, "events");
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [ elem || document ], type = core_hasOwn.call(event, "type") ? event.type : event, namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            if (type.indexOf(".") >= 0) {
                "dk.brics.javascriptSlicer.unreachable";
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (;cur; cur = cur.parentNode) {
                    "dk.brics.javascriptSlicer.unreachable";
                    eventPath.push(cur);
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            // Fire handlers on the event path
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                // jQuery handler
                handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                if (handle) {
                    "dk.brics.javascriptSlicer.unreachable";
                    handle.apply(cur, data);
                }
                // Native handler
                handle = ontype && cur[ontype];
                if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                    "dk.brics.javascriptSlicer.unreachable";
                    event.preventDefault();
                }
            }
            event.type = type;
            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
                    // Call a native DOM method on the target with the same name name as the event.
                    // Can't use an .isFunction() check here because IE6/7 fails that test.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) {
                            "dk.brics.javascriptSlicer.unreachable";
                            elem[ontype] = null;
                        }
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        try {
                            "dk.brics.javascriptSlicer.unreachable";
                            elem[type]();
                        } catch (e) {}
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            "dk.brics.javascriptSlicer.unreachable";
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        },
        dispatch: function(event) {
            "dk.brics.javascriptSlicer.unreachable";
            // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(event);
            var i, ret, handleObj, matched, j, handlerQueue = [], args = core_slice.call(arguments), handlers = (jQuery._data(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                "dk.brics.javascriptSlicer.unreachable";
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Triggered event must either 1) have no namespace, or
                    // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if ((event.result = ret) === false) {
                                "dk.brics.javascriptSlicer.unreachable";
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) {
                "dk.brics.javascriptSlicer.unreachable";
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function(event, handlers) {
            "dk.brics.javascriptSlicer.unreachable";
            var sel, handleObj, matches, i, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            // Avoid non-left-click bubbling in Firefox (#3861)
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                "dk.brics.javascriptSlicer.unreachable";
                /* jshint eqeqeq: false */
                for (;cur != this; cur = cur.parentNode || this) {
                    "dk.brics.javascriptSlicer.unreachable";
                    /* jshint eqeqeq: true */
                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        "dk.brics.javascriptSlicer.unreachable";
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            "dk.brics.javascriptSlicer.unreachable";
                            handleObj = handlers[i];
                            // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                "dk.brics.javascriptSlicer.unreachable";
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            if (matches[sel]) {
                                "dk.brics.javascriptSlicer.unreachable";
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            "dk.brics.javascriptSlicer.unreachable";
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            // Add the remaining (directly-bound) handlers
            if (delegateCount < handlers.length) {
                "dk.brics.javascriptSlicer.unreachable";
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        fix: function(event) {
            "dk.brics.javascriptSlicer.unreachable";
            if (event[jQuery.expando]) {
                "dk.brics.javascriptSlicer.unreachable";
                return event;
            }
            // Create a writable copy of the event object and normalize some properties
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
                "dk.brics.javascriptSlicer.unreachable";
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                "dk.brics.javascriptSlicer.unreachable";
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            // Support: IE<9
            // Fix target property (#1925)
            if (!event.target) {
                "dk.brics.javascriptSlicer.unreachable";
                event.target = originalEvent.srcElement || document;
            }
            // Support: Chrome 23+, Safari?
            // Target should not be a text node (#504, #13143)
            if (event.target.nodeType === 3) {
                "dk.brics.javascriptSlicer.unreachable";
                event.target = event.target.parentNode;
            }
            // Support: IE<9
            // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
            event.metaKey = !!event.metaKey;
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        // Includes some event props shared by KeyEvent and MouseEvent
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                "dk.brics.javascriptSlicer.unreachable";
                // Add which for key events
                if (event.which == null) {
                    "dk.brics.javascriptSlicer.unreachable";
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                "dk.brics.javascriptSlicer.unreachable";
                var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
                // Calculate pageX/Y if missing and clientX/Y available
                if (event.pageX == null && original.clientX != null) {
                    "dk.brics.javascriptSlicer.unreachable";
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                // Add relatedTarget, if necessary
                if (!event.relatedTarget && fromElement) {
                    "dk.brics.javascriptSlicer.unreachable";
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }
                // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                if (!event.which && button !== undefined) {
                    "dk.brics.javascriptSlicer.unreachable";
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: {
                // Fire native event if possible so blur/focus sequence is correct
                trigger: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (this !== safeActiveElement() && this.focus) {
                        "dk.brics.javascriptSlicer.unreachable";
                        try {
                            "dk.brics.javascriptSlicer.unreachable";
                            this.focus();
                            return false;
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (this === safeActiveElement() && this.blur) {
                        "dk.brics.javascriptSlicer.unreachable";
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                // For checkbox, fire native event so checked state will be right
                trigger: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        "dk.brics.javascriptSlicer.unreachable";
                        this.click();
                        return false;
                    }
                },
                // For cross-browser consistency, don't fire native .click() on links
                _default: function(event) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Even when returnValue equals to undefined Firefox will still show alert
                    if (event.result !== undefined) {
                        "dk.brics.javascriptSlicer.unreachable";
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            "dk.brics.javascriptSlicer.unreachable";
            // Piggyback on a donor event to simulate a different one.
            // Fake originalEvent to avoid donor's stopPropagation, but if the
            // simulated event prevents default then we do the same on the donor.
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.event.trigger(e, null, elem);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.event.dispatch.call(elem, e);
            }
            if (e.isDefaultPrevented()) {
                "dk.brics.javascriptSlicer.unreachable";
                event.preventDefault();
            }
        }
    };
    jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
        "dk.brics.javascriptSlicer.unreachable";
        if (elem.removeEventListener) {
            "dk.brics.javascriptSlicer.unreachable";
            elem.removeEventListener(type, handle, false);
        }
    } : function(elem, type, handle) {
        "dk.brics.javascriptSlicer.unreachable";
        var name = "on" + type;
        if (elem.detachEvent) {
            "dk.brics.javascriptSlicer.unreachable";
            // #8545, #7054, preventing memory leaks for custom events in IE6-8
            // detachEvent needed property on element, by name of that event, to properly expose it to GC
            if (typeof elem[name] === core_strundefined) {
                "dk.brics.javascriptSlicer.unreachable";
                elem[name] = null;
            }
            elem.detachEvent(name, handle);
        }
    };
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
            "dk.brics.javascriptSlicer.unreachable";
            return new jQuery.Event(src, props);
        }
        // Event object
        if (src && src.type) {
            "dk.brics.javascriptSlicer.unreachable";
            this.originalEvent = src;
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        // Put explicitly provided properties onto the event object
        if (props) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.extend(this, props);
        }
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now();
        // Mark it as fixed
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            "dk.brics.javascriptSlicer.unreachable";
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (!e) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // If preventDefault exists, run it on the original event
            if (e.preventDefault) {
                "dk.brics.javascriptSlicer.unreachable";
                e.preventDefault();
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            "dk.brics.javascriptSlicer.unreachable";
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (!e) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // If stopPropagation exists, run it on the original event
            if (e.stopPropagation) {
                "dk.brics.javascriptSlicer.unreachable";
                e.stopPropagation();
            }
            // Support: IE
            // Set the cancelBubble property of the original event to true
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            "dk.brics.javascriptSlicer.unreachable";
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        }
    };
    // Create mouseenter/leave events using mouseover/out and event-time checks
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                "dk.brics.javascriptSlicer.unreachable";
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                // For mousenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    // IE submit delegation
    if (!jQuery.support.submitBubbles) {
        "dk.brics.javascriptSlicer.unreachable";
        jQuery.event.special.submit = {
            setup: function() {
                "dk.brics.javascriptSlicer.unreachable";
                // Only need this for delegated form submit events
                if (jQuery.nodeName(this, "form")) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return false;
                }
                // Lazy-add a submit handler when a descendant form may potentially be submitted
                jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Node name check avoids a VML-related crash in IE (#9807)
                    var elem = e.target, form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                    if (form && !jQuery._data(form, "submitBubbles")) {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.event.add(form, "submit._submit", function(event) {
                            "dk.brics.javascriptSlicer.unreachable";
                            event._submit_bubble = true;
                        });
                        jQuery._data(form, "submitBubbles", true);
                    }
                });
            },
            postDispatch: function(event) {
                "dk.brics.javascriptSlicer.unreachable";
                // If form was submitted by the user, bubble the event up the tree
                if (event._submit_bubble) {
                    "dk.brics.javascriptSlicer.unreachable";
                    delete event._submit_bubble;
                    if (this.parentNode && !event.isTrigger) {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.event.simulate("submit", this.parentNode, event, true);
                    }
                }
            },
            teardown: function() {
                "dk.brics.javascriptSlicer.unreachable";
                // Only need this for delegated form submit events
                if (jQuery.nodeName(this, "form")) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return false;
                }
                // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
                jQuery.event.remove(this, "._submit");
            }
        };
    }
    // IE change delegation and checkbox/radio fix
    if (!jQuery.support.changeBubbles) {
        "dk.brics.javascriptSlicer.unreachable";
        jQuery.event.special.change = {
            setup: function() {
                "dk.brics.javascriptSlicer.unreachable";
                if (rformElems.test(this.nodeName)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // IE doesn't fire change on a check/radio until blur; trigger it on click
                    // after a propertychange. Eat the blur-change in special.change.handle.
                    // This still fires onchange a second time for check/radio after blur.
                    if (this.type === "checkbox" || this.type === "radio") {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.event.add(this, "propertychange._change", function(event) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (event.originalEvent.propertyName === "checked") {
                                "dk.brics.javascriptSlicer.unreachable";
                                this._just_changed = true;
                            }
                        });
                        jQuery.event.add(this, "click._change", function(event) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (this._just_changed && !event.isTrigger) {
                                "dk.brics.javascriptSlicer.unreachable";
                                this._just_changed = false;
                            }
                            // Allow triggered, simulated change events (#11500)
                            jQuery.event.simulate("change", this, event, true);
                        });
                    }
                    return false;
                }
                // Delegated event; lazy-add a change handler on descendant inputs
                jQuery.event.add(this, "beforeactivate._change", function(e) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var elem = e.target;
                    if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.event.add(elem, "change._change", function(event) {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                "dk.brics.javascriptSlicer.unreachable";
                                jQuery.event.simulate("change", this.parentNode, event, true);
                            }
                        });
                        jQuery._data(elem, "changeBubbles", true);
                    }
                });
            },
            handle: function(event) {
                "dk.brics.javascriptSlicer.unreachable";
                var elem = event.target;
                // Swallow native change events from checkbox/radio, we already triggered them above
                if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                    "dk.brics.javascriptSlicer.unreachable";
                    return event.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.event.remove(this, "._change");
                return !rformElems.test(this.nodeName);
            }
        };
    }
    // Create "bubbling" focus and blur events
    if (!jQuery.support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            // Attach a single capturing handler while someone wants focusin/focusout
            var attaches = 0, handler = function(event) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (attaches++ === 0) {
                        "dk.brics.javascriptSlicer.unreachable";
                        document.addEventListener(orig, handler, true);
                    }
                },
                teardown: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (--attaches === 0) {
                        "dk.brics.javascriptSlicer.unreachable";
                        document.removeEventListener(orig, handler, true);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn, /*INTERNAL*/ one) {
            "dk.brics.javascriptSlicer.unreachable";
            var type, origFn;
            // Types can be a map of types/handlers
            if (typeof types === "object") {
                "dk.brics.javascriptSlicer.unreachable";
                // ( types-Object, selector, data )
                if (typeof selector !== "string") {
                    "dk.brics.javascriptSlicer.unreachable";
                    // ( types-Object, data )
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    "dk.brics.javascriptSlicer.unreachable";
                    this.on(type, selector, data, types[type], one);
                }
                return this;
            }
            if (data == null && fn == null) {
                "dk.brics.javascriptSlicer.unreachable";
                // ( types, fn )
                fn = selector;
                data = selector = undefined;
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                if (fn == null) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (typeof selector === "string") {
                        "dk.brics.javascriptSlicer.unreachable";
                        // ( types, selector, fn )
                        fn = data;
                        data = undefined;
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        // ( types, data, fn )
                        fn = data;
                        data = selector;
                        selector = undefined;
                    }
                }
            }
            if (fn === false) {
                "dk.brics.javascriptSlicer.unreachable";
                fn = returnFalse;
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                if (!fn) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return this;
                }
            }
            if (one === 1) {
                "dk.brics.javascriptSlicer.unreachable";
                origFn = fn;
                fn = function(event) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Can use an empty set, since event contains the info
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                // Use same guid so caller can remove using origFn
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                "dk.brics.javascriptSlicer.unreachable";
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                "dk.brics.javascriptSlicer.unreachable";
                // ( types-object [, selector] )
                for (type in types) {
                    "dk.brics.javascriptSlicer.unreachable";
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                "dk.brics.javascriptSlicer.unreachable";
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                "dk.brics.javascriptSlicer.unreachable";
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            "dk.brics.javascriptSlicer.unreachable";
            var elem = this[0];
            if (elem) {
                "dk.brics.javascriptSlicer.unreachable";
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    var isSimple = /^.[^:#\[\.,]*$/, rparentsprev = /^(?:parents|prev(?:Until|All))/, rneedsContext = jQuery.expr.match.needsContext, // methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        find: function(selector) {
            "dk.brics.javascriptSlicer.unreachable";
            var i, ret = [], self = this, len = self.length;
            if (typeof selector !== "string") {
                "dk.brics.javascriptSlicer.unreachable";
                return this.pushStack(jQuery(selector).filter(function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    for (i = 0; i < len; i++) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (jQuery.contains(self[i], this)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            return true;
                        }
                    }
                }));
            }
            for (i = 0; i < len; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.find(selector, self[i], ret);
            }
            // Needed because $( selector, context ) becomes $( context ).find( selector )
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        has: function(target) {
            "dk.brics.javascriptSlicer.unreachable";
            var i, targets = jQuery(target, this), len = targets.length;
            return this.filter(function() {
                "dk.brics.javascriptSlicer.unreachable";
                for (i = 0; i < len; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (jQuery.contains(this, targets[i])) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return true;
                    }
                }
            });
        },
        not: function(selector) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.pushStack(winnow(this, selector || [], true));
        },
        filter: function(selector) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.pushStack(winnow(this, selector || [], false));
        },
        is: function(selector) {
            "dk.brics.javascriptSlicer.unreachable";
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        },
        closest: function(selectors, context) {
            "dk.brics.javascriptSlicer.unreachable";
            var cur, i = 0, l = this.length, ret = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (;i < l; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Always skip document fragments
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : // Don't pass non-elements to Sizzle
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        "dk.brics.javascriptSlicer.unreachable";
                        cur = ret.push(cur);
                        break;
                    }
                }
            }
            return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
        },
        // Determine the position of an element within
        // the matched set of elements
        index: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            // No argument, return index in parent
            if (!elem) {
                "dk.brics.javascriptSlicer.unreachable";
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            // index in selector
            if (typeof elem === "string") {
                "dk.brics.javascriptSlicer.unreachable";
                return jQuery.inArray(this[0], jQuery(elem));
            }
            // Locate the position of the desired element
            return jQuery.inArray(// If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem, this);
        },
        add: function(selector, context) {
            "dk.brics.javascriptSlicer.unreachable";
            var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [ selector ] : selector), all = jQuery.merge(this.get(), set);
            return this.pushStack(jQuery.unique(all));
        },
        addBack: function(selector) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        "dk.brics.javascriptSlicer.unreachable";
        do {
            "dk.brics.javascriptSlicer.unreachable";
            cur = cur[dir];
        } while (cur && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            "dk.brics.javascriptSlicer.unreachable";
            var ret = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                "dk.brics.javascriptSlicer.unreachable";
                selector = until;
            }
            if (selector && typeof selector === "string") {
                "dk.brics.javascriptSlicer.unreachable";
                ret = jQuery.filter(selector, ret);
            }
            if (this.length > 1) {
                "dk.brics.javascriptSlicer.unreachable";
                // Remove duplicates
                if (!guaranteedUnique[name]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    ret = jQuery.unique(ret);
                }
                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    ret = ret.reverse();
                }
            }
            return this.pushStack(ret);
        };
    });
    jQuery.extend({
        filter: function(expr, elems, not) {
            "dk.brics.javascriptSlicer.unreachable";
            var elem = elems[0];
            if (not) {
                "dk.brics.javascriptSlicer.unreachable";
                expr = ":not(" + expr + ")";
            }
            return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                return elem.nodeType === 1;
            }));
        },
        dir: function(elem, dir, until) {
            "dk.brics.javascriptSlicer.unreachable";
            var matched = [], cur = elem[dir];
            while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                "dk.brics.javascriptSlicer.unreachable";
                if (cur.nodeType === 1) {
                    "dk.brics.javascriptSlicer.unreachable";
                    matched.push(cur);
                }
                cur = cur[dir];
            }
            return matched;
        },
        sibling: function(n, elem) {
            "dk.brics.javascriptSlicer.unreachable";
            var r = [];
            for (;n; n = n.nextSibling) {
                "dk.brics.javascriptSlicer.unreachable";
                if (n.nodeType === 1 && n !== elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    r.push(n);
                }
            }
            return r;
        }
    });
    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        "dk.brics.javascriptSlicer.unreachable";
        if (jQuery.isFunction(qualifier)) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.grep(elements, function(elem, i) {
                "dk.brics.javascriptSlicer.unreachable";
                /* jshint -W018 */
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        if (qualifier.nodeType) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.grep(elements, function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                return elem === qualifier !== not;
            });
        }
        if (typeof qualifier === "string") {
            "dk.brics.javascriptSlicer.unreachable";
            if (isSimple.test(qualifier)) {
                "dk.brics.javascriptSlicer.unreachable";
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.inArray(elem, qualifier) >= 0 !== not;
        });
    }
    function createSafeFragment(document) {
        var list = nodeNames.split("|"), safeFrag = document.createDocumentFragment();
        if (safeFrag.createElement) {
            "dk.brics.javascriptSlicer.unreachable";
            while (list.length) {
                "dk.brics.javascriptSlicer.unreachable";
                safeFrag.createElement(list.pop());
            }
        }
        return safeFrag;
    }
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rleadingWhitespace = /^\s+/, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, manipulation_rcheckableType = /^(?:checkbox|radio)$/i, // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, // We have to close these tags to support XHTML (#13200)
    wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
        // unless wrapped in a div with non-breaking characters in front of it.
        _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement("div"));
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    jQuery.fn.extend({
        text: function(value) {
            return jQuery.access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
            }, null, value, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.domManip(arguments, function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.domManip(arguments, function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                if (this.parentNode) {
                    "dk.brics.javascriptSlicer.unreachable";
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.domManip(arguments, function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                if (this.parentNode) {
                    "dk.brics.javascriptSlicer.unreachable";
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        // keepData is for internal use only--do not document
        remove: function(selector, keepData) {
            "dk.brics.javascriptSlicer.unreachable";
            var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
            for (;(elem = elems[i]) != null; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                if (!keepData && elem.nodeType === 1) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.cleanData(getAll(elem));
                }
                if (elem.parentNode) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        setGlobalEval(getAll(elem, "script"));
                    }
                    elem.parentNode.removeChild(elem);
                }
            }
            return this;
        },
        empty: function() {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                // Remove element nodes and prevent memory leaks
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                }
                // Remove any remaining nodes
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
                // If this is a select, ensure that it displays empty (#12336)
                // Support: IE<9
                if (elem.options && jQuery.nodeName(elem, "select")) {
                    "dk.brics.javascriptSlicer.unreachable";
                    elem.options.length = 0;
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            "dk.brics.javascriptSlicer.unreachable";
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                "dk.brics.javascriptSlicer.unreachable";
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.access(this, function(value) {
                "dk.brics.javascriptSlicer.unreachable";
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
                }
                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        "dk.brics.javascriptSlicer.unreachable";
                        for (;i < l; i++) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // Remove element nodes and prevent memory leaks
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                "dk.brics.javascriptSlicer.unreachable";
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    "dk.brics.javascriptSlicer.unreachable";
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            "dk.brics.javascriptSlicer.unreachable";
            var // Snapshot the DOM in case .domManip sweeps something relevant into its fragment
            args = jQuery.map(this, function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                return [ elem.nextSibling, elem.parentNode ];
            }), i = 0;
            // Make the changes, replacing each context element with the new content
            this.domManip(arguments, function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                var next = args[i++], parent = args[i++];
                if (parent) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Don't use the snapshot next if it has moved (#13810)
                    if (next && next.parentNode !== parent) {
                        "dk.brics.javascriptSlicer.unreachable";
                        next = this.nextSibling;
                    }
                    jQuery(this).remove();
                    parent.insertBefore(elem, next);
                }
            }, true);
            // Force removal if there was no new content (e.g., from empty arguments)
            return i ? this : this.remove();
        },
        detach: function(selector) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.remove(selector, true);
        },
        domManip: function(args, callback, allowIntersection) {
            // Flatten any nested arrays
            args = core_concat.apply([], args);
            var first, node, hasScripts, scripts, doc, fragment, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            // We can't cloneNode fragments that contain checked, in WebKit
            if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
                "dk.brics.javascriptSlicer.unreachable";
                return this.each(function(index) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var self = set.eq(index);
                    if (isFunction) {
                        "dk.brics.javascriptSlicer.unreachable";
                        args[0] = value.call(this, index, self.html());
                    }
                    self.domManip(args, callback, allowIntersection);
                });
            }
            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    // Use the original fragment for the last item instead of the first because it can end up
                    // being emptied incorrectly in certain situations (#8070).
                    for (;i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            "dk.brics.javascriptSlicer.unreachable";
                            node = jQuery.clone(node, true, true);
                            // Keep references to cloned scripts for later restoration
                            if (hasScripts) {
                                "dk.brics.javascriptSlicer.unreachable";
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(this[i], node, i);
                    }
                    if (hasScripts) {
                        "dk.brics.javascriptSlicer.unreachable";
                        doc = scripts[scripts.length - 1].ownerDocument;
                        // Reenable scripts
                        jQuery.map(scripts, restoreScript);
                        // Evaluate executable scripts on first document insertion
                        for (i = 0; i < hasScripts; i++) {
                            "dk.brics.javascriptSlicer.unreachable";
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                                "dk.brics.javascriptSlicer.unreachable";
                                if (node.src) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    // Hope ajax is available...
                                    jQuery._evalUrl(node.src);
                                } else {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                                }
                            }
                        }
                    }
                    // Fix #11809: Avoid leaking memory
                    fragment = first = null;
                }
            }
            return this;
        }
    });
    // Support: IE<8
    // Manipulating tables requires a tbody
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        "dk.brics.javascriptSlicer.unreachable";
        elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        "dk.brics.javascriptSlicer.unreachable";
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            "dk.brics.javascriptSlicer.unreachable";
            elem.type = match[1];
        } else {
            "dk.brics.javascriptSlicer.unreachable";
            elem.removeAttribute("type");
        }
        return elem;
    }
    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        "dk.brics.javascriptSlicer.unreachable";
        var elem, i = 0;
        for (;(elem = elems[i]) != null; i++) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
        }
    }
    function cloneCopyEvent(src, dest) {
        "dk.brics.javascriptSlicer.unreachable";
        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            "dk.brics.javascriptSlicer.unreachable";
            return;
        }
        var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
        if (events) {
            "dk.brics.javascriptSlicer.unreachable";
            delete curData.handle;
            curData.events = {};
            for (type in events) {
                "dk.brics.javascriptSlicer.unreachable";
                for (i = 0, l = events[type].length; i < l; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }
        // make the cloned public data object a copy from the original
        if (curData.data) {
            "dk.brics.javascriptSlicer.unreachable";
            curData.data = jQuery.extend({}, curData.data);
        }
    }
    function fixCloneNodeIssues(src, dest) {
        "dk.brics.javascriptSlicer.unreachable";
        var nodeName, e, data;
        // We do not need to do anything for non-Elements
        if (dest.nodeType !== 1) {
            "dk.brics.javascriptSlicer.unreachable";
            return;
        }
        nodeName = dest.nodeName.toLowerCase();
        // IE6-8 copies events bound via attachEvent when using cloneNode.
        if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
            "dk.brics.javascriptSlicer.unreachable";
            data = jQuery._data(dest);
            for (e in data.events) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.removeEvent(dest, e, data.handle);
            }
            // Event data gets referenced instead of copied if the expando gets copied too
            dest.removeAttribute(jQuery.expando);
        }
        // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
        if (nodeName === "script" && dest.text !== src.text) {
            "dk.brics.javascriptSlicer.unreachable";
            disableScript(dest).text = src.text;
            restoreScript(dest);
        } else {
            "dk.brics.javascriptSlicer.unreachable";
            if (nodeName === "object") {
                "dk.brics.javascriptSlicer.unreachable";
                if (dest.parentNode) {
                    "dk.brics.javascriptSlicer.unreachable";
                    dest.outerHTML = src.outerHTML;
                }
                // This path appears unavoidable for IE9. When cloning an object
                // element in IE9, the outerHTML strategy above is not sufficient.
                // If the src has innerHTML and the destination does not,
                // copy the src.innerHTML into the dest.innerHTML. #10324
                if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    dest.innerHTML = src.innerHTML;
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // IE6-8 fails to persist the checked state of a cloned checkbox
                    // or radio button. Worse, IE6-7 fail to give the cloned element
                    // a checked appearance if the defaultChecked value isn't also set
                    dest.defaultChecked = dest.checked = src.checked;
                    // IE6-7 get confused and end up setting the value of a cloned
                    // checkbox/radio button to an empty string instead of "on"
                    if (dest.value !== src.value) {
                        "dk.brics.javascriptSlicer.unreachable";
                        dest.value = src.value;
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (nodeName === "option") {
                        "dk.brics.javascriptSlicer.unreachable";
                        dest.defaultSelected = dest.selected = src.defaultSelected;
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (nodeName === "input" || nodeName === "textarea") {
                            "dk.brics.javascriptSlicer.unreachable";
                            dest.defaultValue = src.defaultValue;
                        }
                    }
                }
            }
        }
    }
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            "dk.brics.javascriptSlicer.unreachable";
            var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
            for (;i <= last; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
                core_push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    function getAll(context, tag) {
        var elems, elem, i = 0, found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
        if (!found) {
            for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
                "dk.brics.javascriptSlicer.unreachable";
                if (!tag || jQuery.nodeName(elem, tag)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    found.push(elem);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.merge(found, getAll(elem, tag));
                }
            }
        }
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], found) : found;
    }
    // Used in buildFragment, fixes the defaultChecked property
    function fixDefaultChecked(elem) {
        "dk.brics.javascriptSlicer.unreachable";
        if (manipulation_rcheckableType.test(elem.type)) {
            "dk.brics.javascriptSlicer.unreachable";
            elem.defaultChecked = elem.checked;
        }
    }
    jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            "dk.brics.javascriptSlicer.unreachable";
            var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
            if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                "dk.brics.javascriptSlicer.unreachable";
                clone = elem.cloneNode(true);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }
            if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                "dk.brics.javascriptSlicer.unreachable";
                // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                // Fix all IE cloning issues
                for (i = 0; (node = srcElements[i]) != null; ++i) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Ensure that the destination node is not null; Fixes #9587
                    if (destElements[i]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        fixCloneNodeIssues(node, destElements[i]);
                    }
                }
            }
            // Copy the events from the original to the clone
            if (dataAndEvents) {
                "dk.brics.javascriptSlicer.unreachable";
                if (deepDataAndEvents) {
                    "dk.brics.javascriptSlicer.unreachable";
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0; (node = srcElements[i]) != null; i++) {
                        "dk.brics.javascriptSlicer.unreachable";
                        cloneCopyEvent(node, destElements[i]);
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    cloneCopyEvent(elem, clone);
                }
            }
            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                "dk.brics.javascriptSlicer.unreachable";
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            destElements = srcElements = node = null;
            // Return the cloned set
            return clone;
        },
        buildFragment: function(elems, context, scripts, selection) {
            var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, // Ensure a safe fragment
            safe = createSafeFragment(context), nodes = [], i = 0;
            for (;i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    // Add nodes directly
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (!rhtml.test(elem)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            nodes.push(context.createTextNode(elem));
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            tmp = tmp || safe.appendChild(context.createElement("div"));
                            // Deserialize a standard representation
                            tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                            // Descend through wrappers to the right content
                            j = wrap[0];
                            while (j--) {
                                "dk.brics.javascriptSlicer.unreachable";
                                tmp = tmp.lastChild;
                            }
                            // Manually add leading whitespace removed by IE
                            if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                                "dk.brics.javascriptSlicer.unreachable";
                                nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                            }
                            // Remove IE's autoinserted <tbody> from table fragments
                            if (!jQuery.support.tbody) {
                                "dk.brics.javascriptSlicer.unreachable";
                                // String was a <table>, *may* have spurious <tbody>
                                elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : // String was a bare <thead> or <tfoot>
                                wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                                j = elem && elem.childNodes.length;
                                while (j--) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                                        "dk.brics.javascriptSlicer.unreachable";
                                        elem.removeChild(tbody);
                                    }
                                }
                            }
                            jQuery.merge(nodes, tmp.childNodes);
                            // Fix #12392 for WebKit and IE > 9
                            tmp.textContent = "";
                            // Fix #12392 for oldIE
                            while (tmp.firstChild) {
                                "dk.brics.javascriptSlicer.unreachable";
                                tmp.removeChild(tmp.firstChild);
                            }
                            // Remember the top-level container for proper cleanup
                            tmp = safe.lastChild;
                        }
                    }
                }
            }
            // Fix #11356: Clear elements from fragment
            if (tmp) {
                "dk.brics.javascriptSlicer.unreachable";
                safe.removeChild(tmp);
            }
            // Reset defaultChecked for any radios and checkboxes
            // about to be appended to the DOM in IE 6/7 (#8060)
            if (!jQuery.support.appendChecked) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
            }
            i = 0;
            while (elem = nodes[i++]) {
                // #4087 - If origin and destination elements are the same, and this is
                // that element, do not do anything
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    "dk.brics.javascriptSlicer.unreachable";
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                // Append to fragment
                tmp = getAll(safe.appendChild(elem), "script");
                // Preserve script evaluation history
                if (contains) {
                    "dk.brics.javascriptSlicer.unreachable";
                    setGlobalEval(tmp);
                }
                // Capture executables
                if (scripts) {
                    "dk.brics.javascriptSlicer.unreachable";
                    j = 0;
                    while (elem = tmp[j++]) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (rscriptType.test(elem.type || "")) {
                            "dk.brics.javascriptSlicer.unreachable";
                            scripts.push(elem);
                        }
                    }
                }
            }
            tmp = null;
            return safe;
        },
        cleanData: function(elems, /* internal */ acceptData) {
            var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = jQuery.support.deleteExpando, special = jQuery.event.special;
            for (;(elem = elems[i]) != null; i++) {
                if (acceptData || jQuery.acceptData(elem)) {
                    id = elem[internalKey];
                    data = id && cache[id];
                    if (data) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (data.events) {
                            "dk.brics.javascriptSlicer.unreachable";
                            for (type in data.events) {
                                "dk.brics.javascriptSlicer.unreachable";
                                if (special[type]) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    jQuery.event.remove(elem, type);
                                } else {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        // Remove cache only if it was not already removed by jQuery.event.remove
                        if (cache[id]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            delete cache[id];
                            // IE does not allow us to delete expando properties from nodes,
                            // nor does it have a removeAttribute function on Document nodes;
                            // we must handle all of these cases
                            if (deleteExpando) {
                                "dk.brics.javascriptSlicer.unreachable";
                                delete elem[internalKey];
                            } else {
                                "dk.brics.javascriptSlicer.unreachable";
                                if (typeof elem.removeAttribute !== core_strundefined) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    elem.removeAttribute(internalKey);
                                } else {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    elem[internalKey] = null;
                                }
                            }
                            core_deletedIds.push(id);
                        }
                    }
                }
            }
        },
        _evalUrl: function(url) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
            });
        }
    });
    jQuery.fn.extend({
        wrapAll: function(html) {
            "dk.brics.javascriptSlicer.unreachable";
            if (jQuery.isFunction(html)) {
                "dk.brics.javascriptSlicer.unreachable";
                return this.each(function(i) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                "dk.brics.javascriptSlicer.unreachable";
                // The elements to wrap the target around
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    "dk.brics.javascriptSlicer.unreachable";
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    var elem = this;
                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        "dk.brics.javascriptSlicer.unreachable";
                        elem = elem.firstChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            "dk.brics.javascriptSlicer.unreachable";
            if (jQuery.isFunction(html)) {
                "dk.brics.javascriptSlicer.unreachable";
                return this.each(function(i) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    "dk.brics.javascriptSlicer.unreachable";
                    contents.wrapAll(html);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            "dk.brics.javascriptSlicer.unreachable";
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.parent().each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                if (!jQuery.nodeName(this, "body")) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/, rposition = /^(top|right|bottom|left)$/, // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
    // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), elemdisplay = {
        BODY: "block"
    }, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: 0,
        fontWeight: 400
    }, cssExpand = [ "Top", "Right", "Bottom", "Left" ], cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    // return a css property mapped to a potentially vendor prefixed property
    function vendorPropName(style, name) {
        "dk.brics.javascriptSlicer.unreachable";
        // shortcut for names that are not vendor prefixed
        if (name in style) {
            "dk.brics.javascriptSlicer.unreachable";
            return name;
        }
        // check for vendor prefixed names
        var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
        while (i--) {
            "dk.brics.javascriptSlicer.unreachable";
            name = cssPrefixes[i] + capName;
            if (name in style) {
                "dk.brics.javascriptSlicer.unreachable";
                return name;
            }
        }
        return origName;
    }
    function isHidden(elem, el) {
        "dk.brics.javascriptSlicer.unreachable";
        // isHidden might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    }
    function showHide(elements, show) {
        "dk.brics.javascriptSlicer.unreachable";
        var display, elem, hidden, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
            "dk.brics.javascriptSlicer.unreachable";
            elem = elements[index];
            if (!elem.style) {
                "dk.brics.javascriptSlicer.unreachable";
                continue;
            }
            values[index] = jQuery._data(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                "dk.brics.javascriptSlicer.unreachable";
                // Reset the inline display of this element to learn if it is
                // being hidden by cascaded rules or not
                if (!values[index] && display === "none") {
                    "dk.brics.javascriptSlicer.unreachable";
                    elem.style.display = "";
                }
                // Set elements which have been overridden with display: none
                // in a stylesheet to whatever the default browser style is
                // for such an element
                if (elem.style.display === "" && isHidden(elem)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                if (!values[index]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    hidden = isHidden(elem);
                    if (display && display !== "none" || !hidden) {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                    }
                }
            }
        }
        // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        for (index = 0; index < length; index++) {
            "dk.brics.javascriptSlicer.unreachable";
            elem = elements[index];
            if (!elem.style) {
                "dk.brics.javascriptSlicer.unreachable";
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                "dk.brics.javascriptSlicer.unreachable";
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.fn.extend({
        css: function(name, value) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.access(this, function(elem, name, value) {
                "dk.brics.javascriptSlicer.unreachable";
                var len, styles, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    styles = getStyles(elem);
                    len = name.length;
                    for (;i < len; i++) {
                        "dk.brics.javascriptSlicer.unreachable";
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return showHide(this, true);
        },
        hide: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return showHide(this);
        },
        toggle: function(state) {
            "dk.brics.javascriptSlicer.unreachable";
            var bool = typeof state === "boolean";
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                if (bool ? state : isHidden(this)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery(this).show();
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery(this).hide();
                }
            });
        }
    });
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (computed) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            // normalize float css property
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            "dk.brics.javascriptSlicer.unreachable";
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            // Make sure that we're working with the right name
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            if (value !== undefined) {
                "dk.brics.javascriptSlicer.unreachable";
                type = typeof value;
                // convert relative number strings (+= or -=) to relative numbers. #7345
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    "dk.brics.javascriptSlicer.unreachable";
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    // Fixes bug #9237
                    type = "number";
                }
                // Make sure that NaN and null values aren't set. See: #7116
                if (value == null || type === "number" && isNaN(value)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return;
                }
                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    value += "px";
                }
                // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
                // but it would mean to define eight (for every problematic property) identical functions
                if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    "dk.brics.javascriptSlicer.unreachable";
                    style[name] = "inherit";
                }
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
                    // Fixes bug #5509
                    try {
                        "dk.brics.javascriptSlicer.unreachable";
                        style[name] = value;
                    } catch (e) {}
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return ret;
                }
                // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            "dk.brics.javascriptSlicer.unreachable";
            var num, val, hooks, origName = jQuery.camelCase(name);
            // Make sure that we're working with the right name
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) {
                "dk.brics.javascriptSlicer.unreachable";
                val = hooks.get(elem, true, extra);
            }
            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) {
                "dk.brics.javascriptSlicer.unreachable";
                val = curCSS(elem, name, styles);
            }
            //convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) {
                "dk.brics.javascriptSlicer.unreachable";
                val = cssNormalTransform[name];
            }
            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                "dk.brics.javascriptSlicer.unreachable";
                num = parseFloat(val);
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
            }
            return val;
        }
    });
    // NOTE: we've included the "window" in window.getComputedStyle
    // because jsdom on node.js will break without it.
    if (window.getComputedStyle) {
        getStyles = function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return window.getComputedStyle(elem, null);
        };
        curCSS = function(elem, name, _computed) {
            "dk.brics.javascriptSlicer.unreachable";
            var width, minWidth, maxWidth, computed = _computed || getStyles(elem), // getPropertyValue is only needed for .css('filter') in IE9, see #12537
            ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined, style = elem.style;
            if (computed) {
                "dk.brics.javascriptSlicer.unreachable";
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    ret = jQuery.style(elem, name);
                }
                // A tribute to the "awesome hack by Dean Edwards"
                // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
                // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
                // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
                if (rnumnonpx.test(ret) && rmargin.test(name)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Remember the original values
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    // Put in the new values to get a computed value out
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    // Revert the changed values
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret;
        };
    } else {
        "dk.brics.javascriptSlicer.unreachable";
        if (document.documentElement.currentStyle) {
            "dk.brics.javascriptSlicer.unreachable";
            getStyles = function(elem) {
                "dk.brics.javascriptSlicer.unreachable";
                return elem.currentStyle;
            };
            curCSS = function(elem, name, _computed) {
                "dk.brics.javascriptSlicer.unreachable";
                var left, rs, rsLeft, computed = _computed || getStyles(elem), ret = computed ? computed[name] : undefined, style = elem.style;
                // Avoid setting ret to empty string here
                // so we don't default to auto
                if (ret == null && style && style[name]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    ret = style[name];
                }
                // From the awesome hack by Dean Edwards
                // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
                // If we're not dealing with a regular pixel number
                // but a number that has a weird ending, we need to convert it to pixels
                // but not position css attributes, as those are proportional to the parent element instead
                // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
                if (rnumnonpx.test(ret) && !rposition.test(name)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Remember the original values
                    left = style.left;
                    rs = elem.runtimeStyle;
                    rsLeft = rs && rs.left;
                    // Put in the new values to get a computed value out
                    if (rsLeft) {
                        "dk.brics.javascriptSlicer.unreachable";
                        rs.left = elem.currentStyle.left;
                    }
                    style.left = name === "fontSize" ? "1em" : ret;
                    ret = style.pixelLeft + "px";
                    // Revert the changed values
                    style.left = left;
                    if (rsLeft) {
                        "dk.brics.javascriptSlicer.unreachable";
                        rs.left = rsLeft;
                    }
                }
                return ret === "" ? "auto" : ret;
            };
        }
    }
    function setPositiveNumber(elem, value, subtract) {
        "dk.brics.javascriptSlicer.unreachable";
        var matches = rnumsplit.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        "dk.brics.javascriptSlicer.unreachable";
        var i = extra === (isBorderBox ? "border" : "content") ? // If we already have the right measurement, avoid augmentation
        4 : // Otherwise initialize for horizontal or vertical properties
        name === "width" ? 1 : 0, val = 0;
        for (;i < 4; i += 2) {
            "dk.brics.javascriptSlicer.unreachable";
            // both box models exclude margin, so add it if we want it
            if (extra === "margin") {
                "dk.brics.javascriptSlicer.unreachable";
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                "dk.brics.javascriptSlicer.unreachable";
                // border-box includes padding, so remove it if we want content
                if (extra === "content") {
                    "dk.brics.javascriptSlicer.unreachable";
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                // at this point, extra isn't border nor margin, so remove border
                if (extra !== "margin") {
                    "dk.brics.javascriptSlicer.unreachable";
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                // at this point, extra isn't content, so add padding
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // at this point, extra isn't content nor padding, so add border
                if (extra !== "padding") {
                    "dk.brics.javascriptSlicer.unreachable";
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        "dk.brics.javascriptSlicer.unreachable";
        // Start with offset property, which is equivalent to the border-box value
        var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        // some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if (val <= 0 || val == null) {
            "dk.brics.javascriptSlicer.unreachable";
            // Fall back to computed then uncomputed css if necessary
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                "dk.brics.javascriptSlicer.unreachable";
                val = elem.style[name];
            }
            // Computed unit is not pixels. Stop here and return.
            if (rnumnonpx.test(val)) {
                "dk.brics.javascriptSlicer.unreachable";
                return val;
            }
            // we need the check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
            // Normalize "", auto, and prepare for extra
            val = parseFloat(val) || 0;
        }
        // use the active box-sizing model to add/subtract irrelevant styles
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    // Try to determine the default display value of an element
    function css_defaultDisplay(nodeName) {
        "dk.brics.javascriptSlicer.unreachable";
        var doc = document, display = elemdisplay[nodeName];
        if (!display) {
            "dk.brics.javascriptSlicer.unreachable";
            display = actualDisplay(nodeName, doc);
            // If the simple way fails, read from inside an iframe
            if (display === "none" || !display) {
                "dk.brics.javascriptSlicer.unreachable";
                // Use the already-created iframe if possible
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                doc.write("<!doctype html><html><body>");
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }
            // Store the correct default display
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    // Called ONLY from within css_defaultDisplay
    function actualDisplay(name, doc) {
        "dk.brics.javascriptSlicer.unreachable";
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], "display");
        elem.remove();
        return display;
    }
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                "dk.brics.javascriptSlicer.unreachable";
                if (computed) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // certain elements can have dimension info if we invisibly show them
                    // however, it must have a current display style that would benefit from this
                    return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
                        "dk.brics.javascriptSlicer.unreachable";
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function(elem, value, extra) {
                "dk.brics.javascriptSlicer.unreachable";
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
        };
    });
    if (!jQuery.support.opacity) {
        "dk.brics.javascriptSlicer.unreachable";
        jQuery.cssHooks.opacity = {
            get: function(elem, computed) {
                "dk.brics.javascriptSlicer.unreachable";
                // IE uses filters for opacity
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
            },
            set: function(elem, value) {
                "dk.brics.javascriptSlicer.unreachable";
                var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
                // IE has trouble with opacity if it does not have layout
                // Force it by setting the zoom level
                style.zoom = 1;
                // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
                // if value === "", then remove inline opacity #12685
                if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
                    // if "filter:" is present at all, clearType is disabled, we want to avoid this
                    // style.removeAttribute is IE Only, but so apparently is this code path...
                    style.removeAttribute("filter");
                    // if there is no filter style applied in a css rule or unset inline opacity, we are done
                    if (value === "" || currentStyle && !currentStyle.filter) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return;
                    }
                }
                // otherwise, set new filter values
                style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
            }
        };
    }
    // These hooks cannot be added until DOM ready because the support test
    // for it is not run until after DOM ready
    jQuery(function() {
        if (!jQuery.support.reliableMarginRight) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.cssHooks.marginRight = {
                get: function(elem, computed) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (computed) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                        // Work around by temporarily setting element display to inline-block
                        return jQuery.swap(elem, {
                            display: "inline-block"
                        }, curCSS, [ elem, "marginRight" ]);
                    }
                }
            };
        }
        // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
        // getComputedStyle returns percent when specified for top/left/bottom/right
        // rather than make the css module depend on the offset module, we just check for it here
        if (!jQuery.support.pixelPosition && jQuery.fn.position) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.each([ "top", "left" ], function(i, prop) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.cssHooks[prop] = {
                    get: function(elem, computed) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (computed) {
                            "dk.brics.javascriptSlicer.unreachable";
                            computed = curCSS(elem, prop);
                            // if curCSS returns percentage, fallback to offset
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }
                };
            });
        }
    });
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            // Support: Opera <= 12.12
            // Opera reports offsetWidths and offsetHeights less than zero on some elements
            return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
        };
        jQuery.expr.filters.visible = function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return !jQuery.expr.filters.hidden(elem);
        };
    }
    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                "dk.brics.javascriptSlicer.unreachable";
                var i = 0, expanded = {}, // assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [ value ];
                for (;i < 4; i++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.fn.extend({
        serialize: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.map(function() {
                "dk.brics.javascriptSlicer.unreachable";
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                "dk.brics.javascriptSlicer.unreachable";
                var type = this.type;
                // Use .is(":disabled") so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
            }).map(function(i, elem) {
                "dk.brics.javascriptSlicer.unreachable";
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    //Serialize an array of form elements or a set of
    //key/values into a query string
    jQuery.param = function(a, traditional) {
        "dk.brics.javascriptSlicer.unreachable";
        var prefix, s = [], add = function(key, value) {
            "dk.brics.javascriptSlicer.unreachable";
            // If value is a function, invoke it and return its value
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        // Set traditional to true for jQuery <= 1.3.2 behavior.
        if (traditional === undefined) {
            "dk.brics.javascriptSlicer.unreachable";
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        // If an array was passed in, assume that it is an array of form elements.
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            "dk.brics.javascriptSlicer.unreachable";
            // Serialize the form elements
            jQuery.each(a, function() {
                "dk.brics.javascriptSlicer.unreachable";
                add(this.name, this.value);
            });
        } else {
            "dk.brics.javascriptSlicer.unreachable";
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for (prefix in a) {
                "dk.brics.javascriptSlicer.unreachable";
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        // Return the resulting serialization
        return s.join("&").replace(r20, "+");
    };
    function buildParams(prefix, obj, traditional, add) {
        "dk.brics.javascriptSlicer.unreachable";
        var name;
        if (jQuery.isArray(obj)) {
            "dk.brics.javascriptSlicer.unreachable";
            // Serialize array item.
            jQuery.each(obj, function(i, v) {
                "dk.brics.javascriptSlicer.unreachable";
                if (traditional || rbracket.test(prefix)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Treat each array item as a scalar.
                    add(prefix, v);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else {
            "dk.brics.javascriptSlicer.unreachable";
            if (!traditional && jQuery.type(obj) === "object") {
                "dk.brics.javascriptSlicer.unreachable";
                // Serialize object item.
                for (name in obj) {
                    "dk.brics.javascriptSlicer.unreachable";
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                // Serialize scalar item.
                add(prefix, obj);
            }
        }
    }
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            "dk.brics.javascriptSlicer.unreachable";
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        bind: function(types, data, fn) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            "dk.brics.javascriptSlicer.unreachable";
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    var // Document location
    ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, // IE leaves an \r character at EOL
    // #7653, #8125, #8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, // Keep a copy of the old load method
    _load = jQuery.fn.load, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
    prefilters = {}, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
    transports = {}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    allTypes = "*/".concat("*");
    // #8138, IE may throw an exception when accessing
    // a field from window.location if document.domain has been set
    try {
        ajaxLocation = location.href;
    } catch (e) {
        "dk.brics.javascriptSlicer.unreachable";
        // Use the href attribute of an A element
        // since IE will modify it given document.location
        ajaxLocation = document.createElement("a");
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }
    // Segment location into parts
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while (dataType = dataTypes[i++]) {
                    // Prepend if requested
                    if (dataType[0] === "+") {
                        "dk.brics.javascriptSlicer.unreachable";
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        "dk.brics.javascriptSlicer.unreachable";
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            "dk.brics.javascriptSlicer.unreachable";
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                "dk.brics.javascriptSlicer.unreachable";
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (seekingTransport) {
                        "dk.brics.javascriptSlicer.unreachable";
                        return !(selected = dataTypeOrTransport);
                    }
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend(target, src) {
        var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    jQuery.fn.load = function(url, params, callback) {
        "dk.brics.javascriptSlicer.unreachable";
        if (typeof url !== "string" && _load) {
            "dk.brics.javascriptSlicer.unreachable";
            return _load.apply(this, arguments);
        }
        var selector, response, type, self = this, off = url.indexOf(" ");
        if (off >= 0) {
            "dk.brics.javascriptSlicer.unreachable";
            selector = url.slice(off, url.length);
            url = url.slice(0, off);
        }
        // If it's a function
        if (jQuery.isFunction(params)) {
            "dk.brics.javascriptSlicer.unreachable";
            // We assume that it's the callback
            callback = params;
            params = undefined;
        } else {
            "dk.brics.javascriptSlicer.unreachable";
            if (params && typeof params === "object") {
                "dk.brics.javascriptSlicer.unreachable";
                type = "POST";
            }
        }
        // If we have elements to modify, make the request
        if (self.length > 0) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.ajax({
                url: url,
                // if "type" variable is undefined, then "GET" method will be used
                type: type,
                dataType: "html",
                data: params
            }).done(function(responseText) {
                "dk.brics.javascriptSlicer.unreachable";
                // Save response for use in complete callback
                response = arguments;
                self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
                responseText);
            }).complete(callback && function(jqXHR, status) {
                "dk.brics.javascriptSlicer.unreachable";
                self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }
        return this;
    };
    // Attach a bunch of functions for handling common AJAX events
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.on(type, fn);
        };
    });
    jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": jQuery.parseJSON,
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
            return settings ? // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
            "dk.brics.javascriptSlicer.unreachable";
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                "dk.brics.javascriptSlicer.unreachable";
                options = url;
                url = undefined;
            }
            // Force options to be an object
            options = options || {};
            var // Cross-domain detection vars
            parts, // Loop variable
            i, // URL without anti-cache param
            cacheURL, // Response headers as string
            responseHeadersString, // timeout handle
            timeoutTimer, // To know if global events are to be dispatched
            fireGlobals, transport, // Response headers
            responseHeaders, // Create the final options object
            s = jQuery.ajaxSetup({}, options), // Callbacks context
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
            deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            statusCode = s.statusCode || {}, // Headers (they are sent all at once)
            requestHeaders = {}, requestHeadersNames = {}, // The jqXHR state
            state = 0, // Default abort message
            strAbort = "canceled", // Fake xhr
            jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var match;
                    if (state === 2) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (!responseHeaders) {
                            "dk.brics.javascriptSlicer.unreachable";
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                "dk.brics.javascriptSlicer.unreachable";
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },
                // Raw string
                getAllResponseHeaders: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    return state === 2 ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var lname = name.toLowerCase();
                    if (!state) {
                        "dk.brics.javascriptSlicer.unreachable";
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!state) {
                        "dk.brics.javascriptSlicer.unreachable";
                        s.mimeType = type;
                    }
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var code;
                    if (map) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (state < 2) {
                            "dk.brics.javascriptSlicer.unreachable";
                            for (code in map) {
                                "dk.brics.javascriptSlicer.unreachable";
                                // Lazy-add the new callback in a way that preserves old ones
                                statusCode[code] = [ statusCode[code], map[code] ];
                            }
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            // Execute the appropriate callbacks
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },
                // Cancel the request
                abort: function(statusText) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var finalText = statusText || strAbort;
                    if (transport) {
                        "dk.brics.javascriptSlicer.unreachable";
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };
            // Attach deferreds
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [ "" ];
            // A cross-domain request is in order when we have a protocol:host:port mismatch
            if (s.crossDomain == null) {
                "dk.brics.javascriptSlicer.unreachable";
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                "dk.brics.javascriptSlicer.unreachable";
                s.data = jQuery.param(s.data, s.traditional);
            }
            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            if (state === 2) {
                "dk.brics.javascriptSlicer.unreachable";
                return jqXHR;
            }
            // We can fire global events as of now if asked to
            fireGlobals = s.global;
            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.event.trigger("ajaxStart");
            }
            // Uppercase the type
            s.type = s.type.toUpperCase();
            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            cacheURL = s.url;
            // More options handling for requests with no content
            if (!s.hasContent) {
                "dk.brics.javascriptSlicer.unreachable";
                // If data is available, append data to url
                if (s.data) {
                    "dk.brics.javascriptSlicer.unreachable";
                    cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
                // Add anti-cache in url if needed
                if (s.cache === false) {
                    "dk.brics.javascriptSlicer.unreachable";
                    s.url = rts.test(cacheURL) ? // If there is already a '_' parameter, set its value
                    cacheURL.replace(rts, "$1_=" + ajax_nonce++) : // Otherwise add one to the end
                    cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
                }
            }
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                "dk.brics.javascriptSlicer.unreachable";
                if (jQuery.lastModified[cacheURL]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                "dk.brics.javascriptSlicer.unreachable";
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            // Check for headers option
            for (i in s.headers) {
                "dk.brics.javascriptSlicer.unreachable";
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                "dk.brics.javascriptSlicer.unreachable";
                // Abort if not done already and return
                return jqXHR.abort();
            }
            // aborting is no longer a cancellation
            strAbort = "abort";
            // Install callbacks on deferreds
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                "dk.brics.javascriptSlicer.unreachable";
                jqXHR[i](s[i]);
            }
            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            if (!transport) {
                "dk.brics.javascriptSlicer.unreachable";
                done(-1, "No Transport");
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) {
                    "dk.brics.javascriptSlicer.unreachable";
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                // Timeout
                if (s.async && s.timeout > 0) {
                    "dk.brics.javascriptSlicer.unreachable";
                    timeoutTimer = setTimeout(function() {
                        "dk.brics.javascriptSlicer.unreachable";
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    "dk.brics.javascriptSlicer.unreachable";
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Propagate exception as error if not done
                    if (state < 2) {
                        "dk.brics.javascriptSlicer.unreachable";
                        done(-1, e);
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        throw e;
                    }
                }
            }
            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                "dk.brics.javascriptSlicer.unreachable";
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                // Called once
                if (state === 2) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return;
                }
                // State is "done" now
                state = 2;
                // Clear timeout if it exists
                if (timeoutTimer) {
                    "dk.brics.javascriptSlicer.unreachable";
                    clearTimeout(timeoutTimer);
                }
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
                // Cache response headers
                responseHeadersString = headers || "";
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                if (responses) {
                    "dk.brics.javascriptSlicer.unreachable";
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                if (isSuccess) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        "dk.brics.javascriptSlicer.unreachable";
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            "dk.brics.javascriptSlicer.unreachable";
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            "dk.brics.javascriptSlicer.unreachable";
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    // if no content
                    if (status === 204 || s.type === "HEAD") {
                        "dk.brics.javascriptSlicer.unreachable";
                        statusText = "nocontent";
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (status === 304) {
                            "dk.brics.javascriptSlicer.unreachable";
                            statusText = "notmodified";
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            statusText = response.state;
                            success = response.data;
                            error = response.error;
                            isSuccess = !error;
                        }
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    // We extract error from statusText
                    // then normalize statusText and status for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        "dk.brics.javascriptSlicer.unreachable";
                        statusText = "error";
                        if (status < 0) {
                            "dk.brics.javascriptSlicer.unreachable";
                            status = 0;
                        }
                    }
                }
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                if (isSuccess) {
                    "dk.brics.javascriptSlicer.unreachable";
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    "dk.brics.javascriptSlicer.unreachable";
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                }
                // Complete
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                if (fireGlobals) {
                    "dk.brics.javascriptSlicer.unreachable";
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    // Handle the global AJAX counter
                    if (!--jQuery.active) {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            "dk.brics.javascriptSlicer.unreachable";
            // shift arguments if data argument was omitted
            if (jQuery.isFunction(data)) {
                "dk.brics.javascriptSlicer.unreachable";
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
    function ajaxHandleResponses(s, jqXHR, responses) {
        "dk.brics.javascriptSlicer.unreachable";
        var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
            "dk.brics.javascriptSlicer.unreachable";
            dataTypes.shift();
            if (ct === undefined) {
                "dk.brics.javascriptSlicer.unreachable";
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        // Check if we're dealing with a known content-type
        if (ct) {
            "dk.brics.javascriptSlicer.unreachable";
            for (type in contents) {
                "dk.brics.javascriptSlicer.unreachable";
                if (contents[type] && contents[type].test(ct)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
            "dk.brics.javascriptSlicer.unreachable";
            finalDataType = dataTypes[0];
        } else {
            "dk.brics.javascriptSlicer.unreachable";
            // Try convertible dataTypes
            for (type in responses) {
                "dk.brics.javascriptSlicer.unreachable";
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    "dk.brics.javascriptSlicer.unreachable";
                    firstDataType = type;
                }
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            "dk.brics.javascriptSlicer.unreachable";
            if (finalDataType !== dataTypes[0]) {
                "dk.brics.javascriptSlicer.unreachable";
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        "dk.brics.javascriptSlicer.unreachable";
        var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        if (dataTypes[1]) {
            "dk.brics.javascriptSlicer.unreachable";
            for (conv in s.converters) {
                "dk.brics.javascriptSlicer.unreachable";
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift();
        // Convert to each sequential dataType
        while (current) {
            "dk.brics.javascriptSlicer.unreachable";
            if (s.responseFields[current]) {
                "dk.brics.javascriptSlicer.unreachable";
                jqXHR[s.responseFields[current]] = response;
            }
            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) {
                "dk.brics.javascriptSlicer.unreachable";
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                "dk.brics.javascriptSlicer.unreachable";
                // There's only work to do if current dataType is non-auto
                if (current === "*") {
                    "dk.brics.javascriptSlicer.unreachable";
                    current = prev;
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (prev !== "*" && prev !== current) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Seek a direct converter
                        conv = converters[prev + " " + current] || converters["* " + current];
                        // If none found, seek a pair
                        if (!conv) {
                            "dk.brics.javascriptSlicer.unreachable";
                            for (conv2 in converters) {
                                "dk.brics.javascriptSlicer.unreachable";
                                // If conv2 outputs current
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    // If prev can be converted to accepted input
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        "dk.brics.javascriptSlicer.unreachable";
                                        // Condense equivalence converters
                                        if (conv === true) {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            conv = converters[conv2];
                                        } else {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            if (converters[conv2] !== true) {
                                                "dk.brics.javascriptSlicer.unreachable";
                                                current = tmp[0];
                                                dataTypes.unshift(tmp[1]);
                                            }
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        // Apply converter (if not an equivalence)
                        if (conv !== true) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // Unless errors are allowed to bubble, catch and return them
                            if (conv && s["throws"]) {
                                "dk.brics.javascriptSlicer.unreachable";
                                response = conv(response);
                            } else {
                                "dk.brics.javascriptSlicer.unreachable";
                                try {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    response = conv(response);
                                } catch (e) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    };
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                "dk.brics.javascriptSlicer.unreachable";
                //	jQuery.globalEval( text );
                return text;
            }
        }
    });
    // Handle cache's special case and global
    jQuery.ajaxPrefilter("script", function(s) {
        "dk.brics.javascriptSlicer.unreachable";
        if (s.cache === undefined) {
            "dk.brics.javascriptSlicer.unreachable";
            s.cache = false;
        }
        if (s.crossDomain) {
            "dk.brics.javascriptSlicer.unreachable";
            s.type = "GET";
            s.global = false;
        }
    });
    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) {
        "dk.brics.javascriptSlicer.unreachable";
        // This transport only deals with cross domain requests
        if (s.crossDomain) {
            "dk.brics.javascriptSlicer.unreachable";
            var script, head = document.head || jQuery("head")[0] || document.documentElement;
            return {
                send: function(_, callback) {
                    "dk.brics.javascriptSlicer.unreachable";
                    script = document.createElement("script");
                    script.async = true;
                    if (s.scriptCharset) {
                        "dk.brics.javascriptSlicer.unreachable";
                        script.charset = s.scriptCharset;
                    }
                    script.src = s.url;
                    // Attach handlers for all browsers
                    script.onload = script.onreadystatechange = function(_, isAbort) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // Handle memory leak in IE
                            script.onload = script.onreadystatechange = null;
                            // Remove the script
                            if (script.parentNode) {
                                "dk.brics.javascriptSlicer.unreachable";
                                script.parentNode.removeChild(script);
                            }
                            // Dereference the script
                            script = null;
                            // Callback if not abort
                            if (!isAbort) {
                                "dk.brics.javascriptSlicer.unreachable";
                                callback(200, "success");
                            }
                        }
                    };
                    // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    head.insertBefore(script, head.firstChild);
                },
                abort: function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (script) {
                        "dk.brics.javascriptSlicer.unreachable";
                        script.onload(undefined, true);
                    }
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            "dk.brics.javascriptSlicer.unreachable";
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
            this[callback] = true;
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        "dk.brics.javascriptSlicer.unreachable";
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            "dk.brics.javascriptSlicer.unreachable";
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            // Insert callback into url or form data
            if (jsonProp) {
                "dk.brics.javascriptSlicer.unreachable";
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                if (s.jsonp !== false) {
                    "dk.brics.javascriptSlicer.unreachable";
                    s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                }
            }
            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                "dk.brics.javascriptSlicer.unreachable";
                if (!responseContainer) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            // force json dataType
            s.dataTypes[0] = "json";
            // Install callback
            overwritten = window[callbackName];
            window[callbackName] = function() {
                "dk.brics.javascriptSlicer.unreachable";
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                "dk.brics.javascriptSlicer.unreachable";
                // Restore preexisting value
                window[callbackName] = overwritten;
                // Save back as free
                if (s[callbackName]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    // make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // save the callback name for future use
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    var xhrCallbacks, xhrSupported, xhrId = 0, // #5280: Internet Explorer will keep connections alive if we don't abort on unload
    xhrOnUnloadAbort = window.ActiveXObject && function() {
        "dk.brics.javascriptSlicer.unreachable";
        // Abort all pending requests
        var key;
        for (key in xhrCallbacks) {
            "dk.brics.javascriptSlicer.unreachable";
            xhrCallbacks[key](undefined, true);
        }
    };
    // Functions to create xhrs
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    }
    function createActiveXHR() {
        "dk.brics.javascriptSlicer.unreachable";
        try {
            "dk.brics.javascriptSlicer.unreachable";
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    // Create the request object
    // (This is still attached to ajaxSettings for backward compatibility)
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? /* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
    function() {
        "dk.brics.javascriptSlicer.unreachable";
        return !this.isLocal && createStandardXHR() || createActiveXHR();
    } : // For all other browsers, use the standard XMLHttpRequest object
    createStandardXHR;
    // Determine support properties
    xhrSupported = jQuery.ajaxSettings.xhr();
    jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    xhrSupported = jQuery.support.ajax = !!xhrSupported;
    // Create transport if the browser can provide an xhr
    if (xhrSupported) {
        jQuery.ajaxTransport(function(s) {
            "dk.brics.javascriptSlicer.unreachable";
            // Cross domain only allowed if supported through XMLHttpRequest
            if (!s.crossDomain || jQuery.support.cors) {
                "dk.brics.javascriptSlicer.unreachable";
                var callback;
                return {
                    send: function(headers, complete) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // Get a new xhr
                        var handle, i, xhr = s.xhr();
                        // Open the socket
                        // Passing null username, generates a login popup on Opera (#2865)
                        if (s.username) {
                            "dk.brics.javascriptSlicer.unreachable";
                            xhr.open(s.type, s.url, s.async, s.username, s.password);
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            xhr.open(s.type, s.url, s.async);
                        }
                        // Apply custom fields if provided
                        if (s.xhrFields) {
                            "dk.brics.javascriptSlicer.unreachable";
                            for (i in s.xhrFields) {
                                "dk.brics.javascriptSlicer.unreachable";
                                xhr[i] = s.xhrFields[i];
                            }
                        }
                        // Override mime type if needed
                        if (s.mimeType && xhr.overrideMimeType) {
                            "dk.brics.javascriptSlicer.unreachable";
                            xhr.overrideMimeType(s.mimeType);
                        }
                        // X-Requested-With header
                        // For cross-domain requests, seeing as conditions for a preflight are
                        // akin to a jigsaw puzzle, we simply never set it to be sure.
                        // (it can always be set on a per-request basis or even using ajaxSetup)
                        // For same-domain requests, won't change header if already provided.
                        if (!s.crossDomain && !headers["X-Requested-With"]) {
                            "dk.brics.javascriptSlicer.unreachable";
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        // Need an extra try/catch for cross domain requests in Firefox 3
                        try {
                            "dk.brics.javascriptSlicer.unreachable";
                            for (i in headers) {
                                "dk.brics.javascriptSlicer.unreachable";
                                xhr.setRequestHeader(i, headers[i]);
                            }
                        } catch (err) {}
                        // Do send the request
                        // This may raise an exception which is actually
                        // handled in jQuery.ajax (so no try/catch here)
                        xhr.send(s.hasContent && s.data || null);
                        // Listener
                        callback = function(_, isAbort) {
                            "dk.brics.javascriptSlicer.unreachable";
                            var status, responseHeaders, statusText, responses;
                            // Firefox throws exceptions when accessing properties
                            // of an xhr when a network error occurred
                            // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
                            try {
                                "dk.brics.javascriptSlicer.unreachable";
                                // Was never called and is aborted or complete
                                if (callback && (isAbort || xhr.readyState === 4)) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    // Only called once
                                    callback = undefined;
                                    // Do not keep as active anymore
                                    if (handle) {
                                        "dk.brics.javascriptSlicer.unreachable";
                                        xhr.onreadystatechange = jQuery.noop;
                                        if (xhrOnUnloadAbort) {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            delete xhrCallbacks[handle];
                                        }
                                    }
                                    // If it's an abort
                                    if (isAbort) {
                                        "dk.brics.javascriptSlicer.unreachable";
                                        // Abort it manually if needed
                                        if (xhr.readyState !== 4) {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            xhr.abort();
                                        }
                                    } else {
                                        "dk.brics.javascriptSlicer.unreachable";
                                        responses = {};
                                        status = xhr.status;
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        // When requesting binary data, IE6-9 will throw an exception
                                        // on any attempt to access responseText (#11426)
                                        if (typeof xhr.responseText === "string") {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            responses.text = xhr.responseText;
                                        }
                                        // Firefox throws an exception when accessing
                                        // statusText for faulty cross-domain requests
                                        try {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            statusText = xhr.statusText;
                                        } catch (e) {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            // We normalize with Webkit giving an empty statusText
                                            statusText = "";
                                        }
                                        // Filter status for non standard behaviors
                                        // If the request is local and we have data: assume a success
                                        // (success with no data won't get notified, that's the best we
                                        // can do given current implementations)
                                        if (!status && s.isLocal && !s.crossDomain) {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            status = responses.text ? 200 : 404;
                                        } else {
                                            "dk.brics.javascriptSlicer.unreachable";
                                            if (status === 1223) {
                                                "dk.brics.javascriptSlicer.unreachable";
                                                status = 204;
                                            }
                                        }
                                    }
                                }
                            } catch (firefoxAccessException) {
                                "dk.brics.javascriptSlicer.unreachable";
                                if (!isAbort) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    complete(-1, firefoxAccessException);
                                }
                            }
                            // Call complete if needed
                            if (responses) {
                                "dk.brics.javascriptSlicer.unreachable";
                                complete(status, statusText, responses, responseHeaders);
                            }
                        };
                        if (!s.async) {
                            "dk.brics.javascriptSlicer.unreachable";
                            // if we're in sync mode we fire the callback
                            callback();
                        } else {
                            "dk.brics.javascriptSlicer.unreachable";
                            if (xhr.readyState === 4) {
                                "dk.brics.javascriptSlicer.unreachable";
                                // (IE6 & IE7) if it's in cache and has been
                                // retrieved directly we need to fire the callback
                                setTimeout(callback);
                            } else {
                                "dk.brics.javascriptSlicer.unreachable";
                                handle = ++xhrId;
                                if (xhrOnUnloadAbort) {
                                    "dk.brics.javascriptSlicer.unreachable";
                                    // Create the active xhrs callbacks list if needed
                                    // and attach the unload handler
                                    if (!xhrCallbacks) {
                                        "dk.brics.javascriptSlicer.unreachable";
                                        xhrCallbacks = {};
                                        jQuery(window).unload(xhrOnUnloadAbort);
                                    }
                                    // Add to list of active xhrs callbacks
                                    xhrCallbacks[handle] = callback;
                                }
                                xhr.onreadystatechange = callback;
                            }
                        }
                    },
                    abort: function() {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (callback) {
                            "dk.brics.javascriptSlicer.unreachable";
                            callback(undefined, true);
                        }
                    }
                };
            }
        });
    }
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            "dk.brics.javascriptSlicer.unreachable";
            var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
            start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
            if (start && start[3] !== unit) {
                "dk.brics.javascriptSlicer.unreachable";
                // Trust units reported by jQuery.css
                unit = unit || start[3];
                // Make sure we update the tween properties later on
                parts = parts || [];
                // Iteratively approximate from a nonzero starting point
                start = +target || 1;
                do {
                    "dk.brics.javascriptSlicer.unreachable";
                    // If previous iteration zeroed out, double until we get *something*
                    // Use a string for doubling factor so we don't accidentally see scale as unchanged below
                    scale = scale || ".5";
                    // Adjust and apply
                    start = start / scale;
                    jQuery.style(tween.elem, prop, start + unit);
                } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
            }
            // Update tween properties
            if (parts) {
                "dk.brics.javascriptSlicer.unreachable";
                tween.unit = unit;
                tween.start = +start || +target || 0;
                // If a +=/-= token was provided, we're doing a relative animation
                tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
            }
            return tween;
        } ]
    };
    // Animations created synchronously will run synchronously
    function createFxNow() {
        "dk.brics.javascriptSlicer.unreachable";
        setTimeout(function() {
            "dk.brics.javascriptSlicer.unreachable";
            fxNow = undefined;
        });
        return fxNow = jQuery.now();
    }
    function createTween(value, prop, animation) {
        "dk.brics.javascriptSlicer.unreachable";
        var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
        for (;index < length; index++) {
            "dk.brics.javascriptSlicer.unreachable";
            if (tween = collection[index].call(animation, prop, value)) {
                "dk.brics.javascriptSlicer.unreachable";
                // we're done with this property
                return tween;
            }
        }
    }
    function Animation(elem, properties, options) {
        "dk.brics.javascriptSlicer.unreachable";
        var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            "dk.brics.javascriptSlicer.unreachable";
            // don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function() {
            "dk.brics.javascriptSlicer.unreachable";
            if (stopped) {
                "dk.brics.javascriptSlicer.unreachable";
                return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
            temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for (;index < length; index++) {
                "dk.brics.javascriptSlicer.unreachable";
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            if (percent < 1 && length) {
                "dk.brics.javascriptSlicer.unreachable";
                return remaining;
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                "dk.brics.javascriptSlicer.unreachable";
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                "dk.brics.javascriptSlicer.unreachable";
                var index = 0, // if we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return this;
                }
                stopped = true;
                for (;index < length; index++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    animation.tweens[index].run(1);
                }
                // resolve when we played the last frame
                // otherwise, reject
                if (gotoEnd) {
                    "dk.brics.javascriptSlicer.unreachable";
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
            "dk.brics.javascriptSlicer.unreachable";
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                "dk.brics.javascriptSlicer.unreachable";
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            "dk.brics.javascriptSlicer.unreachable";
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        // attach callbacks from options
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    function propFilter(props, specialEasing) {
        "dk.brics.javascriptSlicer.unreachable";
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        for (index in props) {
            "dk.brics.javascriptSlicer.unreachable";
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                "dk.brics.javascriptSlicer.unreachable";
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                "dk.brics.javascriptSlicer.unreachable";
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                "dk.brics.javascriptSlicer.unreachable";
                value = hooks.expand(value);
                delete props[name];
                // not quite $.extend, this wont overwrite keys already present.
                // also - reusing 'index' from above because we have the correct "name"
                for (index in value) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!(index in props)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                specialEasing[name] = easing;
            }
        }
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            "dk.brics.javascriptSlicer.unreachable";
            if (jQuery.isFunction(props)) {
                "dk.brics.javascriptSlicer.unreachable";
                callback = props;
                props = [ "*" ];
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                props = props.split(" ");
            }
            var prop, index = 0, length = props.length;
            for (;index < length; index++) {
                "dk.brics.javascriptSlicer.unreachable";
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback);
            }
        },
        prefilter: function(callback, prepend) {
            "dk.brics.javascriptSlicer.unreachable";
            if (prepend) {
                "dk.brics.javascriptSlicer.unreachable";
                animationPrefilters.unshift(callback);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                animationPrefilters.push(callback);
            }
        }
    });
    function defaultPrefilter(elem, props, opts) {
        "dk.brics.javascriptSlicer.unreachable";
        /* jshint validthis: true */
        var prop, value, toggle, tween, hooks, oldfire, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery._data(elem, "fxshow");
        // handle queue: false promises
        if (!opts.queue) {
            "dk.brics.javascriptSlicer.unreachable";
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                "dk.brics.javascriptSlicer.unreachable";
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (!hooks.unqueued) {
                        "dk.brics.javascriptSlicer.unreachable";
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                "dk.brics.javascriptSlicer.unreachable";
                // doing this makes sure that the complete handler will be called
                // before this completes
                anim.always(function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        "dk.brics.javascriptSlicer.unreachable";
                        hooks.empty.fire();
                    }
                });
            });
        }
        // height/width overflow pass
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            "dk.brics.javascriptSlicer.unreachable";
            // Make sure that nothing sneaks out
            // Record all 3 overflow attributes because IE does not
            // change the overflow attribute when overflowX and
            // overflowY are set to the same value
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            // Set display property to inline-block for height/width
            // animations on inline elements that are having width/height animated
            if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
                "dk.brics.javascriptSlicer.unreachable";
                // inline-level elements accept inline-block;
                // block-level elements need to be inline with layout
                if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                    "dk.brics.javascriptSlicer.unreachable";
                    style.display = "inline-block";
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    style.zoom = 1;
                }
            }
        }
        if (opts.overflow) {
            "dk.brics.javascriptSlicer.unreachable";
            style.overflow = "hidden";
            if (!jQuery.support.shrinkWrapBlocks) {
                "dk.brics.javascriptSlicer.unreachable";
                anim.always(function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
        }
        // show/hide pass
        for (prop in props) {
            "dk.brics.javascriptSlicer.unreachable";
            value = props[prop];
            if (rfxtypes.exec(value)) {
                "dk.brics.javascriptSlicer.unreachable";
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    "dk.brics.javascriptSlicer.unreachable";
                    continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            "dk.brics.javascriptSlicer.unreachable";
            if (dataShow) {
                "dk.brics.javascriptSlicer.unreachable";
                if ("hidden" in dataShow) {
                    "dk.brics.javascriptSlicer.unreachable";
                    hidden = dataShow.hidden;
                }
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                dataShow = jQuery._data(elem, "fxshow", {});
            }
            // store state if its toggle - enables .stop().toggle() to "reverse"
            if (toggle) {
                "dk.brics.javascriptSlicer.unreachable";
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery(elem).show();
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                anim.done(function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                "dk.brics.javascriptSlicer.unreachable";
                var prop;
                jQuery._removeData(elem, "fxshow");
                for (prop in orig) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                "dk.brics.javascriptSlicer.unreachable";
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        "dk.brics.javascriptSlicer.unreachable";
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        }
    }
    function Tween(elem, options, prop, end, easing) {
        "dk.brics.javascriptSlicer.unreachable";
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            "dk.brics.javascriptSlicer.unreachable";
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            "dk.brics.javascriptSlicer.unreachable";
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            "dk.brics.javascriptSlicer.unreachable";
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                "dk.brics.javascriptSlicer.unreachable";
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                "dk.brics.javascriptSlicer.unreachable";
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                "dk.brics.javascriptSlicer.unreachable";
                hooks.set(this);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                "dk.brics.javascriptSlicer.unreachable";
                var result;
                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return tween.elem[tween.prop];
                }
                // passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails
                // so, simple values such as "10px" are parsed to Float.
                // complex values such as "rotate(1rad)" are returned as is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                "dk.brics.javascriptSlicer.unreachable";
                // use step hook for back compat - use cssHook if its there - use .style if its
                // available and use plain properties where available
                if (jQuery.fx.step[tween.prop]) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.fx.step[tween.prop](tween);
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                        "dk.brics.javascriptSlicer.unreachable";
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                    } else {
                        "dk.brics.javascriptSlicer.unreachable";
                        tween.elem[tween.prop] = tween.now;
                    }
                }
            }
        }
    };
    // Support: IE <=9
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            "dk.brics.javascriptSlicer.unreachable";
            if (tween.elem.nodeType && tween.elem.parentNode) {
                "dk.brics.javascriptSlicer.unreachable";
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            "dk.brics.javascriptSlicer.unreachable";
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            "dk.brics.javascriptSlicer.unreachable";
            // show any hidden elements after setting opacity to 0
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            "dk.brics.javascriptSlicer.unreachable";
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                "dk.brics.javascriptSlicer.unreachable";
                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                doAnimation.finish = function() {
                    "dk.brics.javascriptSlicer.unreachable";
                    anim.stop(true);
                };
                // Empty animations, or finishing resolves immediately
                if (empty || jQuery._data(this, "finish")) {
                    "dk.brics.javascriptSlicer.unreachable";
                    anim.stop(true);
                }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            "dk.brics.javascriptSlicer.unreachable";
            var stopQueue = function(hooks) {
                "dk.brics.javascriptSlicer.unreachable";
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                "dk.brics.javascriptSlicer.unreachable";
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                "dk.brics.javascriptSlicer.unreachable";
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = jQuery._data(this);
                if (index) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (data[index] && data[index].stop) {
                        "dk.brics.javascriptSlicer.unreachable";
                        stopQueue(data[index]);
                    }
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    for (index in data) {
                        "dk.brics.javascriptSlicer.unreachable";
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            "dk.brics.javascriptSlicer.unreachable";
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                // start the next in the queue if the last step wasn't forced
                // timers currently will call their complete callbacks, which will dequeue
                // but only if they were gotoEnd
                if (dequeue || !gotoEnd) {
                    "dk.brics.javascriptSlicer.unreachable";
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function(type) {
            "dk.brics.javascriptSlicer.unreachable";
            if (type !== false) {
                "dk.brics.javascriptSlicer.unreachable";
                type = type || "fx";
            }
            return this.each(function() {
                "dk.brics.javascriptSlicer.unreachable";
                var index, data = jQuery._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                // enable finishing flag on private data
                data.finish = true;
                // empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.cur && hooks.cur.finish) {
                    "dk.brics.javascriptSlicer.unreachable";
                    hooks.cur.finish.call(this);
                }
                // look for any active animations, and finish them
                for (index = timers.length; index--; ) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (timers[index].elem === this && timers[index].queue === type) {
                        "dk.brics.javascriptSlicer.unreachable";
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }
                // look for any animations in the old queue and finish them
                for (index = 0; index < length; index++) {
                    "dk.brics.javascriptSlicer.unreachable";
                    if (queue[index] && queue[index].finish) {
                        "dk.brics.javascriptSlicer.unreachable";
                        queue[index].finish.call(this);
                    }
                }
                // turn off finishing flag
                delete data.finish;
            });
        }
    });
    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, attrs = {
            height: type
        }, i = 0;
        // if we include width, step value is 1 to do all cssExpand values,
        // if we don't include width, step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            "dk.brics.javascriptSlicer.unreachable";
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }
    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            "dk.brics.javascriptSlicer.unreachable";
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.speed = function(speed, easing, fn) {
        "dk.brics.javascriptSlicer.unreachable";
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        // normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) {
            "dk.brics.javascriptSlicer.unreachable";
            opt.queue = "fx";
        }
        // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            "dk.brics.javascriptSlicer.unreachable";
            if (jQuery.isFunction(opt.old)) {
                "dk.brics.javascriptSlicer.unreachable";
                opt.old.call(this);
            }
            if (opt.queue) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.easing = {
        linear: function(p) {
            "dk.brics.javascriptSlicer.unreachable";
            return p;
        },
        swing: function(p) {
            "dk.brics.javascriptSlicer.unreachable";
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    };
    jQuery.timers = [];
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.tick = function() {
        "dk.brics.javascriptSlicer.unreachable";
        var timer, timers = jQuery.timers, i = 0;
        fxNow = jQuery.now();
        for (;i < timers.length; i++) {
            "dk.brics.javascriptSlicer.unreachable";
            timer = timers[i];
            // Checks the timer has not already been removed
            if (!timer() && timers[i] === timer) {
                "dk.brics.javascriptSlicer.unreachable";
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        "dk.brics.javascriptSlicer.unreachable";
        if (timer() && jQuery.timers.push(timer)) {
            "dk.brics.javascriptSlicer.unreachable";
            jQuery.fx.start();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        "dk.brics.javascriptSlicer.unreachable";
        if (!timerId) {
            "dk.brics.javascriptSlicer.unreachable";
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        "dk.brics.javascriptSlicer.unreachable";
        clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Back Compat <1.8 extension point
    jQuery.fx.step = {};
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.animated = function(elem) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.grep(jQuery.timers, function(fn) {
                "dk.brics.javascriptSlicer.unreachable";
                return elem === fn.elem;
            }).length;
        };
    }
    jQuery.fn.offset = function(options) {
        "dk.brics.javascriptSlicer.unreachable";
        if (arguments.length) {
            "dk.brics.javascriptSlicer.unreachable";
            return options === undefined ? this : this.each(function(i) {
                "dk.brics.javascriptSlicer.unreachable";
                jQuery.offset.setOffset(this, options, i);
            });
        }
        var docElem, win, box = {
            top: 0,
            left: 0
        }, elem = this[0], doc = elem && elem.ownerDocument;
        if (!doc) {
            "dk.brics.javascriptSlicer.unreachable";
            return;
        }
        docElem = doc.documentElement;
        // Make sure it's not a disconnected DOM node
        if (!jQuery.contains(docElem, elem)) {
            "dk.brics.javascriptSlicer.unreachable";
            return box;
        }
        // If we don't have gBCR, just use 0,0 rather than error
        // BlackBerry 5, iOS 3 (original iPhone)
        if (typeof elem.getBoundingClientRect !== core_strundefined) {
            "dk.brics.javascriptSlicer.unreachable";
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
            left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        };
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            "dk.brics.javascriptSlicer.unreachable";
            var position = jQuery.css(elem, "position");
            // set position first, in-case top/left are set even on static elem
            if (position === "static") {
                "dk.brics.javascriptSlicer.unreachable";
                elem.style.position = "relative";
            }
            var curElem = jQuery(elem), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [ curCSSTop, curCSSLeft ]) > -1, props = {}, curPosition = {}, curTop, curLeft;
            // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                "dk.brics.javascriptSlicer.unreachable";
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                "dk.brics.javascriptSlicer.unreachable";
                options = options.call(elem, i, curOffset);
            }
            if (options.top != null) {
                "dk.brics.javascriptSlicer.unreachable";
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                "dk.brics.javascriptSlicer.unreachable";
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                "dk.brics.javascriptSlicer.unreachable";
                options.using.call(elem, props);
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        position: function() {
            "dk.brics.javascriptSlicer.unreachable";
            if (!this[0]) {
                "dk.brics.javascriptSlicer.unreachable";
                return;
            }
            var offsetParent, offset, parentOffset = {
                top: 0,
                left: 0
            }, elem = this[0];
            // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
            if (jQuery.css(elem, "position") === "fixed") {
                "dk.brics.javascriptSlicer.unreachable";
                // we assume that getBoundingClientRect is available when computed position is fixed
                offset = elem.getBoundingClientRect();
            } else {
                "dk.brics.javascriptSlicer.unreachable";
                // Get *real* offsetParent
                offsetParent = this.offsetParent();
                // Get correct offsets
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    "dk.brics.javascriptSlicer.unreachable";
                    parentOffset = offsetParent.offset();
                }
                // Add offsetParent borders
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            // Subtract parent offsets and element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function() {
            "dk.brics.javascriptSlicer.unreachable";
            return this.map(function() {
                "dk.brics.javascriptSlicer.unreachable";
                var offsetParent = this.offsetParent || docElem;
                while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
                    "dk.brics.javascriptSlicer.unreachable";
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || docElem;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = /Y/.test(prop);
        jQuery.fn[method] = function(val) {
            "dk.brics.javascriptSlicer.unreachable";
            return jQuery.access(this, function(elem, method, val) {
                "dk.brics.javascriptSlicer.unreachable";
                var win = getWindow(elem);
                if (val === undefined) {
                    "dk.brics.javascriptSlicer.unreachable";
                    return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
                }
                if (win) {
                    "dk.brics.javascriptSlicer.unreachable";
                    win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
                } else {
                    "dk.brics.javascriptSlicer.unreachable";
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });
    function getWindow(elem) {
        "dk.brics.javascriptSlicer.unreachable";
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
    }
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                "dk.brics.javascriptSlicer.unreachable";
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return jQuery.access(this, function(elem, type, value) {
                    "dk.brics.javascriptSlicer.unreachable";
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        "dk.brics.javascriptSlicer.unreachable";
                        // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                        // isn't a whole lot we can do. See pull request at this URL for discussion:
                        // https://github.com/jquery/jquery/pull/764
                        return elem.document.documentElement["client" + name];
                    }
                    // Get document width or height
                    if (elem.nodeType === 9) {
                        "dk.brics.javascriptSlicer.unreachable";
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
                        // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) : // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    // Limit scope pollution from any deprecated API
    // (function() {
    // The number of elements contained in the matched element set
    jQuery.fn.size = function() {
        "dk.brics.javascriptSlicer.unreachable";
        return this.length;
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    // })();
    if (typeof module === "object" && typeof module.exports === "object") {
        "dk.brics.javascriptSlicer.unreachable";
        // Expose jQuery as module.exports in loaders that implement the Node
        // module pattern (including browserify). Do not create the global, since
        // the user will be storing it themselves locally, and globals are frowned
        // upon in the Node module world.
        module.exports = jQuery;
    } else {
        // Otherwise expose jQuery to the global object as usual
        window.jQuery = window.$ = jQuery;
        // Register as a named AMD module, since jQuery can be concatenated with other
        // files that may use define, but not via a proper concatenation script that
        // understands anonymous AMD modules. A named AMD is safest and most robust
        // way to register. Lowercase jquery is used because AMD module names are
        // derived from file names, and jQuery is normally delivered in a lowercase
        // file name. Do this after creating the global so that if an AMD module wants
        // to call noConflict to hide this version of jQuery, it will work.
        if (typeof define === "function" && define.amd) {
            "dk.brics.javascriptSlicer.unreachable";
            define("jquery", [], function() {
                "dk.brics.javascriptSlicer.unreachable";
                return jQuery;
            });
        }
    }
})(window);
