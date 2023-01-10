import json
from subprocess import check_output, call
import os

async def retrieve_session():

    wd = os.getcwd()
    os.chdir("./app/apis/controllers/automa_auth")
    sessionBytes = check_output(['node', 'main.js'])
    os.chdir(wd)
    
    sessionDict = sessionBytes.decode('utf8')
    """
    sessionDict = {
        "currentSession": {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjU4ODQwOTQ3LCJzdWIiOiJkZGE3OTMwOC1lMjBkLTQ5NTAtYmM0OS04ODQzM2MzNzA1ODIiLCJlbWFpbCI6ImdpdEBsb3dzcGFjZS5kZSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZ2l0aHViIiwicHJvdmlkZXJzIjpbImdpdGh1YiJdfSwidXNlcl9tZXRhZGF0YSI6eyJhdmF0YXJfdXJsIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE5Mzc1NDk2P3Y9NCIsImVtYWlsIjoiZ2l0QGxvd3NwYWNlLmRlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6ImZsb3ciLCJpc3MiOiJodHRwczovL2FwaS5naXRodWIuY29tIiwibmFtZSI6ImZsb3ciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJvdmVyZmx3IiwicHJvdmlkZXJfaWQiOiIxOTM3NTQ5NiIsInN1YiI6IjE5Mzc1NDk2IiwidXNlcl9uYW1lIjoib3ZlcmZsdyJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.KUoJ-K9q9EETdoJ-_etHKs4vC1SRrKWf-sT8gkXYHo0"
        }
    }
    """

    return sessionDict
