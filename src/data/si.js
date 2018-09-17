module.exports = [
  {
    "controlFamily": "SI",
    "section": 2,
    "subsection": "a",
    "description": "(A) Identifies, reports, and corrects information system flaws\n",
    "solution": "Through scheduled jobs, Ansible Tower invokes ansible content which is able to correct drift. When this drift is detected it is immediately corrected and a report is sent out as a <webhook/email/task describe logic used>"
  },
  {
    "controlFamily": "SI",
    "section": 2,
    "subsection": "c",
    "description": "Installs security-relevant software and firmware updates within [FedRAMP Assignment: thirty 30 days of release of updates] of the release of the updates; and\n",
    "solution": "Through a job scheduled at <interval of <= 30 days>, Ansible Tower invokes Ansible content which is able to install and apply system security patches. This content can be found <location of content>"
  },
  {
    "controlFamily": "SI",
    "section": 2,
    "subsection": "d",
    "description": "Incorporates flaw remediation into the organizational configuration management process.\n",
    "solution": "Through scheduled jobs, Ansible Tower invokes ansible content which is able to correct flaws. When flaws is detected it is immediately corrected.\n"
  },
  {
    "controlFamily": "SI",
    "section": 2,
    "enhancement": 2,
    "description": "The organization employs automated mechanisms [FedRAMP Assignment: at least monthly] to determine the state of information system components with regard to flaw remediation.\n",
    "solution": "The configuration and state of information system components is entirely defined as code in Ansible YAML syntax. When a flaw, such as drift detected or patch needed, is found, it is updated at <an interval of <=30 days> through a scheduled job within Ansible Tower\n"
  },
  {
    "controlFamily": "SI",
    "section": 2,
    "enhancement": 3,
    "subsection": "a",
    "description": "Measures the time between flaw identification and flaw remediation; and\n",
    "solution": "Execution of Ansible content that is capable of identifying and addressing flaws is measured using Ansible Tower and that information cna be retrieved via API.\n"
  }
]
