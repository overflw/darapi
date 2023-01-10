# Darapi

## Quickstart

### Run the app in containers

* Clone the repo and navigate to the root folder.

* To run the app using Docker, make sure you've got [Docker](https://www.docker.com/) and [Docker Compose V2](https://docs.docker.com/compose/cli-command/) installed on your system. From the project's root dirctory, run:

    ```bash
    docker compose up -d
    ```

### Or, run the app locally

If you want to run the app locally, without using Docker, then:

* Clone the repo and navigate to the root folder.

* Create a virtual environment. Here I'm using Python's built-in venv in a Unix system. Run:

    ```bash
    python3.10 -m venv .venv
    ```

* Activate the environment. Run:

    ```bash
    source .venv/bin/activate
    ```

* Go to the folder created by cookie-cutter (default is **fastapi-nano**).

* Install the dependencies. Run:

    ```bash
    pip install -r requirements.txt && pip install -r requirements-dev.txt
    ```

* Start the app. Run:

    ```bash
    uvicorn app.main:app --port 5000 --reload
    ```


## Folder structure

This shows the folder structure of the default template.

```
fastapi-nano
├── app                                 # primary app folder
│   ├── apis                            # this houses all the API packages
│   │   ├── api_a                       # api_a package
│   │   │   ├── __init__.py             # empty init file to make the api_a folder a package
│   │   │   ├── mainmod.py              # main module of api_a package
│   │   │   └── submod.py               # submodule of api_a package
│   │   └── api_b                       # api_b package
│   │       ├── __init__.py             # empty init file to make the api_b folder a package
│   │       ├── mainmod.py              # main module of api_b package
│   │       └── submod.py               # submodule of api_b package
│   ├── core                            # this is where the configs live
│   │   ├── auth.py                     # authentication with OAuth2
│   │   ├── config.py                   # sample config file
│   │   └── __init__.py                 # empty init file to make the config folder a package
│   ├── __init__.py                     # empty init file to make the app folder a package
│   ├── main.py                         # main file where the fastAPI() class is called
│   ├── routes                          # this is where all the routes live
│   │   └── views.py                    # file containing the endpoints of api_a and api_b
│   └── tests                           # test package
│       ├── __init__.py                 # empty init file to make the tests folder a package
│       ├── test_api.py                 # integration testing the API responses
│       └── test_functions.py           # unit testing the underlying functions
├── dockerfiles                         # directory containing all the dockerfiles
├── .env                                # env file containing app variables
├── docker-compose.yml                  # docker-compose file
├── pyproject.toml                      # pep-518 compliant config file
├── requrements-dev.in                  # .in file to enlist the top-level dev requirements
├── requirements-dev.txt                # pinned dev dependencies
├── requirements.in                     # .in file to enlist the top-level app dependencies
└── requirements.txt                    # pinned app dependencies
```


<div align="center">
✨ 🍰 ✨
</div>
