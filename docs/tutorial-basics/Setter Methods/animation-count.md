# AnimationCount

## SetAnimationCount

```csharp
public void SetAnimationCount(int count, int stateIndex = 0);
public void SetAnimationCount(int count, string stateName = "");
```

### Description

The `SetAnimationCount` method is used to set the animation count for a specific animation state. There are two overloads for this method, allowing the user to specify the state either by its index or by its name.

### Parameters

- `count` (int): The animation count to be set.
- `stateIndex` (int, optional): The index of the animation state. Default value is 0.
- `stateName` (string, optional): The name of the animation state. Default value is an empty string.

### Detailed Flow

1. Validates the provided state index or state name.
2. If the index is out of range, or if the state name does not correspond to any state, the method returns without making any changes.
3. If the image data does not exist, the method returns without making any changes.
4. Sets the animation count for the animation state based on either the index or the name provided.

### Example Usage

#### Using stateIndex:

```csharp
DMI dmi = AddComponent<DMI>();
if (dmi.Load("dmi_file_path")) {
    dmi.SetAnimationCount(10, 2);
    Debug.Log("Animation count set for state index 2.");
}
```

#### Using stateName:

```csharp
DMI dmi = AddComponent<DMI>();
if (dmi.Load("dmi_file_path")) {
    dmi.SetAnimationCount(10, "stateName");
    Debug.Log("Animation count set for state named 'Running'.");
}
```

---

## SetAllAnimationCount

```csharp
public void SetAllAnimationCount(int count);
```

### Description

The `SetAllAnimationCount` method is used to set the animation count for all animation states. The animation count is the number of times an animation should play. Setting this value for all states can be useful when you want to synchronize the animation playback across different states.

### Parameters

- `count` (int): The animation count to be set for all animation states.

### Detailed Flow

1. Iterates through each animation state.
2. Sets the animation count of each state to the provided value.

### Example Usage

```csharp
DMI dmi = AddComponent<DMI>();
if (dmi.Load("dmi_file_path")) {
    // Set the animation count for all states to 3.
    dmi.SetAllAnimationCount(3);
}
```

---