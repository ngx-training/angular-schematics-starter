# Mini-Workshop: Angular Schematics

This is a repository for angular schematics mini-workshop at Angular Meetup Dresden.

## Pre-Requirements

* Node v10+
* Angular v7+

## Installation

### Step 1: Install pre required packages

Install the Schematics command line tool globally:
```
npm install -g @angular-devkit/schematics-cli
```

_Optional:_

Install Schematics library globally:
```
npm install -g @angular-devkit/schematics
```

Install Schematics schematics, example schematic globally:
```
npm install -g @schematics/schematics
```

### Step 2: Create new schematics project

Create new blank schematic project:
```
schematics blank --name example-schematics
```

_Optional:_

Create example schematics:
```
schematics @schematics/schematics:schematic --name example-schematics
```
In the `example-schematics`-project you will have some exampel schematics and helpfull comments. It's good to learn schematics.

### Step 3: Build your schematics

Before you can test your own schematics, you should build that.

Go into `example-schematics` folder and run:
```
npm run build
```

### Step 4: Test your schematics

Go into your `example-schematics` project folder.

With following command you can test your schematics inside of current project:
```
schematics .:your-schematic --your-option "Your option value" --debug false
```
The `.` means current schematics folder. After `:` you call your schematic.

With `--debug false` option schematics will create files in current folder.

Example command based on current repo:
```
cd ng-dresden
```

and
```
shematics .:ng-dresden-param --number 9 --title "Mini-Workshop Schematics" --debug false
```

Otherwise you can publish your schematics project to npmjs and install it in other angular project.

