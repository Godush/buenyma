set /P commit_msg=Commit-Message:
git commit -a -m "%commit_msg%"
git push --all