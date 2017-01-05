# mongodb
mongodb nodejs project for add , delete , update documents

# mongodb install
  
	grep repo for centos

		`/etc/yum.repos.d/mongodb-org-3.4.repo`

		[mongodb-org-3.4]

		name=MongoDB Repository

		baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/

		gpgcheck=1

		enabled=1

		gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc

# as root
		`yum repolist`
	  `yum install -y mongodb-org`
		`service mongod start`
		`tail /var/log/mongodb/mongod.log` 
		`systemctl enable mongod.service` 


# enable auth 
    // connect to mongo shell
		  `mongo --port 27017`
				use admin
			 db.createUser(
			{
				user: "dbadmin",

				pwd: "1231234",

				roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]

			}

			)
  # enable auth
				/etc/mongod.conf

				security:
					authorization: enabled
		 # to allow remote connection listen to public IP
			 net:
				 port: 27017
				 bindIp: PUBLIC_IP


