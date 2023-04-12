# Local Setup

Dependencies:
```bash
export PIPENV_VENV_IN_PROJECT=1
pipenv install 
```

Migrations:
```bash
export FLASK_APP=todos/app.py
pipenv run flask db upgrade
```
Server:

```bash
pipenv run flask run
```

Flask API will be running on `127.0.0.1:5000`.
