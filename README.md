appium project for ios and android tests

starting appium server : appium --address 127.0.0.1 --port 4723 --log-level debug

running ios tests:  CAPABILITY=iOS TAG=run wdio
running android tests:  CAPABILITY=Android TAG=run wdio
