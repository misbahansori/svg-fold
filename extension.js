// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "svg-collapse" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('svg-collapse.foldAllSVGTag', function () {
		// The code you place here will be executed every time your command is executed
		// TODO:
		// Get the document content
		console.log(vscode.window.activeTextEditor.document.getText());

		// Traverse through each line to find tag <svg
		// Determine the opening and closing svg tag
		// Set the line to an array

		// Execute command to fold the svg
		console.log(vscode.commands.executeCommand('editor.fold', { selectionLines: [2, 56]}))

		// Display a message box to the user
		vscode.window.showInformationMessage('SVG tag folded.');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
