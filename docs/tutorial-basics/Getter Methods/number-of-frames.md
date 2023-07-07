# NumberOfFrames

## GetNumberOfFrames

```js
public int GetNumberOfFrames(int stateIndex);
public int GetNumberOfFrames(string stateName);
```

### Description

The `GetNumberOfFrames` method is used to retrieve the number of frames for a specific animation state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int): The index of the animation state for which to retrieve the number of frames.
- `stateName` (string): The name of the animation state for which to retrieve the number of frames.

### Return Value

- `int`: The method return the number of frames in one state if valid; otherwise, it returns -1.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range, or if the state name does not correspond to any state, the method returns -1.
3. Retrieves the number of frames for the specified animation state based on either the index or the name provided.
4. Returns the number of frames in the specified animation state.

### Example Usage

#### Using stateIndex:
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
            Debug.Log("Number of frames in state with index 2: " + this._dmi.GetNumberOfFrames(2));
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

#### Using stateName:
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
            Debug.Log("Number of frames in state named 'stateName': " + this._dmi.GetNumberOfFrames("stateName"));
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---