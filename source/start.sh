mysql.server start &
(cd tacitaWebServer/ && vapor run serve)  &
(cd classesWebServer && vapor run serve ) &
(cd transportWebServer && vapor run serve) &
