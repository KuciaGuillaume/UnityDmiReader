# Stop

## StopAnimation
```js
public void StopAnimation(int stateIndex = 0);
public void StopAnimation(string stateName = "");
```

### Description

The `StopAnimation` method is used to stop the animation of a specified state. This method has two overloads, allowing you to stop the animation either by providing the state index or the state name.

#### Using state index:

You can stop the animation by specifying the index of the state. If the index is out of range, the method has no effect.

#### Using state name:

Alternatively, you can stop the animation by providing the name of the state. If the state name is invalid or not found, the method has no effect.

### Parameters

- `stateIndex` (int, default value is 0): The index of the animation state to stop. This parameter is used in the first overload.

or

- `stateName` (string, default value is ""): The name of the animation state to stop. This parameter is used in the second overload.

### Detailed Flow

1. The method validates the provided state index or state name.
2. If the state index is out of range or the state name is invalid or not found, the method has no effect.
3. If the validation passes, it sets the relevant properties of the animation state to stop the animation.

### Example Usage

#### Stopping animation by state index:

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
        this._dmi.StartAnimation(2);
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update()
    {
        Sprite sprite = this._dmi.CurrentAnimationSprite(2, DMI.DownDirection);
        if (Input.GetKeyDown(KeyCode.S) && this._dmi.IsAnimationPlaying(2)) {
            this._dmi.StopAnimation(2);
        }
    }
}
```

#### Stopping animation by state name:

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
        Sprite sprite = this._dmi.CurrentAnimationSprite("stateName", DMI.DownDirection);
        if (Input.GetKeyDown(KeyCode.S) && this._dmi.IsAnimationPlaying("stateName")) {
            this._dmi.StopAnimation("stateName");
        }
    }
}
```

### Remarks

- Ensure that the state index is within the valid range or that the state name corresponds to an existing animation state.
- The method doesn’t throw exceptions if the state index or name is invalid. Instead, it quietly exits without making any changes.

## StopAllAnimation

```js
public void StopAllAnimation();
```

### Description

The `StopAllAnimation` method stops all animations and resets their properties. This method is useful for halting any currently playing animations and returning them to their initial state.

### Parameters

This method does not accept any parameters.

### Detailed Flow

1. Iterates through each animation state stored in the internal `_states` list.
2. For each animation state, it sets `isPlaying` to `false`, indicating that the animation is no longer playing.
3. Resets the `animCount` and `time` properties of each animation state to 0.
4. Sets the `isOnRewind` property of each animation state to `false`, indicating that the animation is not rewinding.

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
        this._dmi.Load("dmi_file_path");
        this._dmi.StartAllAnimation();
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update()
    {
        Sprite sprite = this._dmi.CurrentAnimationSprite(0, DMI.DownDirection);
        if (Input.GetKeyDown(KeyCode.S) && this._dmi.IsAllAnimationPlaying()) {
            this._dmi.StopAllAnimation();
        }
    }
}
```

---