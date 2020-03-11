# Build a dev env - node modules {Node, NPM, Jest} #

The plan:
	
	->Build a small feature - a maths app

			-> Build a test file using matchers running positive tests

					-> Build a test file using matchers running negative tests

						->Enhance your environment for editing and version control

							->Sync to git

								->Edit in Visual Studio
                
## Install your runtime environment ##               
You can install Node from this link. 

This will launch a Windows MSI installer to place the application on your PC. 

Accept all the installer defaults. 

If you have applications like Visual Studio installed, you may be asked if you want to integrate with it. This is not necessary for this tutorial. 

## Build dev environment ##
Create app folders-
C:\dev\jst

From a command prompt inside the jst folder, initialise the dev folder:
 npm init -y  
  
(The ‘-y’ switch means the initialisation defaults are accepted so you don’t have to provide all the information indicated by the “ “ as the application folders are being created)

## Add a command shortcut ## (optional)
Create a CMD shortcut in the jst folder:

Right-click in folder. ‘New’->’Shortcut’ -> follow the wizard

C:\Windows\System32\cmd.exe /K "cd C:\dev\jst"

When opening the prompt, remember to do it as an admin so you can carry out actions like installation and updating applications.

