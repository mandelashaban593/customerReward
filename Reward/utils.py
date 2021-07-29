
import customerReward.settings as settings
from django.contrib import messages
from django.template.loader import render_to_string

from django.template import RequestContext

def error_message(request, msgtype, data={}):
    template = settings.BASE_DIR + '/templates/error_messages.html'
    data['type'] = msgtype
    text = render_to_string(
        template, data)
    messages.error(request, text)


def success_message(request, msgtype, data={}):
    template = settings.BASE_DIR + '/templates/success_messages.html'
    data['type'] = msgtype
    text = render_to_string(
        template, data)

    messages.success(request, text)