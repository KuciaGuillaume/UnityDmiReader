# AnimationDelayatIndex

## SetAnimationDelayAtIndex

```js
public void SetAnimationDelayAtIndex(float delay, int index, int stateIndex = 0);
public void SetAnimationDelayAtIndex(float delay, int index, string stateName = "");
```

### Description

The `SetAnimationDelayAtIndex` method is used to set the animation delay for a specific frame within an animation state. There are two overloads for this method. One allows the user to specify the state by its index, and the other allows specifying the state by its name.

### Parameters

- `delay` (float): The animation delay to be set, in seconds.
- `index` (int): The index of the frame within the animation state for which the delay should be set.
- `stateIndex` (int, optional): The index of the animation state where the delay should be set. Default value is 0.
- `stateName` (string, optional): The name of the animation state where the delay should be set. Default value is an empty string.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the state index is out of range, or if the state name does not correspond to any state, the method returns without making changes.
3. If the frame index is out of range, the method returns without making changes.
4. Sets the animation delay for the specified frame within the animation state to the provided delay value.

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
            float delay = 0.5f;
            this._dmi.SetAnimationDelayAtIndex(delay, 2, 1);
            Debug.Log("Animation delay set for state index 1, frame index 2: " + delay.toString());
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
            float delay = 0.5f;
            this._dmi.SetAnimationDelayAtIndex(delay, 2, "stateName");
            Debug.Log("Animation delay set for state named 'stateName', frame index 2: " + delay.toString());
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---