##
## Copyright 2018, Jonathan I. Davila <jonathan@davila.io>
##

#!/bin/bash

__create_user() {
# Create a user to SSH into as.
useradd ansible
usermod -aG wheel ansible
SSH_USERPASS=automation
echo -e "$SSH_USERPASS\n$SSH_USERPASS" | (passwd --stdin ansible)
echo ssh user password: $SSH_USERPASS
chmod u+w /etc/sudoers
echo 'ansible ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
}

# Call all functions
__create_user
