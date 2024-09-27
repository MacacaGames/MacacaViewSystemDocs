# Installation

There are several options to download View System, so feel free to choose the one that best suits your project.

- Option 1: OpenUPM (Recommend)

```sh
openupm add com.macacagames.viewsystem
```

<br>

___

- Option 2: Unity Package file
Add it to your editor's manifest.json file like this:
```json
{
    "dependencies": {
        "com.macacagames.utility": "https://github.com/MacacaGames/MacacaUtility.git",
        "com.macacagames.viewsystem": "https://github.com/MacacaGames/MacacaViewSystem.git"
    }
}
```
<br>

___

- Option 3: Git SubModule
```bash
git submodule add https://github.com/MacacaGames/MacacaViewSystem.git Assets/MacacaViewSystem
```
> Note: ViewSystem depends on MacacaUtility, so make sure to also add MacacaUtility as a git submodule.
```bash
git submodule add hhttps://github.com/MacacaGames/MacacaUtility.git Assets/MacacaUtility
```
