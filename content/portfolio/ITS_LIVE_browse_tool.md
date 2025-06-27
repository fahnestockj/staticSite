---
title: "Web Native Browse Tool for the NASA JPL ITS\_LIVE Project’s Ice Velocity Dataset"
date: 2024-10-01T00:00:00-04:00
draft: false
showtoc: false
---
**Published in:** [IEEE UEMCON 2023 — Best Paper Award](https://doi.org/10.1109/UEMCON59035.2023.10316074)
![Ice velocity browse tool](/mappin.jpeg)
To help climate scientists and non-technical users alike access decades of satellite-derived ice velocity data, I collaborated with NASA’s ITS_LIVE team to rebuild their glacier data visualization tool from the ground up. The original tool was based on Jupyter Notebooks, which required launching a new kernel and performing significant server-side computation for every user. This architecture imposed serious scalability limitations and high hosting costs.

I developed a fully client-side JavaScript application that enables interactive exploration of the ITS_LIVE dataset directly in the browser. By shifting all compute to the user’s device and directly accessing the dataset from AWS S3, Mappin eliminated the need for an intermediary data server. This architecture not only made the tool significantly more scalable but also reduced dramatically reduced latency. Time-to-first-byte (TTFB) dropped by over **120x**, and accessibility/performance audits using Google Lighthouse showed a **40% improvement**, with scores consistently above 92 across performance, accessibility, and best practices.

Built with React, Leaflet, and Zarr.js, Mappin handles on-the-fly coordinate projection, finds the closest available velocity time series, and renders interactive, shareable charts via stateful URLs. It's a responsive single-page app (SPA) designed to work across devices and network conditions. Thanks to its static build, it can be distributed via CDNs or hosted directly alongside the data in an S3 bucket, drastically simplifying deployment and operations.

Mappin now serves as a more accessible entry point to NASA’s global cryosphere data, and lays the groundwork for future public-facing climate research tools. You can [explore the ice flow history of Alaska’s Malaspina Glacier here](https://its-live.jpl.nasa.gov/app/index.html?lat=60.08611&lon=-140.46227&c=b&lat=60.03192&lon=-140.53711&c=g&lat=59.9592&lon=-140.62294&c=r&z=9&x=1984-12-31&x=2023-12-31&y=-423&y=4468).

