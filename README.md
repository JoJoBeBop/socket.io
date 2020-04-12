# DIFFERENCE BETWEEN NAMESPACES AND ROOMS

"Namespacing" your sockets means assigning different endpoints or paths to your sockets in a way to manage data connections. You can define arbitrary channels called rooms to namespaces that sockets can join or leave. Rooms are essentially subchannels of the namespaces.

Source: https://coloringchaos.github.io/rtw-s17/namespaces-rooms/


I'm not sure if my app is in need of, for example real-time communication that a chat application must have. But since my app would (hopefully) be operated in the corner of the browser, the immediate communication between the user and the page does sound something that could be achieved well with socket.io. 
# socket.io-demo

Adapted from [Socket.IO introduction](https://socket.io/get-started/chat/) (did not found licence (assume MIT), original author Guillermo Rauch).
# socket.io
