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

The first version of the application will pick a series of questions from a
local JSON file, and will prsent the questions to the user one after the other.
Depending on the outcome of the questions the application will suggest the user
to perform the task, to take a nap, or something.

In later versions more files could be added, and remote download could be
supported, too. Also support for organizing questions in multiple categories is
beeing considered as a later option.

Further reading (TODO)
======================

The questions file format (JSON).

The application's control flow.

The application's views.
