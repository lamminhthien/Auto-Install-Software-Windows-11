function yt {
    param (
        [string]$keyword
    )
    process{
        # No keyword, just hello
        if (!$keyword){
            $keyword = "Hello";
        }
        # Replact space character to '+'
        $URL = $keyword -replace ' ','+';
        $URL = "https://www.youtube.com/results?search_query=" + $URL;
       

        try {
            echo ("Search in Chrome for <" + $keyword + ">..");
            start chrome.exe $URL;
        }
        # If you don't install chrome, auto use edge
        catch {
            echo ("Searching in Edge for <" + $keyword + ">..");
            start edge.exe $URL;
        }
        
    }
    
}