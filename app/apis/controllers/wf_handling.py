import requests
import json

from requests.structures import CaseInsensitiveDict
from app.apis.controllers.automa_auth.utilities import retrieve_session


async def publish_wf_autmoma(wf, token):

    payload = {"workflow": wf}
    payload["workflow"].pop('extVersion')
    payload["workflow"].pop('includedWorkflows')

    url = 'https://api.automa.site/v1/me/workflows/host'
    cookies = {
        'sb-access-token': token,
    }
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0',
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.5',
        # 'Accept-Encoding': 'gzip, deflate, br',
        # Already added when you pass json=
        # 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Origin': 'moz-extension://448c82e1-c47b-4f22-adfd-b0bfe38b14a4',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        # Requests doesn't support trailers
        # 'TE': 'trailers',
    }
    
    response = requests.post(url=url, cookies=cookies, headers=headers, json=payload)

    responseJson = response.json()
    # returns
    # id: ...
    # hostId: ...

    return responseJson


async def retrieve_hosted_id(controller_entry):

    # TODO Check if host id already exists
    exists = False

    if exists:
        return True
    else:
        wf = controller_entry.automation.definition

        # TODO Check if we have already a session and don't need a new token
        # How to define a global variable?
        # -> Write in db to make it accassible for other workers
        Session = False

        if not Session:
            Session = await retrieve_session()

        SessionDict = json.loads(Session)
        token = SessionDict["currentSession"]["access_token"]

        response = await publish_wf_autmoma(wf=wf, token=token)

        hostIdDict = {"hostId": response["hostId"]}

        return hostIdDict
