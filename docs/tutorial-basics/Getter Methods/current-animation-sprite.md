# CurrentAnimationSprite

## GetCurrentAnimationSprite
```js
public Sprite GetCurrentAnimationSprite(int stateIndex = 0, int animationIndex = -1);
public Sprite GetCurrentAnimationSprite(string stateName = "", int animationIndex = -1);
```

### Description

The `GetCurrentAnimationSprite` method retrieves the current animation sprite for a given state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int, optional): The index of the animation state. Defaults to 0 if not specified.
- `stateName` (string, optional): The name of the animation state. Defaults to an empty string if not specified.
- `animationIndex` (int, optional): The index of the animation within the state. Defaults to -1 which selects the default animation for the state.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the state index is out of range, or if the state name does not correspond to any state, the method returns the first sprite as a fallback.
3. Retrieves the state based on the provided index or name.
4. Depending on the number of directions in the state, it retrieves and returns the appropriate sprite.
5. If the state directions are invalid, returns the first sprite as a fallback.

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
        Sprite currentSprite = dmi.GetCurrentAnimationSprite(2, DMI.DownDirection);
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
        Sprite currentSprite = this._dmi.GetCurrentAnimationSprite("stateName", DMI.DownDirection);
    }
}
```

### Remarks

- If the state index or state name is invalid, this method will return the first sprite as a fallback.
- The `animationIndex` parameter is optional, and if not specified or set to -1, the default animation for the state will be selected.