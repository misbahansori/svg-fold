// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('svg-fold.foldAllSVGTag', function () {
		// The code you place here will be executed every time your command is executed
		const document = vscode.window.activeTextEditor.document

		const openingSvgRegex = /<svg/g
		const closingSvgRegex = /svg>/g
		let svgOpeningLineNumbers = []

		let openingSvgTagDetected = false

		for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
			let line = document.lineAt(lineNumber)

			if (openingSvgRegex.test(line.text)) {
				svgOpeningLineNumbers.push(lineNumber)
				openingSvgTagDetected = true
			}

			if (closingSvgRegex.test(line.text) && openingSvgTagDetected) {
				openingSvgTagDetected = false
			}
		}

		// Execute command to fold the svg
		vscode.commands.executeCommand('editor.fold', {
			level: 1,
			direction: 'down',
			selectionLines: svgOpeningLineNumbers
		})
	})

	context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
