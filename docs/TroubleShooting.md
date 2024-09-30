# TroubleShooting

<!-- TODO:把這個問題描述得更好 -->
### Why GameObject.activeSelf on a ViewElement not apply properly
Mind that ViewSystem control ViewElement's lifecycle. You should avoid manipulating `GameObject.activeSelf` in `OnBeforeShow()`, since ViewElement is not ready yet and `GameObject.activeSelf` of the ViewElement may be overridden.

### There is a untitled scene in my Hierarchy
This is usually caused by entering Play Mode while editing the View System Editor. Simply delete it.

### I can't drag the prefab into the ViewSystem Editor.
Make sure the prefab has a `ViewElement` component.

### Why is my IViewElementLifeCycle event not being triggered?
Make sure the prefab has a `ViewElement` component.

If your script is attach to a child object of another ViewElement, make sure to attach a `ViewElementGroup` to the top-level ViewElement. This allows the ViewSystem to send lifecycle events to the child objects.

### My ViewSystem Visual Editor show nothing after update ViewSystem version
If you are using ViewSystem versions earlier than 1.0.43 and want to migrate to a later version, you will need to perform a save data migration.
Simply click Normalized in tool bar. ViewSystem will detect if old version save data exist, then automatically convert data into new version(every page store separately).