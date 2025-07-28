const { run } = require("./function-mapper");
const core = require("@actions/core");

const force = core.getInput("force");
const mapfile = core.getInput("mapping-file");
const files = core.getInput("files");
const groups = core.getInput("groups");
const names = core.getInput("names");
const debug = core.getInput("debug");

try {
	const outputValue = run(force, mapfile, files, groups, names, debug);
	core.setOutput("deploy-command", outputValue);
} catch (error) {
	core.setFailed(error.message);
}
