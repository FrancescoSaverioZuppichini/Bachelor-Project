mysql.server start &
(cd authMicroService/ && vapor run serve)  &
(cd opendataWebServer && vapor run serve ) &
(cd userDisplaySocketMicroservice && vapor run serve) &
(cd coursesWebServer && vapor run serve)
