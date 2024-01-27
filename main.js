// This is the source code of xpm.
import { parse } from "https://deno.land/std/flags/mod.ts"
// import { split } from 'https://deno.land/x/split/mod.ts';
var arg = Deno.args

const args = parse(arg, {
    alias: {
        "help": "h",
        "install": "i",
        "refresh": "r",
        "update": "u",
        "search": "s"
    },
    boolean: ["h", "i", "r", "u", "s"],
})

function displayHelp() {
    console.log("xpm [options]")
    console.log("This is in beta stage. The commands may not be implemented yet.")
    console.log("Options:")
    console.log("   sync        Sync mirrors")
    console.log("   install     Install packages")
    console.log("   update      Update packages")
    console.log("   remove      Remove packages")
    console.log("   search      Search packages")
    console.log(args["_"])
}

function parseCmd(arg) {
    console.log(`This is the thing that appears in xpm.\n\t${arg}\n`)
    if (args["s"] == true || args["search"] == true) {
	console.log("Search has been executed.")
	const query = args["_"]
	const c = Deno.run({cmd: ["xbps-query", "-Rs", query]})
	console.log(c.status())
    } else if (args["i"] == true || args["install"] == true) {
	console.log("Installation has been executed")
	const inst = args["_"]
	console.log(inst)
	const inst_rp = String(inst).replace(",", " ")
	const i = Deno.run({cmd: ["xbps-install", inst]})
	console.log(i.status())
    }
}

console.log(arg)
console.log(arg.length)
if (arg.length < 1) {
    displayHelp() 
} else {
    parseCmd(arg)
}

// console.log(arg)
