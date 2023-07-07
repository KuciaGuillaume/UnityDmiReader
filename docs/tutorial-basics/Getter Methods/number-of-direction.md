# NumberOfDirection

## GetNumberOfDirection

```js
public int GetNumberOfDirection(int stateIndex);
public int GetNumberOfDirection(string stateName);
```

### Description

The `GetNumberOfDirection` method is used to retrieve the number of animations for a specific state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int, optional): The index of the state for which the number of animations is to be retrieved.
- `stateName` (string, optional): The name of the state for which the number of animations is to be retrieved.

### Return Value

- `int`: The method return the number of directions in one state if valid; otherwise, it returns -1.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the state index is out of range, or if the state name does not correspond to any state, the method returns -1.
3. Retrieves the number of animations for the state based on either the index or the name provided.
4. Returns the number of animations in the state.

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
            Debug.Log("Number of directions in state index 2: " + this._dmi.GetNumberOfDirection(2));
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
            Debug.Log("Number of directions in " + "stateName" + " state: " + this._dmi.GetNumberOfDirection("stateName"));
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---