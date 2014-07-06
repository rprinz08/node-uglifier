node-uglifier
=========

As I have just completed a huge pure Nodejs project in 80+ files. I started to search for methods to have at least a minimal protection for my server side code.
I found no simple solution that could handle the **NodeJS** module system so I created **node-uglifier**. My almost 500Kb code in about 80 files got packed into a single file with around 150Kb size.

how it works
--------

It visits all "required" files recursively. It merges all your files into a single one (core and npm modules aside). Than you can apply uglify to that single merged file.
A combined file has the benefit of removing module name and module structure information as well. Making reverse engineering a bit harder.

You can find examples in the lib_compiled/test/unitTest.js. Here is a taste of how it works.

##Commands

* npm install "node-uglifier"
* NodeUglifier = require("node-uglifier");
* nodeUglifier = new NodeUglifier("lib_compiled/test/testproject/main.js");
* mergedSource = nodeUglifier.merge().uglify().toString();
### export
* nodeUglifier.exportToFile("lib_compiled/test/resultFiles/simpleMergeWithFilterAndUglify.js")
* nodeUglifier.exportSourceMaps("lib_compiled/test/resultFiles/sourcemaps/simpleMergeWithFilterAndUglify.js");

### one liner
*  (new NodeUglifier("lib_compiled/test/testproject/main.js")).uglify().exportToFile("lib_compiled/test/resultFiles/simpleMergeWithFilterAndUglify.js");


Extra
--------
You can keep files external if you pass an option to the NodeUglifier class.

* nodeUglifier=new NodeUglifier("lib_compiled/test/testproject/main.js",{mergeFileFilter:["./lib_static/test/","./depa/constants.js"]})

They will be copied to the ./lib_external folder and references to them will be modified in the merged file.

It handles as well: new(require(module))(constructorParams)

Notes
--------
Obviously you need to avoid cycles in your merged dependencies.

I like programing in high level interpreted languages but I hate filthy thieves, blackhat hackers. They can steal the fruit of your hard work in just a fraction of the time of that it took you to create it.
If you have any idea, contribution how to protect a full NodeJS app even better, obfuscate it better just contact me. I would like to make this project
a one stop shop for NodeJs project protection.
