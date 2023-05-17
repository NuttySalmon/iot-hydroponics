# IoT-Hydroponics
The project aims to provide an IoT automated system for hydroponics plant growth using the “ebb and flow” method. It utilizes Raspberry Pi as an edge device with actuators and sensors, and leverages AWS hosted serverless web app as a frontend interface for remote user monitoring and control.

Demo: https://youtu.be/IKrSYXYS4Ik

<img src="images/high_level_architecture.png"  width="600"  alt="high level architecture">

Not fully implemented:

1. STM32 ARM based device as edge device
2. Camera

## Diagrams
### Chassis design
![chassis design](images/chassis.png)
### Implemented AWS services
![aws](images/AWS.png)
### Edge device connections
![edge device connections](images/edge_device_connections.png)
### State diagrams
#### Edge main program
![edge device main program state diagram](images/state_edge_device.png)
#### User authentication
![user authentication state diagram](images/state_user_auth.png)
### Business class diagram
![business class diagram](images/business_class.png)
### New edge configuration activity diagram
![new edge configuration activity diagram](images/activity_new_config.png)

## Web application screenshots
### Landing page
![landing](images/web/landing.png)
### User register
![user register](images/web/register.png)
### User login
![user login](images/web/login.png)
### Dashboard
![dashboard](images/web/dash.png)
### Edge device status
![edge device status](images/web/status.png)
### Edge device configuration
![edge device configuration](images/web/config.png)

