---
title: "Mappin"
date: 2021-09-12T14:29:48-04:00
draft: true
showtoc: false
---

<h3>Data Visualization Mapping Web App</h3>

<a href="http://itsliveiceflow.science" target="_blank">itliveiceflow.science</a>

![mappin](https://climapp.nyc3.digitaloceanspaces.com/OtherImages/MappinScreengrab.png)

The goal of this project is to provide easy access to the ice flow velocity data the ITS\_LIVE project provides in a format that encourages exploration and curiorisity. Future goals include adding the ability to select any point on the graph to get data rather than just the couple hundred major ice flows as well as the ability to add and clear more data on the graph. Lastly the ability to download the data you load into the graph in multiple formats.

<h3>Frameworks</h3>
Used React with several Leaflet libraries to create the maps. There's a django backend running on a digital ocean droplet which gathers and provides the data from an AWS bucket in the cloud. The dataset is currently being expanded to include data from all over the globe. 


