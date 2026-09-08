import urllib.request, re

req = urllib.request.Request('https://pixabay.com/videos/search/flower%20bloom/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    urls = re.findall(r'https://cdn\.pixabay\.com/video/[^\s"\'\>]+', html)
    print(urls[0] if urls else 'none')
except Exception as e:
    print(e)
