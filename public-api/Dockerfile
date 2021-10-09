FROM centos:7

ENV TIME_ZONE=America/Toronto

RUN yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm -y && \
    yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm -y && \
    yum update -y && \
    yum install yum-utils -y && \
    yum-config-manager --enable remi-php73 && \
    yum install make -y && \
    yum install php php-pdo php-mysql php-mcrypt php-mbstring php-xml php-zip -y && \
    curl -sS https://getcomposer.org/installer | php -- --version 1.10.16 --install-dir=/usr/bin --filename=composer && \
    yum clean all -y


RUN rm -rf /etc/httpd/conf && rm -rf /etc/httpd/conf.d && rm -rf /etc/httpd/conf.modules.d

COPY files/httpd.conf /etc/httpd/conf/httpd.conf

COPY files/php.ini /etc/php.ini

COPY files/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

WORKDIR /app

ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD []
