// This is the source code of xpm.

var arg = Deno.args


function displayHelp() {
    console.log("xpm [options]")
    console.log("This is in beta stage. The commands may not be implemented yet.")
    console.log("Options:")
    console.log("   sync        Sync mirrors")
    console.log("   install     Install packages")
    console.log("   update      Update packages")
    console.log("   remove      Remove packages")
    console.log("   search      Search packages")
}


function parseCmd(arg) {
    console.log(`This is the thing that appears in xpm.\n\t${arg}\n`)    
}

console.log(arg)
console.log(arg.length)
if (arg.length < 1) {
    displayHelp() 
} else {
    parseCmd(arg)
}

// console.log(arg)
