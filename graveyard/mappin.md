---
title: "Mappin"
date: 2021-09-12T14:29:48-04:00
draft: true
showtoc: false
---

### Data Visualization Mapping Web App 

 Currently live at <a href="http://itsliveiceflow.science" target="_blank">itliveiceflow.science</a>!

![mappin](https://climapp.nyc3.digitaloceanspaces.com/OtherImages/finalMappinScreencap.png)

The goal of this project was to provide easy access to the ice flow velocity data the ITS\_LIVE project provides in a format that encourages exploration and curiosity.

### Frameworks
Used React with several Leaflet libraries to display the velocity mosaic and collect user inputs. The front end is displayed through a Django template which serves the React bundle. The Django project is hosted through Gunicorn and Nginx on a Digital Ocean droplet. The front-end fetches the time-series through HTTP get requests handled by Django's URL dispatcher. The droplet fetches and serves the time-series points from an AWS bucket.




