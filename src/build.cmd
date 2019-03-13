docker run ^
    -v c:\work\electrondotnet\src:/project ^
    -v c:\work\electrondotnet\.cache\electron:/root/.cache/electron ^
    -v c:\work\electrondotnet\.cache\electron-builder:/root/.cache/electron-builder ^
    -e AWS_SECRET_ACCESS_KEY=%AWS_SECRET_ACCESS_KEY% ^
    -e AWS_ACCESS_KEY_ID=%AWS_ACCESS_KEY_ID% ^
    -it ^
    electronuserland/builder:wine