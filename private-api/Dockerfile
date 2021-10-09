FROM centos:8

ENV TIME_ZONE=America/Toronto

RUN yum update -y && \
  curl --silent --location https://rpm.nodesource.com/setup_12.x | bash - && \
  yum install nodejs make -y && \
  yum clean all -y

COPY files/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 3000

WORKDIR /app

ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD []
