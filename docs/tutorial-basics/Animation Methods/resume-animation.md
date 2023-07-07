# Resume

## ResumeAnimation
```js
public void ResumeAnimation(int stateIndex = 0);
public void ResumeAnimation(string stateName = "");
```

### Description

The `ResumeAnimation` method is used to resume an animation for a specific state if it is paused. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `stateIndex` (int, optional): The index of the animation state to resume. Default value is 0.
- `stateName` (string, optional): The name of the animation state to resume. Default value is an empty string.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range, or if the state name does not correspond to any state, the method returns without doing anything.
3. Sets the `isPlaying` property of the specified animation state to `true`, effectively resuming the animation.

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
        if (Input.GetKeyDown(KeyCode.Space)) {
            if (this._dmi.IsAnimationPlaying(2) == false)
                this._dmi.ResumeAnimation(2);
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
        if (Input.GetKeyDown(KeyCode.Space) == false) {
            if (this._dmi.IsAnimationPlaying("stateName"))
                this._dmi.ResumeAnimation("stateName");
        }
    }
}
```

---
## ResumeAllAnimation

```js
public void ResumeAllAnimation();
```

### Description

The `ResumeAllAnimation` method is used to resume all paused animations. It iterates through all the animation states and sets them to play.

### Parameters

This method does not take any parameters.

### Detailed Flow

1. Iterates through each animation state in the collection of states.
2. Sets the `isPlaying` property of each animation state to `true`, indicating that the animation should resume playing.

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
        if (Input.GetKeyDown(KeyCode.Space)) {
            if (this._dmi.IsAllAnimationPlaying() == false)
                this._dmi.ResumeAllAnimation();
        }
    }
}
```

---