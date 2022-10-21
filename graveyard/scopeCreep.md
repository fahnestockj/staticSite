---
title: "ScopeCreep"
date: 2022-08-08T15:12:34-04:00
draft: true
---

# Iteration on Quantas Engineering Planning and Why we need a PM

Linear tickets were our main tool to communicate, document, and plan our sprints. Over time there was an errosion of what a ticket communicates. Early on engineering tickets looked like this:

* AC: Acceptance criteria of the ticket 
* TA: How will this AC be reached


This works great for basic clearly defined tickets which are easy to define. For example 
```
ENG-534: Get 5 remaining JP Morgan confs complete in dev
 
AC: We want to get all 5 JP Morgan confs to be parsed completely.
    Then turn them into deals!! 

TA: One at a time.
	Create a test.
	Make it pass.
	Demo!
```

This format started falling apart when the tickets got larger and larger:

```
ENG-551 PROD/ENG: Resolve all impira issues with fixedSwap Confirmations


This will be an iterative process of fixing both the code and impira fields. By pairing on the broken confirmations ENG won't be blocked by domain confusion and PROD can fix up the impira mismatches.

PROD: work from the admin panel and impira fixing where impira didn't recognize a field

Eng: refactor the impira parsing code for the confirmations PROD can't fix
```
 
Notice there's an implied definition of done - but the process of resolving impira issues with fixed swap confirmations is unkown. 

The key word in the ticket description is **iterative process**.
This ticket has an easy AC, but an unkowable TA since the problems haven't been uncovered yet.

Ticket became progressively harder to use due to the
# MASSIVE REFACTORING
we've untertook in the last few months.
