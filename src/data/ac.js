module.exports = [
  {
    "controlFamily": "AC",
    "section": 2,
    "subsection": "f",
    "description": "Creates, enables, modifies, disables, and removes information system accounts in accordance with [Assignment: organization-defined procedures or conditions];\n",
    "solution": "Accounts in the information system are managed through Ansible. The logic of which is stored in our git repository. The code is executed using [Ansible Tower/AWX]. The logic operates off a variables file, also in version control and living along side the execution logic itself. The variable file declares the user accounts that must be created or removed. This also includes whether they account should have elevated access or not and what groups a particular user account should be associated with."
  },
  {
    "controlFamily": "AC",
    "section": 2,
    "subsection": "k",
    "description": "Establishes a process for reissuing shared/group account credentials (if deployed) when individuals are removed from the group.\n",
    "solution": "When a user is removed from the group a process is automatically triggered via Ansible code that will then reissue any shared credentials and distribute the new credential automatically via <NOTIFCATION METHOD>."
  },
  {
    "controlFamily": "AC",
    "section": 2,
    "subsection": "",
    "enhancement": 1,
    "description": "The organization employs automated mechanisms to support the management of information system accounts.\n",
    "solution": "<Describe LDAP/AD/etc usage>. For accounts not directly managed with <AD/LDAP/etc> Ansible is leveraged to the management of accounts. Ansible logic is excuted from Tower/AWX located in <network location>."
  },
  {
    "controlFamily": "AC",
    "section": 2,
    "subsection": "",
    "enhancement": 2,
    "description": "The information system automatically [Selection: removes; disables] temporary and emergency accounts after [FedRAMP Assignment: no more than 30 days for temporary and emergency account types].\n",
    "solution": "Ansible Tower has a preconfigured job to run every 30 days which <removes/disables> temporary and emergency accounts that have met or passed the 30 day timeframe. The logic for this activity can be found at <location of source code>."
  },
  {
    "controlFamily": "AC",
    "section": 2,
    "subsection": "",
    "enhancement": 3,
    "description": "The information system automatically disables inactive accounts after [FedRAMP Assignment: ninety (90) days for user accounts].\n",
    "solution": "Ansible Tower has a preconfigured job to run every 90 days which disableds inactive accounts that have met or passed the 90 day timeframe. The logic for this activity can be found at <location of source code>."
  },
  {
    "controlFamily": "AC",
    "section": 2,
    "subsection": "",
    "enhancement": 6,
    "description": "The organization employs the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users) which are necessary to accomplish assigned tasks in accordance with organizational missions and business functions.\n",
    "solution": "Users are restricted to only doing what is necessary in accordance with organizational missions and business functions by only being able to effect these types of changes through Ansible Tower. Within Ansible Tower users are limited to a subset of capabilities and jobs based on what their level of access and authorization is for their given role.",
    "notes": "You'll likely need more than just Ansible here, but it can help with certain types of functions."
  }
]
