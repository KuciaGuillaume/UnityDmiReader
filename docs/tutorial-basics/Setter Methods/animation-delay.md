# AnimationDelay

## SetAnimationDelay

```js
public void SetAnimationDelay(float delay, int stateIndex = 0);
public void SetAnimationDelay(float delay, string stateName = "");
```

### Description

The `SetAnimationDelay` method sets the animation delay for all frames of a specific animation state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name. Setting the delay affects the speed at which the animation plays. 

### Parameters

- `delay` (float): The delay to be set for all frames in the specified animation state.
- `stateIndex` (int, optional): The index of the animation state to set the delay for. The default value is 0.
- `stateName` (string, optional): The name of the animation state to set the delay for. The default value is an empty string.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range, or if the state name does not correspond to any state, the method exits without making changes.
3. Iterates through all the frames in the specified animation state.
4. Sets the animation delay for each frame to the provided delay value.

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
            this._dmi.SetAnimationDelay(0.5f, 1);
            Debug.Log("Animation delay set for state index 2.");
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
            this._dmi.SetAnimationDelay(0.5f, "stateName");
            Debug.Log("Animation delay set for state 'stateName'.");
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---

## SetAllAnimationDelay

```js
public void SetAllAnimationDelay(float delay);
```

### Description

The `SetAllAnimationDelay` method is used to set the animation delay for all frames across all animation states. This allows for uniform animation timing throughout.

### Parameters

- `delay` (float): The delay in seconds to be set for each frame in all animation states.

### Detailed Flow

1. Iterates through each animation state.
2. Within each state, iterates through the list of wait times for each frame.
3. Sets the wait time of each frame to the specified delay.

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
            this._dmi.SetAllAnimationDelay(0.5f);
            Debug.Log("Set a 0.5 delay for all frames in all animation states");
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---