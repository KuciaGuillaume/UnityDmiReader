# CurrentAnimationIndex

## GetCurrentAnimationIndex
```js
public int GetCurrentAnimationIndex(int stateIndex);
public int GetCurrentAnimationIndex(string stateName);
```

### Description

The `GetCurrentAnimationIndex` method retrieves the current animation index for a specific state. This method has two overloads, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int): The index of the state for which the current animation index is to be retrieved.
- `stateName` (string): The name of the state for which the current animation index is to be retrieved.

### Detailed Flow

1. For the overload that takes an integer `stateIndex`, the method validates if the index is within range. If it's not, it returns -1.
2. For the overload that takes a string `stateName`, the method finds the index corresponding to the state name. If the state name is not found, it returns -1.
3. Retrieves the current animation index for the given state index or state name.
4. Returns the current animation index if found, or -1 if the index is invalid or the state name does not exist.

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
            int animationIndex = this._dmi.GetCurrentAnimationIndex(2);
            Debug.Log("Current animation index for state 2 is: " + animationIndex);
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
            int animationIndex = this._dmi.GetCurrentAnimationIndex("stateName");
            Debug.Log("Current animation index for state 'Running' is: " + animationIndex);
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---