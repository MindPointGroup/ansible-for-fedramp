##
## Copyright 2017, Jonathan I. Davila <jonathan@davila.io>
##
FROM centos/systemd

RUN yum update -y; yum clean all
RUN yum install -y epel-release
RUN yum -y install python-pip ansible git vim nano openssh-server openssh openssh-clients openssl-libs passwd sudo; yum clean all
RUN yum remove -y epel-release

RUN pip install awscli boto3 botocore boto

RUN systemctl enable sshd.service
RUN sed -i '/^session.*pam_loginuid.so/s/^session/# session/' /etc/pam.d/sshd && \
    sed -i 's/Defaults.*requiretty/#Defaults requiretty/g' /etc/sudoers && \
    rm /usr/lib/tmpfiles.d/systemd-nologin.conf
RUN mkdir /var/run/sshd
RUN ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key -N '' 

ADD ./start.sh /start.sh
RUN chmod 755 /start.sh
RUN ./start.sh

VOLUME [ "/sys/fs/cgroup" ]

EXPOSE 22
EXPOSE 80

CMD ["/usr/sbin/init"]
