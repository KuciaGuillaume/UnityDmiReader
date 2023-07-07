# IsInfiniteLoopAnimation

## IsInfiniteLoopAnimation

```js
public bool IsInfiniteLoopAnimation(int stateIndex);
public bool IsInfiniteLoopAnimation(string stateName);
```

### Description

The `IsInfiniteLoopAnimation` method is used to determine whether an animation loops infinitely. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int, optional): The index of the animation state to check.
- `stateName` (string, optional): The name of the animation state to check.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range or if the state name does not correspond to any state, the method returns `false`.
3. Retrieves the loop count of the animation state based on either the index or the name provided.
4. If the loop count is -1, the method returns `true` indicating an infinite loop, otherwise it returns `false`.

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
        this._dmi.Load("dmi_file_path");
        this._dmi.StartAnimation(1);
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() 
    {
        Debug.Log("Is animation in infinite loop: " + this._dmi.IsInfiniteLoopAnimation(1));
    }
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
        this._dmi.Load("dmi_file_path");
        this._dmi.StartAnimation("stateName");
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() 
    {
        Debug.Log("Is animation in infinite loop: " + this._dmi.IsInfiniteLoopAnimation("stateName"));
    }
}
```

---