# AnimationLoopCount

## SetAnimationLoopCount

```js
public void SetAnimationLoopCount(int count, int stateIndex = 0);
public void SetAnimationLoopCount(int count, string stateName = "");
```

### Description

The `SetAnimationLoopCount` method is used to set the animation count for a specific animation state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `count` (int): The animation count to be set.
- `stateIndex` (int, optional): The index of the animation state. Default value is 0.
- `stateName` (string, optional): The name of the animation state. Default value is an empty string.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range, or if the state name does not correspond to any state, the method returns without making any changes.
3. If the image data does not exist, the method returns without making any changes.
4. Sets the animation count for the animation state based on either the index or the name provided.

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
            this._dmi.SetAnimationLoopCount(10, 2);
            Debug.Log("Animation count: " + this._dmi.GetAnimationLoopCount(2));
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
            this._dmi.SetAnimationLoopCount(10, "stateName");
            Debug.Log("Animation count: " + this._dmi.GetAnimationLoopCount("stateName"));
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---

## SetAllAnimationCount

```js
public void SetAllAnimationCount(int count);
```

### Description

The `SetAllAnimationCount` method is used to set the animation count for all animation states. The animation count is the number of times an animation should play. Setting this value for all states can be useful when you want to synchronize the animation playback across different states.

### Parameters

- `count` (int): The animation count to be set for all animation states.

### Detailed Flow

1. Iterates through each animation state.
2. Sets the animation count of each state to the provided value.

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
            int count = 10;
            this._dmi.SetAllAnimationCount(count);
            Debug.Log("Animation count: " + count.toString());
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---