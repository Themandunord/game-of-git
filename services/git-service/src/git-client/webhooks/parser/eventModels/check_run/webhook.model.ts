/*


https://developer.github.com/v3/activity/events/types/#checkrunevent


Triggered when a check run is created, rerequested, completed, or has a requested_action. The checks permission allows you to use the checks API. If you plan to create or modify check runs, your GitHub App will need to have the checks:write permission. If you only plan to consume check runs, your GitHub App only needs the checks:read permission.

GitHub Apps with the checks:write permission will receive the rerequested action without subscribing to the check_run webhook event. The rerequested action occurs when someone requests to re-run your app's check from the pull request UI. See "About status checks" for more details about the GitHub UI. When you receive a rerequested action, you'll need to create a new check run. Only the GitHub App that someone requests to re-run the check will receive the rerequested payload. Similarly, only the GitHub App someone requests to perform an action specified by the app will receive the requested_action payload.

GitHub Apps that have the checks:read permission and subscribe to the check_run webhook event receive the created and completed action payloads for all check runs in the app's repository. Repositories and organizations that subscribe to the check_run webhook event only receive created and completed event actions.

*/