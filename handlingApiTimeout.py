def hard_requests():
    from requests import Request, Session
    s = Session()
    headers = {'User-Agent': 'fake1.3.4'}
    req = Request('GET', build_uri('user/emails'), auth=('shfanzie', '**********'), headers = headers)
    prepped = req.prepare()
    print((prepped.body))
    print((prepped.headers))
    
    try:
        resp = s.send(prepped, timeout=1)
        resp.raise_for_status()
    except exceptions.Timeout as e:
        print((e.message))
    except exceptions.HTTPError as e:
        print((e.message))
    else:
        print((resp.status_code))
        print((resp.reason))
        print((resp.request.headers))
        print((resp.text)) 