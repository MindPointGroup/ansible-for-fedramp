module.exports = [
  {
    "controlFamily": "CM",
    "section": 2,
    "subsection": "",
    "enhancement": 2,
    "description": "The organization employs automated mechanisms to maintain an up-to-date, complete, accurate, and readily available baseline configuration of the information system.\n",
    "solution": "The system's baseline configuration is maintained by a number of Ansible Tower jobs. These Tower jobs are backed by source code which is periodically reviewed and updated in accordance with CM policies. The baselines configurations which are automatically configured include [EXAMPLES], Images for Virtual Machine creation, NACLs, User Accounts of X services, Network Topology for AWS/Google Cloud/Azure, Firewalls, Network Devices, Load Balancers, Cloud Resources (S3, lamba functions, api gateways, etc)."
  },
  {
    "controlFamily": "CM",
    "section": 2,
    "subsection": "",
    "enhancement": 3,
    "description": "The organization retains [Assignment: organization-defined previous versions of baseline configurations of the information system] to support rollback.\n",
    "solution": "By using git as the version control method, it is possible to rollback to any prior baseline configuration version by doing a git checkout of the source code at a specified point in time by referencing a git tag, branch, or commit hash. Because of the modularity of the baseline configuration, independent components of the information system can be rolled back independently of other components."
  },
  {
    "controlFamily": "CM",
    "section": 6,
    "subsection": "",
    "enhancement": 1,
    "description": "The organization employs automated mechanisms to centrally manage, apply, and verify configuration settings for [Assignment: organization-defined information system components].\n",
    "solution": "Management of configuration settings is done via source code version control using git. The application and verification of configuration settings is done via Ansible which is invoked by Ansible Tower."
  },
  {
    "controlFamily": "CM",
    "section": 7,
    "subsection": "b",
    "enhancement": 1,
    "description": "Disables [Assignment: organization-defined functions, ports, protocols, and services within the information system deemed to be unnecessary and/or nonsecure].\n",
    "solution": "Ports, protocols, and services are actively managed through Ansible which executes logic based of code stored in version control. When a port, protocol, or service is deemed unnecessary, it is removed from the respective Ansible variables file and the associated Ansible Tower job is launched. This has the effect of then disabling/removing the unnecessary components."
  }
]
