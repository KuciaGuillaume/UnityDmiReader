# Load

## Load Methods

```js
public bool Load(string filePath);
```

### Description

The `Load` method is responsible for loading a DMI file from the provided file path. It reads the file, extracts metadata and image data, then validates and processes this data to create DMI sprites and state information.

### Parameters

- `filepath` (string): The relative path to the DMI file from the application's data path.

### Return Value

- `bool`: Returns `true` if the DMI file is successfully loaded, and `false` otherwise.

### Detailed Flow

1. Combines the given relative file path with the application's data path to get the full path of the DMI file.
2. Checks if the file exists. If not, logs an error and returns `false`.
3. Reads the entire DMI file into a byte array.
4. If the byte array is null or empty, logs an error and returns `false`.
5. Reads the text contained in the `zTXt` chunk of the DMI file.
6. If the `zTXt` chunk is null, logs an error indicating a problem loading metadata and returns `false`.
7. Parses the `zTXt` chunk into a `DmiData` object.
8. Decodes the image from the DMI file and creates a sprite from it.
9. Validates the DMI version and dimensions (width and height) contained in the metadata.
10. Initializes class properties such as width, height, and states.
11. Loops through each state and retrieves the frames, direction, animation loop count, and state name.
12. Loads images and animation wait times for each state.
13. In case of any exceptions, logs the error details and returns `false`.
14. If execution reaches this point without errors, the method returns `true`, indicating the DMI file was successfully loaded.

### Example Usage

```js
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ExampleUnityClass : MonoBehaviour
{
    // Define a private DMI object
    private DMI _dmi;

    /// <summary>
    /// Start is called before the first frame update.
    /// </summary>
    void Start()
    {
        this._dmi = gameObject.AddComponent<DMI>();
        if (this._dmi.Load("dmi_file_path")) {
            Debug.Log("DMI file successfully loaded.");
        } else {
            Debug.Log("Failed to load DMI file.");
        }

    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---