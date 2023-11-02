// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const extensionId = 'redhat.vscode-yaml'
const extensions = vscode.extensions.all

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const requiredExtension = extensions.find(ext => ext.id === extensionId)

	if (!requiredExtension) {
		vscode.window.showInformationMessage("This extension requires RedHat YAML extension. Please install this extension to make use of YAML support.")
	}
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
