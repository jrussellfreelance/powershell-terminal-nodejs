## Powershell Terminal built with ASP.NET
This is a web-based terminal / script runner for powershell.  It is built in Node.js.

This project was my first attempt at a remote powershell terminal, and for some reason I chose to build it with node.js.  Since then I've built another one with ASP.NET and C#.  [Check it out...](https://github.com/JacFearsome/powershell-terminal-asp)

Creating a web-based powershell terminal enables you to remotely run powershell through your web browser.  While this introduces tons of security concerns, I think it is a powerful concept that is worth considering.

My implementation is very basic, there is no security, so I would only run it locally.

It consists of a editor pane and an output pane, like Powershell ISE.  You can save scripts, but right now you can't actually access them through the app for reuse.  There is an input for you to search for cmdlets as well.

To try it out, clone the project:

`git clone https://github.com/JacFearsome/powershell-terminal-nodejs.git`

Install the node module dependencies:
	
`cd powershell-terminal-nodejs && npm install`

Run the app:

`node server.js`

And finally, go to http://localhost:7878/ in your web browser.

As I mention in the app, you must pipe a cmdlet to Out-String if you want to see the results display properly, for example:

`Get-Process | Out-String`