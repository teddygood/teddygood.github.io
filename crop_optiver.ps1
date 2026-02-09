[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

$sourcePath = "C:\Users\ChanhoLee\personal-obsidian\40. Blog\static\img\projects\optiver-kaggle-header.png"
$destPath = "C:\Users\ChanhoLee\personal-obsidian\40. Blog\static\img\projects\optiver-kaggle-header-cropped.png"

if (-not (Test-Path $sourcePath)) {
    Write-Error "Source file not found: $sourcePath"
    exit 1
}

$img = [System.Drawing.Bitmap]::FromFile($sourcePath)
$bg = $img.GetPixel(0, 0)
$threshold = 10 # Tolerance for color difference

function Is-Different($c1, $c2) {
    if ($c1.A -eq 0 -and $c2.A -eq 0) { return $false } # Both transparent
    if ($c1.A -ne $c2.A) { return $true }
    $diff = [Math]::Abs($c1.R - $c2.R) + [Math]::Abs($c1.G - $c2.G) + [Math]::Abs($c1.B - $c2.B)
    return $diff -gt $threshold
}

$minX = $img.Width
$minY = $img.Height
$maxX = 0
$maxY = 0

# Scan
for ($y = 0; $y -lt $img.Height; $y++) {
    for ($x = 0; $x -lt $img.Width; $x++) {
        $pixel = $img.GetPixel($x, $y)
        if (Is-Different $pixel $bg) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

if ($minX -gt $maxX) {
    Write-Warning "No content found different from background. Copying original."
    $img.Dispose()
    Copy-Item $sourcePath $destPath
    exit 0
}

# Add a small padding (e.g. 10px) to not be too tight
$padding = 10
$minX = [Math]::Max(0, $minX - $padding)
$minY = [Math]::Max(0, $minY - $padding)
$maxX = [Math]::Min($img.Width - 1, $maxX + $padding)
$maxY = [Math]::Min($img.Height - 1, $maxY + $padding)

$width = $maxX - $minX + 1
$height = $maxY - $minY + 1
$rect = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)

$cropped = $img.Clone($rect, $img.PixelFormat)
$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$img.Dispose()
$cropped.Dispose()

Write-Host "Cropped image saved to $destPath (Size: ${width}x${height})"
