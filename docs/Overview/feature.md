# AssetManager 使用指南

## 簡介

本文件說明如何使用 `AssetManager` 類別來獲取和管理遊戲Asset，特別是使用 `GetWrappedAsset` 和 `GetWrappedAssetByAddressString` 方法。在 `AssetManager` 的管理下，使用這些方法可以確保Asset在需要被使用時確實地載入，以及能夠在記憶體空間有限的設備上進行動態釋放和載入，同時也提供開發者方便的interface來操作Asset。

## 方法概述

### GetWrappedAsset

此方法根據指定的地址類型 `Address` 獲取 `AssetWrapper`，以確保Asset能正確加載和管理。該方法允許選擇是否手動釋放Asset。

```csharp
public AssetWrapper<T> GetWrappedAsset<T>(Address address, bool releaseManually = false) where T : UnityEngine.Object
{
    return GetOrCacheAssetWrapper<T>(address.ToString(), releaseManually);
}
```

### GetWrappedAssetByAddressString

此方法根據指定的地址字串 `string` 獲取 `AssetWrapper`，以確保Asset能正確加載和管理。該方法同樣允許選擇是否手動釋放Asset。

```csharp
public AssetWrapper<T> GetWrappedAssetByAddressString<T>(string address, bool releaseManually = false) where T : UnityEngine.Object
{
    return GetOrCacheAssetWrapper<T>(address, releaseManually);
}
```

## 使用範例

以下範例展示如何使用這些方法來獲取Asset並正確管理它們：

### 取得 `AssetWrapper`

```csharp
public class SomeClass : MonoBehaviour
{
    private AssetWrapper<ShopViewImageDataAssets> shopViewImageDataAssets;

    public async void Start()
    {
        shopViewImageDataAssets = AssetManager.Instance.GetWrappedAsset<ShopViewImageDataAssets>(AssetManager.Address.ShopViewImageAssets);
        var asset = await shopViewImageDataAssets.GetAssetAsync();
      
        // 使用Asset
        Debug.Log(asset.shopViewImageDatas.Count);
    }
}
```

### 取用Asset

```csharp
public async Task<Sprite> GetDefaultIconBig()
{
    return await (await itemViewDataAssets.GetAssetAsync()).GetItemIconBigDefault();
}
```

### 註冊自定義結構

```csharp
public override async Task Init()
{
    serviceClient = MagicOnionUtils.Create<IPurchaseService>();
  
    vipExpSettings = dataSystem.GetDeserializedData<List<VipExpSetting>>(dataSystem.jsonPath.vipExpSetting);
  
    shopViewImageDataAssets = AssetManager.Instance.GetWrappedAsset<ShopViewImageDataAssets>(AssetManager.Address.ShopViewImageAssets);
    shopViewImageDataAssets.RegisterCustomStructure(ShopViewImageDataDictName, asset =>
    {
        return asset.shopViewImageDatas.ToDictionary(s => s.viewId, s => s);
    });
}

private async Task<Dictionary<string, ShopViewImageData>> GetShopViewAssetDict()
{
    return (Dictionary<string, ShopViewImageData>) await shopViewImageDataAssets.GetCustomStructureAsync(ShopViewImageDataDictName);
}
```

## 注意事項

1. **避免自行快取 `GetAssetAsync` 的結果**：除非有特別需求，否則不應將 `GetAssetAsync` 的結果存入變數。這樣能確保Asset在每次需要時都能自動加載和管理。
2. **使用 `RegisterCustomStructure` 註冊自定義結構**：如果需要從Asset中提取自定義結構，可以使用 `RegisterCustomStructure` 方法。這樣AssetWrapper會在需要時動態生成並快取這些結構。
3. **釋放Asset**：如果需要手動釋放Asset，請使用 `ReleaseAsset` 方法。`AssetWrapper` 會在Asset被釋放時自動清理相關資源。

## 結論

透過 `AssetManager` 以及`AssetWrapper`，開發者可以方便地加載和管理遊戲中的Asset，同時確保系統資源得到有效使用。遵循以上指南以確保Asset管理的正確性和高效性。
