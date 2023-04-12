FROM python:3.10

RUN pip install pipenv

ENV PIPENV_VENV_IN_PROJECT=1
ENV FLASK_APP=src.app

WORKDIR /app
COPY Pipfile* ./
RUN pipenv install
COPY . .

EXPOSE 5000

CMD pipenv run flask run --host 0.0.0.0