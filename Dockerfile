FROM python:3

WORKDIR /srv/blankiety

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "blankiety_galantow.app:app", "--port", "8080", "--host", "0.0.0.0"]

EXPOSE 8080
