# AnimationsLoopCount

## GetAnimationsLoopCount

```js
public int GetAnimationsLoopCount(int stateIndex);
public int GetAnimationsLoopCount(string stateName);
```

### Description

The `GetAnimationsLoopCount` method is used to retrieve the number of loops for the animation at a given state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int): The index of the state for which the number of animation loops is to be retrieved.
- `stateName` (string): The name of the animation state for which the number of loops is to be retrieved.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range or the state name does not correspond to any state, the method returns -1.
3. Retrieves the number of animation loops for the specified state based on either the index or the name provided.
4. Returns the number of animation loops. If the state is not found or is invalid, it returns -1.

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
            int loopCount = dmi.GetAnimationsLoopCount(2);
            Debug.Log(this._dmi.GetAnimationsLoopCount(2));
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
            int loopCount = dmi.GetAnimationsLoopCount("stateName");
            Debug.Log(this._dmi.GetAnimationsLoopCount(2));
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---

Please note that you may need to adapt the examples to fit the specific implementation and context of your application.