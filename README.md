Prototype a web extension which logs network requests

    Read about writing web extensions on the Mozilla Developer Network
    https://developer.mozilla.org/en-US/Add-ons/WebExtensions
    Read about the Web Request API
    Write a basic Web Extension which logs network requests (how you store or display isn't important for now)
    Upload your code to github
    Submit your idea for review: mail me at pauljt@mozilla.com and we will discuss your prototype

Tips

    As an extension, you might try to filter for third-party requests only. A third-party request is a network request which is sent to a different domain to the domain which is displayed in the address bar. For example, if foo.com includes an image hosted at bar.com/image.jpg, this is a third-party network request.
    You might look at the blok extension which uses the WebRequest API to block page loads.
