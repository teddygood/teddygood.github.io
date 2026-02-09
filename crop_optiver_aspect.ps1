[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

$sourcePath = "C:\Users\ChanhoLee\personal-obsidian\40. Blog\static\img\projects\optiver-kaggle-header.png"
$destPath = "C:\Users\ChanhoLee\personal-obsidian\40. Blog\static\img\projects\optiver-kaggle-header-aspect.png"
$targetAspect = 1.6

if (-not (Test-Path $sourcePath)) {
    Write-Error "Source file not found: $sourcePath"
    exit 1
}

$img = [System.Drawing.Bitmap]::FromFile($sourcePath)

$currentAspect = $img.Width / $img.Height
$targetWidth = $img.Width
$targetHeight = $img.Height

if ($currentAspect -gt $targetAspect) {
    # Too wide, crop width
    $targetWidth = [Math]::Round($img.Height * $targetAspect)
} else {
    # Too tall, crop height
    $targetHeight = [Math]::Round($img.Width / $targetAspect)
}

$x = [Math]::Round(($img.Width - $targetWidth) / 2)
$y = [Math]::Round(($img.Height - $targetHeight) / 2)

$rect = New-Object System.Drawing.Rectangle($x, $y, $targetWidth, $targetHeight)

$cropped = $img.Clone($rect, $img.PixelFormat)
$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$img.Dispose()
$cropped.Dispose()

Write-Host "Center cropped image saved to $destPath (Size: ${targetWidth}x${targetHeight})"
