/*

https://developer.github.com/v3/activity/events/types/#contentreferenceevent

Triggered when the body or comment of an issue or pull request includes a URL that matches a configured content reference domain. Only GitHub Apps can receive this event. GitHub Apps that have the content_references write permission and subscribe to the content_reference event receive this webhook event when a new content reference is created. See "Using content attachments" to learn more about content references and attachments.

Webhook events are triggered based on the specificity of the domain you register. For example, if you register a subdomain (https://subdomain.example.com) then only URLs for the subdomain trigger this event. If you register a domain (https://example.com) then URLs for domain and all subdomains trigger this event. See "Create a content attachment" to create a new content attachment.








*/