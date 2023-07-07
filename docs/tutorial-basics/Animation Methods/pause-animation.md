# Pause

## PauseAnimation
```js
public void PauseAnimation(int stateIndex = 0);
public void PauseAnimation(string stateName = "");
```

### Description

The `PauseAnimation` method is used to pause an animation for a specific state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int, optional): The index of the animation state to pause. The default value is 0.
- `stateName` (string, optional): The name of the animation state to pause. The default value is an empty string.

### Detailed Flow

1. For the first overload that takes an integer `stateIndex` as a parameter:
    - Validates the provided state index.
    - If the index is out of range, the method returns without having any effect.
    - Sets the `isPlaying` property of the animation state to `false` to pause the animation.
    
2. For the second overload that takes a string `stateName` as a parameter:
    - Finds the index of the state with the provided name.
    - If the state name is not found or is invalid, the method returns without having any effect.
    - Sets the `isPlaying` property of the animation state to `false` to pause the animation.

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
        this._dmi.StartAnimation(0);
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update()
    {
        Sprite sprite = this._dmi.CurrentAnimationSprite("stateName", DMI.DownDirection);
        if (Input.GetKeyDown(KeyCode.P)) {
            if (this._dmi.IsAnimationPlaying(0))
                this._dmi.PauseAnimation(0);
        }
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
        Sprite sprite = this._dmi.CurrentAnimationSprite("stateName", DMI.DownDirection);
        if (Input.GetKeyDown(KeyCode.P)) {
            if (this._dmi.IsAnimationPlaying("stateName"))
                this._dmi.PauseAnimation("stateName");
        }
    }
}
```

---

## PauseAllAnimation

```js
public void PauseAllAnimation();
```

### Description

The `PauseAllAnimation` method is used to pause all currently playing animations. This method does not take any parameters and will iterate through all the animation states and set them to paused.

### Parameters

This method does not take any parameters.

### Detailed Flow

1. Iterates through all the animation states in the `_states` list.
2. For each state, sets its `isPlaying` property to `false`, effectively pausing the animation.

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
        Sprite sprite = this._dmi.CurrentAnimationSprite("stateName", DMI.DownDirection);
        if (Input.GetKeyDown(KeyCode.P)) {
            if (this._dmi.IsAllAnimationPlaying())
                this._dmi.PauseAllAnimation();
        }
    }
}
```

---