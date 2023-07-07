---
sidebar_position: 1
---

# Introduction

#### Welcome to this user guide for the DMI file reader for Unity

UnityDmiReader is a script that allows you to load .dmi animation files into Unity. Unity does not natively support this file type, so this script makes it easy to do so! It directly manages png animations and retrieves them as sprites, all without losing the important information from a dmi file, such as 1-direction, 4-direction, or 8-direction animations with a state system, infinite or determined loops. There are, of course, many options that we cannot all mention here, so please read on in the documentation for more details!

## What you'll need

- **Unity.SharpZipLib.Zip.Compression**
  - This is a compression package available on Unity. You can install it in your project directly from the Unity editor. Go to [Window] -> [Package Manager] -> Click on the small addition cross at the top left of the package manager window and click on -> [Add package from git URL...] -> enter "com.unity.sharp-zip-lib" -> then click Add. The package should now be installing. Once it's finished, you won't need anything else to run the script normally.

## Explanation of Terms Used

`stateIndex` is a key term that we are going to use extensively throughout this documentation. Essentially, `stateIndex` is a numerical identifier for a specific state within a DMI file. A DMI file is structured to categorize animations by states. These states generally have a name, which we refer to as `stateName`. However, in scenarios where you might want to select a state without specifying its name, `stateIndex` serves as the numerical representation for that state.

Consider this example: suppose a DMI file contains several states named `["state1", "state2", "state3", "state4"]`. The `stateIndex` for `state1` would be `0`, for `state2` it would be `1`, and so on. It’s important to note that the indexing begins at `0`.

Within each state, there can be multiple animations. These animations are typically represented by different directions. In cases where an animation has only one direction, an additional index is employed to identify individual frames within that direction. This index also starts at `0`.

When an animation comprises multiple directions, each direction is assigned a specific number. Here’s an example:

- DownDirection = 0
- UpDirection = 1
- RightDirection = 2
- LeftDirection = 3
- BottomRightDirection = 4
- BottomLeftDirection = 5
- TopRightDirection = 6
- TopLeftDirection = 7

In summary, `stateIndex` is used to identify a specific state in a DMI file, while the direction index and frame index allow navigation within the state to access desired animations and frames.


## Code of Conduct

I'll start by saying that it's certainly possible to find errors in the scripts. This is not excluded even by the largest companies that govern this field, but every effort has been made to avoid them! If you encounter an error due to a feature of this script, please follow the steps below before contacting me:

 - Look at how the function causing the problem works to see if an incorrect response might actually be normal given the information sent.
 - It's also normal to check if the information sent is valid.
 - In case of a specific error message, try to see how to resolve it in the [Error Handling Guide](error.md).

If all these steps have not been conclusive, please contact me at the following email address: kuciaguillaume.pro@gmail.com