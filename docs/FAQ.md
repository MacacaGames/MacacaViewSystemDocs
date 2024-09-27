# FAQ
## Commonly asked question
### Migration from old version ViewSystem
Simply click Normalized in tool bar. ViewSystem will detect if old version save data exist, then automatically convert data into new version(every page store separately).


<!-- TODO:把這個問題描述得更好 -->
### Why GameObject.activeSelf on a ViewElement not apply properly
Mind that ViewSystem control ViewElement's lifecycle. You don't want to call GameObject.SetActive() in OnBeforeShow, since ViewElement is not ready yet and can be override

## TroubleShooting

### I got a Untitled scene in my Hierarchy
Delete it directly.

### Why XX dosen't work?
Check is there `ViewElement` component attached on your gameobject. 