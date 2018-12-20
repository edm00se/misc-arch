---
lastModified: '2018-12-21'
comments: true
---

# First Thing's First

Happy Holidays! Whatever it is you celebrate around this time of year, I hope you enjoy and have a great one, and a happy new year.

## 🦃 🎅 🎄 ❄ 🎉 🥂 🍾

# A NAS for Home Use

Being the sort of a person that has been known to, on occasion, overdo things, I decided a while ago to begin building a NAS for my home use. Why build a NAS in the first place? Therein that decision is and what a NAS can do for you.

## What A NAS Is

A NAS at the basic level provides file serving for a network, but ultimately what it can do is provide a configured server with services from file serving to media, account management, and more. For many people, I wouldn't recommend a full blown NAS configuration, but rather a beefed up computer, configured to act as a server, due to its relative simplicity. At some point, the lines blur and yes, I'm over simplifying, but I'm not going to dive into every possible scenario of configuration here. The bottom line, I recognized the need for multiple machine access, and multiple OS support, ease ofconfiguration, file and media sharing, along with some additional benefits.

## Options For NAS Hosting

Beyond the hardware, and whether you're self-hosting or hosting on a cloud instance or VPS, the choice needs to be made as to what operating system to choose. I knew I wanted something in the *nix flavor, the only question being what gave me what I wanted. The ones I lined up followed something along the lines of:

- a linux distribution, such as Ubuntu, my go-to as I prefer Debian based Linux distributions, and I've had great experience with Ubuntu since its early days
  - the implication here is that all services would be ones I would set up and configure
  - this would give me absolute control, but take some manual work, setup, and configuration
- FreeNAS
  - less manual fiddling (much of the file sharing and services I would set up are available for quick configuration)
  - built on top of FreeBSD
  - has baked in:
    - support for ZFS + RAID-Z
      - configurable snapshots of volumes
    - Apple file protocols (AFP, for sharing with macOS), and Samba (for Windows)
    - Time Machine backup configurations (what's the point in having several terabytes of storage if you can't backup in a nice fashion?)
    - configuration of various services via a unified web dashboard
    - system reporting
    - jails, a FreeBSD feature, not "containers", but provisioned sandboxed environments with some similarities to containers, but don't call them containers
    - plugins, easily installed/enabled, some of which would achieve the majority of what I wanted
      - Plex
      - Crashplan\*
      - ownCloud
      - etc.
  - strong and regular support and updates
  - lots of quality documentation
    - how-to videos, for anything I might not be as familiar with
    - wiki
    - guides, including a guide and wizard built into the web ui
  - development backed and regularly receives updates from iXsystems
- XigmaNAS (formerly known as NAS4Free)
  - features many similarities to FreeNAS, such as
    - built on FreeBSD
    - ZFS + RAID support
    - there's more, I'm just not as familiar with it
  - compared against FreeNAS
    - no easily available plugins
    - you can set up a FreeBSD jail and perform your own installs
    - generally somewhat similar, IMO

## Decisions

Ultimately, I chose FreeNAS, primarily for the following reasons:

- ease of setup
- ease of configuration of services
- ease of adding additional services (via plugins), specifically
  - Plex for media content
  - Crashplan\* for backups
- regular updates and strong development effort

asdf