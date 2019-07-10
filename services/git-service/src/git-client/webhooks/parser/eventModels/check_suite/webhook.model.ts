/*

Triggered when a check suite is completed, requested, or rerequested. The checks permission allows you to use the Checks API. If you plan to create or modify check runs, your GitHub App will need to have the checks:write permission. If you only plan to consume check runs, your GitHub App only needs the checks:read permission.

GitHub Apps with the checks:write permission will receive the requested and rerequested action payloads without subscribing to the check_suite webhook event. The requested action triggers when new code is pushed to the app's repository. A rerequested action occurs when someone requests to re-run the entire check suite from the pull request UI. See "About status checks" for more details about the GitHub UI. When you receive the requested or rerequested action events, you'll need to create a new check run. Only the GitHub App that is being asked to run a check will receive the requested and rerequested payloads.

GitHub Apps that have the checks:read permission and subscribe to the check_suite webhook event receive the completed action payload for all check suites in the app's repository. Repositories and organizations that subscribe to the check_suite webhook event only receive the completed event action.


*/