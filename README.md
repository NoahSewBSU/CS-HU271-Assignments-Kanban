# CS-HU 271 Kanban (Extra Credit)

## Step 1 - Create a New Repository
Using your personal GitHub account [create new a private GitHub repository](https://github.com/new) called `CS-HU271-Assignments-Kanban`.

All options under `Initialize this repository` should be **disabled**/**unchecked**. In other words:
- the `Add a README file` option should be **disabled**/**unchecked**
- the `Add .gitignore` option should be **disabled**/**unchecked**
- the `Choose a license` option should be **disabled**/**unchecked**

## Step 2 - Clone Starter Code Repository
Clone this [CS-HU271-Assignments-Kanban](https://github.com/BoiseState/CS-HU271-Assignments-Kanban) repository from [VSCode](https://code.visualstudio.com/) or from the command line:

```bash
$ git clone https://github.com/BoiseState/CS-HU271-Assignments-Kanban.git

$ cd CS-HU271-Assignments-Kanban
```

## Step 3 - Push the Cloned Code to the New Repository
The contents of `master` branch of the **cloned repository** (from [`Step 2`](#step-2)) will be pushed the **repository that you created** (in [`Step 1`](#step-1)).

### Step 3a
Remove the `origin` remote pointing to the cloned repository:
```bash
$ git remote remove origin
```

### Step 3b
Add a new `origin` remote that will point to the new repository that you created (in [`Step 1`](#step-1)):
```bash
$ git remote add origin https://github.com/<yourGitHubUsername>/CS-HU271-Assignments-Kanban.git

$ git remote --verbose
origin  https://github.com/<yourGitHubUsername>/CS-HU271-Assignments-Kanban.git (fetch)
origin  https://github.com/<yourGitHubUsername>/CS-HU271-Assignments-Kanban.git (push)
```

### Step 3c
Push the `master` branch to the new repository that you created (in [`Step 1`](#step-1)):

```bash
$ git push -u origin master
```
