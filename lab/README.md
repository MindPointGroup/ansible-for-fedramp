Ansible For FedRAMP Lab
=======================

A lab that leverage docker and docker-compose for creating a lab to run the playbooks used during AnsibleFest

**Versions Used**
It might work with older/newer versions but it was only ever tested with the following

```
docker-compose version 1.22.0, build f46880f
Docker version 18.06.1-ce, build e68fc7a
```

## Usage

Inside this directory.

```
docker-compose up -d
```

This will spin up four centos7 containers

Then to connect to the Ansible control node

```
docker-compose run controller su - ansible
```

Inside this node you'll see a lab directory, `cd` into it

You should be able to immediately run your choice of

```
ansible-playbook ac-2\(1\).yml
ansible-playbook cm-6\(1\).yml
```
For `ir-4(1).yml` you'll need to run this with extra-vars like so

```
ansible-playbook ir-4\(1\).yml -e "aws_region=us-east-1 vpc=vpc-12345 subnet=subnet-1234567 instance=i-382929292 incident_id=XXXXXX
```

`incident_id` is just any unique identifier that you want to associate with the snapshotted image
