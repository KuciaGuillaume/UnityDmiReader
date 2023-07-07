# GetImage

## GetImage

```js
public Sprite? GetImage();
```

### Description

The `GetImage` method is used to retrieve the DMI image sprite. If the DMI file has not been loaded successfully, it returns `null`.

### Parameters

This method does not take any parameters.

### Return Value

- `Sprite?`: The method return a general image sprite if valid; otherwise, it returns null.

### Detailed Flow

1. Returns the DMI image sprite (`_img`) stored in the object.
2. If the DMI file has not been loaded or if the image sprite is not available, it returns `null`.

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
        Sprite dmiImage = this._dmi.GetImage();
    }

    /// <summary>
    /// Update is called once per frame.
    /// </summary>
    void Update() {}
}
```

---