
define([
    "wilton/fs"
], function(fs) {
    
    return {
        getCurrentDirectory: function() {
            return fs.realpath(".");
        },

        fileExists: function(path) {
            return fs.exists(path) && fs.stat(path).isFile;
        },

        write: function(msg) {
            print(msg);
        },

        exit: function() {
        },

        getExecutingFilePath_: function() {
            return ".";
        },

        directoryExists: function(path) {
            return fs.exists(path) && fs.stat(path).isDirectory;
        },

        readFile: function(path) {
            return fs.readFile(path);
        },

        writeFile: function(path, data) {
            fs.writeFile(path, data);
        },

        newLine: '\n'
    };
});
