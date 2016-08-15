Install requirements (roles)
```
> ansible-galaxy install -r requirements.yml
```

Setup server
```
> ansible-playbook playbooks/nginx.yml
> ansible-playbook playbooks/app.yml
```

Deploy app
```
> ansible-playbook playbooks/deploy.yml
```

Add `-vvvv` for verbose output

Run specific tasks
```
--step --start-at-task=tasknamehere
```
