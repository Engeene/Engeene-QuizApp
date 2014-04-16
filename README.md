IntelXDK
========

This repository holds the code for an application developed with Intel XDK
tools.

The main goal of this application is to road test the features provided by the
Intel's XDK so to write an article for [Engeene](http://www.engeene.it/).

This application asks the user some questions to evauate the mental state of
the subject. Should the subject be considered unable to perform mind
challenging tasks (such as driving, or writing important emails) the
application will suggest her to take a cup of coffee, or a nap.

The goal of the application is to pick a series of questions from a
local JSON file, and will prsent the questions to the user one after the other.
Depending on the outcome of the questions the application will suggest the user
to perform the task, to take a nap, or something.

The first versions of the application will just ask built in questions to the
user. That is questons that are hard coded in to the application.

In later versions more questions could be added, and remote download could be
supported, too. Also support for organizing questions in multiple categories is
beeing considered as a later option.

Further reading (TODO)
======================

The application's views.

The application's control flow.

The questions file format (JSON).
