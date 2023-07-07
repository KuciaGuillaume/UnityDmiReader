# AnimationRewind

## SetAnimationRewind

```js
public void SetAnimationRewind(bool rewind, int stateIndex = 0);
public void SetAnimationRewind(bool rewind, string stateName = "");
```

### Description

The `SetAnimationRewind` method is used to set the rewind state of an animation. There are two overloads for this method, allowing the user to specify the animation state either by its index or by its name. Setting the rewind state to `true` makes the animation play in reverse after it reaches the end, and setting it to `false` makes the animation stop at the end.

### Parameters

- `rewind` (bool): The rewind state to be set.
- `stateIndex` (int, optional): The index of the animation state to set the rewind state for. The default value is 0.
- `stateName` (string, optional): The name of the animation state to set the rewind state for. The default value is an empty string.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range, or if the state name does not correspond to any state, the method returns without making any changes.
3. If the image data does not exist, the method returns without making any changes.
4. Sets the rewind state of the specified animation state to the provided `rewind` value.

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
            this._dmi.SetAnimationRewind(true, 2);
            Debug.Log("Set animation at index 2 to rewind.");
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
            this._dmi.SetAnimationRewind(true, "stateName");
            Debug.Log("Set 'stateName' animation to rewind.");
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---

*Note: Please, make sure that the state index or state name you provide is valid and within the range of available animation states. Also, make sure that the image data exists before attempting to set the rewind state.*

## SetAllAnimationRewind

```js
public void SetAllAnimationRewind(bool rewind);
```

### Description

The `SetAllAnimationRewind` method is used to set the rewind state for all animation states within a DMI file. When the rewind state is set to `true`, the animation will play in reverse. Conversely, when the rewind state is set to `false`, the animation will play in its original order.

### Parameters

- `rewind` (bool): The rewind state to be set for all animation states. If set to `true`, animations will play in reverse. If set to `false`, animations will play in the original order.

### Detailed Flow

1. Iterates through each `DmiState` in the internal states list.
2. For each state, sets the `rewind` property to the value provided in the `rewind` parameter.

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
            this._dmi.SetAllAnimationRewind(true);
            Debug.Log("Set rewind state for all animations to true, making them play in reverse.");
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---