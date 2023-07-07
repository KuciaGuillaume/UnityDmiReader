# AnimationToInfinite

## SetAnimationToInfinite

```js
public void SetAnimationToInfinite(int stateIndex = 0);
public void SetAnimationToInfinite(string stateName = "");
```

### Description

The `SetAnimationToInfinite` method is used to set an animation state to infinite, meaning it will loop indefinitely. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int, optional): The index of the animation state to set to infinite. Default value is 0.
- `stateName` (string, optional): The name of the animation state to set to infinite. Default value is an empty string.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range, or if the state name does not correspond to any state, the method does nothing and returns.
3. If the image data does not exist, the method does nothing and returns.
4. Sets the `animCount` property of the animation state based on either the index or the name provided to -1, indicating infinite looping.

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
            this._dmi.SetAnimationToInfinite(2);
            Debug.Log("Animation at index 2 is set to infinite looping.");
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
            this._dmi.SetAnimationToInfinite("stateName");
            Debug.Log("Animation with the name 'stateName' is set to infinite looping.");
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---

## SetAllAnimationToInfinite

```js
public void SetAllAnimationToInfinite();
```

### Description

The `SetAllAnimationToInfinite` method is used to set all animation states to loop infinitely. This means that once an animation reaches its end, it will start again from the beginning and continue to play indefinitely.

### Parameters

This method does not take any parameters.

### Detailed Flow

1. Iterates through each animation state within the internal states list.
2. Sets the `animCount` property of each state to -1, indicating infinite looping.

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
            this._dmi.SetAllAnimationToInfinite();
            Debug.Log("Set all animations to play infinitely.");
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---