# Blankiety Galantów

Blankiety Galantów jest karcianą grą przeglądarkową, która umożliwia prowadzenie rozgrywek przez Internet pomiędzy użytkownikami.

## Uruchomienie (Linux)
Utwórz środowisko dla Pythona:
```
python3 -m venv venv
source venv/bin/activate
```
Zainstaluj niezbędne zależności:
```
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt
```
W folderze głównym repozytorium uruchom:
```
$ python -m blankiety_galantow
```

### Dostępne opcje
```
usage: blankiety_galantow [-h] [--port PORT] [--host HOST] [--reload] [--log-level LOG_LEVEL]

Run the app

optional arguments:
  -h, --help             show this help message and exit
  --port PORT            Set port (default: 80)
  --host HOST            Set host (default: localhost)
  --reload RELOAD        Enable auto reload (default: False)
  --log-level LOG_LEVEL  Set log level: [info|debug|...] (default: info)
```

Można również uruchomić serwer HTTP samodzielnie:
```
uvicorn blankiety_galantow.app:app
```
i wykorzystać wszystkie [opcje uruchomienia Uvicorna](https://www.uvicorn.org/deployment/)

## Zbudowanie obrazu Dockera

W katalogu głównym projektu uruchom:
```
docker build -t blankiety:latest .
```

Następnie możesz uruchomić instancję aplikacji w kontenerze. Blankiety Galantów nasłuchują w kontenerze portu `8080`. Możesz do tego portu zmapować dowolny, wybrany port w systemie hosta. Przykład uruchomienia obrazu `blankiety:latest`:
```
docker run --name blankiety_app -p 3000:8080 -d blankiety:latest
```
Po takim uruchomieniu kontenera, aplikacja jest dostępna pod adresem, m. in. `localhost:3000` na systemie hosta. 

## Zasady projektu
Zajrzyj do [tego dokumentu](CONTRIBUTING.md).
