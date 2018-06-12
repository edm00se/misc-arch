---
lastModified: '2018-06-12'
comments: false
---

# Announcing: [Awesome Board Games][awesome-bg]!

A side project I've been slowly working on for a while is the [Awesome Board Games list][awesome-bg]. What's an [awesome list][awesome-orig]? It's a list of awesome things, for a particular topic. Generally these lists are hosted/kept on [GitHub][gh], a free to use site and service with code shared via [the git version control system], issue tracking, and more. Anyone can have an account and contribute to public repositories, making it for a great place for open source softare and awesome lists.

## Board Games!

Why? Why not! Board games bring people together, are a great way to interact and spend time with each other. Board games come in a variety of difficulty levels and many can be easily picked up by beginners. Board games come in a wide range of game play styles and most people can find one that suits them, or suits their mood.

## What's New Since the Soft Launch?

I've cleaned up the documentation for contributions... a lot. Initially it was quite wordy, with the best intetions. But the moment it escalates from informing to confusing, it's too much documentation. If a person is new to git pull/merge requests or markdown, they should read the [Contribution Guide][contrib-guide] first, whereas if you are familiar with git PRs and markdown, skip to the [Formatting Example][format-example]. They should be a bit friendlier and if anyone has any issues with getting started, please let me know!

The biggest visual change is that it now has a proper website. Not everyone wants to view a GitHub repository readme file. It works, gets the job done, and is familiar to a lot in the development community, but can be intimidating to outsiders. The site itself [awesomeboard.games][awesome-bg] implements [vuepress][vuepress] which brings with it a few niceties. The site is searchable, with resulting section titles, such as the name of a board game, as results. It also builds automatically on each merge into the `master` branch, which means that I should _hopefully_ be pretty hands-off with contributions. If they're well formed, a la the formatting guide, then it should build itself out and deploy after any Pull Request is merged, with no further human interaction.

## Please Contribute

Anyone can have a GitHub account and anyone can submit board games they think are awesome.

## Questions

Curious as to how to contribute?

### [Contribution Guide][contrib-guide]

Want the short version of how to format things?

### [Formatting Example][format-example]

Having trouble getting started?

### [Contact Me][contact-eric]

Thanks for reading. I hope you contribute. Have a great game!

[awesome-bg]: https://awesomeboard.games/
[contrib-guide]: https://awesomeboard.games/contributing.html#adding-to-this-list
[format-example]: https://awesomeboard.games/formatting.html#example
[awesome-orig]: https://awesome.re/
[gh]: https://github.com/
[git-scm]: https://git-scm.com/
[contact-eric]: https://goo.gl/forms/oQeTPDqsGEWGTZoc2
[vuepress]: https://vuepress.vuejs.org