# IsAnimationPlaying

## isAnimationPlaying

```js
public bool isAnimationPlaying(int stateIndex = 0);
public bool isAnimationPlaying(string stateName = "");
```

### Description

The `isAnimationPlaying` method is used to check if an animation is currently playing for a specific state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int, optional): The index of the animation state to check. Default value is 0.
- `stateName` (string, optional): The name of the animation state to check. Default value is an empty string.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range, or if the state name does not correspond to any state, the method returns `false`.
3. If the image data does not exist, the method returns `false`.
4. Retrieves the playing status of the animation state based on either the index or the name provided.
5. Returns `true` if the animation is playing, otherwise returns `false`.

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
        Debug.Log("Is playing: " + this._dmi.IsAnimationPlaying(2));
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
        Debug.Log("Is playing: " + this._dmi.IsAnimationPlaying("stateName"));
    }
}
```

---

## IsAllAnimationPlaying

```js
public bool IsAllAnimationPlaying();
```

### Description

The `IsAllAnimationPlaying` method is used to check if all animations within the DMI file are currently playing. It iterates through each animation state and returns `false` if it finds any animation that is not playing. If all animations are playing, it returns `true`.

### Parameters

This method does not take any parameters.

### Detailed Flow

1. Iterates through each `DmiState` in the internal states list.
2. If it finds a state where `isPlaying` is `false`, it immediately returns `false`.
3. If the method iterates through all the states without finding a non-playing animation, it returns `true`.

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
        Debug.Log("All is playing: " + this._dmi.IsAllAnimationPlaying());
    }
}
```

---

## IsOneAnimationPlaying

```js
public bool IsOneAnimationPlaying();
```

### Description

The `IsOneAnimationPlaying` method is used to check if at least one animation is currently playing among the DMI states. 

### Parameters

This method does not accept any parameters.

### Detailed Flow

1. Iterates through each DMI state.
2. If an animation is found to be playing in any state, the method immediately returns `true`.
3. If no animations are playing, the method returns `false`.

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
        this._dmi.StartAnimation("stateName");
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() 
    {
        Debug.Log("One is playing: " + this._dmi.IsOneAnimationPlaying());
    }
}
```

---