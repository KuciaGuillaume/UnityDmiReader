# ImageSpriteAtIndex

## GetImageSpriteAtIndex

```js
public Sprite? GetImageSpriteAtIndex(int stateIndex, int index);
public Sprite? GetImageSpriteAtIndex(string stateName, int index);
```

### Description

The `GetImageSpriteAtIndex` method is used to retrieve an image sprite from a specific animation state. The method has two overloads: one allows you to specify the animation state by its index, and the other allows you to specify the animation state by its name.

### Parameters

- `stateIndex` (int): The index of the animation state from which the sprite should be retrieved.
- `stateName` (string): The name of the animation state from which the sprite should be retrieved.
- `index` (int): The index of the sprite within the animation state.

### Return Value

- `Sprite?`: The method returns the sprite if the indices and direction are valid; otherwise, it returns null.

### Detailed Flow

1. Validates the provided `stateIndex` or `stateName`.
2. If the `stateIndex` is out of bounds or if the `stateName` does not correspond to any state, the method returns `null`.
3. Checks if the sprite `index` is within bounds for the selected animation state. If not, it returns `null`.
4. Retrieves the sprite from the specified index within the specified animation state and returns it. If the indices are invalid or the sprite cannot be found, it returns `null`.

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

        Sprite currentSprite = this._dmi.GetImageSpriteAtIndex(0, 1);
        if (currentSprite != null) {
            Debug.Log("Sprite successfully retrieved.");
        } else {
            Debug.Log("Failed to retrieve sprite.");
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
        this._dmi.Load("dmi_file_path");

        Sprite currentSprite = this._dmi.GetImageSpriteAtIndex("stateName", 1);
        if (currentSprite != null) {
            Debug.Log("Sprite successfully retrieved.");
        } else {
            Debug.Log("Failed to retrieve sprite.");
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---

## GetImageSpriteAtIndexWithDirections

```js
public Sprite? GetImageSpriteAtIndexWithDirections(int stateIndex, int index, int direction);
public Sprite? GetImageSpriteAtIndexWithDirections(string stateName, int index, int direction);
```

### Description

The `GetImageSpriteAtIndexWithDirections` method is used to retrieve an image sprite at a specific index and direction within a particular animation state. There are two overloads for this method, one accepting the state index and the other accepting the state name. This allows the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int): The index of the animation state from which the sprite should be retrieved.
- `stateName` (string): The name of the animation state from which the sprite should be retrieved.
- `index` (int): The index of the sprite within the animation state.
- `direction` (int): The direction index for sprites that have multiple directions.

### Return Value

- `Sprite?`: The method returns the sprite if the indices and direction are valid; otherwise, it returns null.

### Detailed Flow

1. Validates the provided state index or state name, as well as the sprite index and direction.
2. If the state index is out of range, or the state name does not correspond to any state, the method returns null.
3. Retrieves the state either by index or by name.
4. Calculates the actual index of the image based on the direction if the state has multiple directions.
5. Returns the sprite at the calculated index if the state has multiple directions, or at the specified index if the state has only one direction.

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

        Sprite currentSprite = this._dmi.GetImageSpriteAtIndexWithDirections(0, 1, DMI.DownDirection);
        if (currentSprite != null) {
            Debug.Log("Sprite successfully retrieved.");
        } else {
            Debug.Log("Failed to retrieve sprite.");
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
        this._dmi.Load("dmi_file_path");

        Sprite currentSprite = this._dmi.GetImageSpriteAtIndexWithDirections("stateName", 1, DMI.DownDirection);
        if (currentSprite != null) {
            Debug.Log("Sprite successfully retrieved.");
        } else {
            Debug.Log("Failed to retrieve sprite.");
        }
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---