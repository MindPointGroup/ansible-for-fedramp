#!/bin/bash
__create_user() {

echo Creating user: 'ansible'
useradd ansible
echo Adding 'ansible' to 'wheel' group
usermod -aG wheel ansible
SSH_USERPASS=automation
echo setting ssh user password: $SSH_USERPASS
echo -e "$SSH_USERPASS\n$SSH_USERPASS" | (passwd --stdin ansible)
}


# Call all functions
__create_user
