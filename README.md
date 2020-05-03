# AngularPlugableSite
I'm new to Angular.  I have dabbled a few times but lost interest and moved on
to other things (this is only for hobby purposes).  Occasionally my mind wanders
back to wanting to have a decent personal site, and make a control panel for
this (what "this" is varies based on my interest at the time), and combine these
two useful tools (again, which specific tools depends on my interests at the
time) into one super-useful tool, etc.

It would be really nice if I could put together a single frontend framework to
cover as many tasks as possible and then mix and match "plugins" depending on
the deployment.

I have taken as a base the example code for this article [Building an extensible
Dynamic Pluggable Enterprise Application with Angular](https://medium.com/angular-in-depth/building-extensible-dynamic-pluggable-enterprise-application-with-angular-aed8979faba5)

My initial intention is to achieve the following (as plugins):
* Site Navigation: Use either Angular's Material Design Components or VMware's
  Clarity framework to provide styled navigation in the form of a fixed top bar.
* Blog/(read-only) Wiki: I want to create a basic framework to present somewhat
  static content.  I will create content seperately and upload it somewhere as
  Markdown and the site will collect it with a HTTP request and display it.  I
  may expand this into a proper Wiki with editor and versioning, etc. in the
  future but, I'm starting with an achievable goal.

I'm trying to achieve as much as possible without having any serverside code.
I'd like the "site" to be static files that can be dropped into any hosting
platform that can just serve static content.  The site can make requests to
various APIs for data but should not need it's own dedicated server/API (at
least until it needs to be able to "write" data and thus requires logins, etc.).

## Incomplete Plans
### Blog/Wiki
I'm thinking that the datasource where the markdown files is stored is
Github.com for the initial implementation and add support for other backends
later.  I might be able to use the Github API that searches code within a
repository as the site's search engine.  Git itself takes care of versioning.

### Themeing
Can I make the site's theme (Material/Clarity/etc.) a plugin so it can
be easilly replaced?

## Upstream Credits
This site is based on the excellent [Building an extensible Dynamic
Pluggable Enterprise Application with Angular](https://medium.com/angular-in-depth/building-extensible-dynamic-pluggable-enterprise-application-with-angular-aed8979faba5).  The article's example code can be found
[here](https://github.com/alexzuza/angular-plugin-architecture)
and the fork I used, which was updated for Angular 9, is
[here](https://github.com/apoprotsky/angular-plugin-architecture).
