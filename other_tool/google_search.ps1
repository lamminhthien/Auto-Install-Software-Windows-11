function gg {
  param(
    [string]$keyword
  )
  process {
    # No keyword, just hello
    if (!$keyword) {
      $keyword = "Hello";
    }
    # Replact space character to '+'
    $URL = $keyword -replace ' ','+';
    $URL = "https://www.google.com/search?q=" + $URL;


    try {
      Write-Output ("Search in Chrome for <" + $keyword + ">..");
      start chrome.exe $URL;
    }
    # If you don't install chrome, auto use edge
    catch {
      Write-Output ("Searching in Edge for <" + $keyword + ">..");
      start edge.exe $URL;
    }

  }

}
