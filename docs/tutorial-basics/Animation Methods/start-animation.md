# Start

## StartAnimation
```js
public void StartAnimation(int stateIndex = 0);
public void StartAnimation(string stateName = "");
```

### Description

The `StartAnimation` method is used to start an animation for a specific state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int, optional): The index of the animation state to start. Default value is 0.
- `stateName` (string, optional): The name of the animation state to start. Default value is an empty string.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range, or if the state name does not correspond to any state, the method returns without doing anything.
3. Sets the animation state properties to start the animation.

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
        this._dmi.StartAnimation(2);
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update()
    {
        Sprite sprite = this._dmi.CurrentAnimationSprite(2, DMI.DownDirection);
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
    }
}
```

---

##  StartAllAnimation
```js
public void StartAllAnimation();
```

### Description

The `StartAllAnimation` method is used to start all the animations from the beginning. It iterates through each state within the internal state collection and resets various properties of the animation state to initiate the animation. Currently, this method doesn't have any overloads, which means it can be used without any parameters.

### Parameters

This method does not take any parameters.

### Detailed Flow

1. Iterates through each state within the internal state collection.
2. For each state, it sets the `isPlaying` property to `true`. This property indicates whether the animation is currently playing.
3. Resets the animation count (`animCount`) to 0. This represents the current animation frame.
4. Resets the time property to 0. This is used for handling animation timing.
5. Sets the `isOnRewind` property to `false`. This property indicates whether the animation is playing in reverse.
6. Resets the animation number (`animNumber`) to 0. This represents the index of the animation to be played.

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
    }
}
```

### Remarks

- This method is used to reset and start all animations. It doesn't provide control over starting individual animations.
- It does not take any parameters, so you don't have to pass any arguments while calling this method.