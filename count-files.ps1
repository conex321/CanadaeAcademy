$base = "c:\Users\msefa\Documents\GitHub\Canada e Academy\cea-website"
$files = Get-ChildItem -Path $base -Recurse -Filter *.md
$groups = $files | Group-Object { $_.DirectoryName.Replace($base + '\', '') } | Sort-Object Name
foreach ($g in $groups) {
    Write-Host "$($g.Name): $($g.Count)"
}
Write-Host "---"
Write-Host "TOTAL: $($files.Count)"
