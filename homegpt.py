#pip install openai
#pip install python-dotenv

import os
from dotenv import load_dotenv
from openai import OpenAI
import time
import json

def test(n):
    return("Roar " + n)

def get_normal_response(user_message, response):
    load_dotenv()
    client = OpenAI(
        api_key = os.getenv("OPENAI_API"),
    )
    thread = client.beta.threads.create(
        messages=[
            {
            "role":"user",
            "content": f"user request: {user_message}. Intel:{response}",
            }
        ]
    )
    run = client.beta.threads.runs.create(thread_id=thread.id, assistant_id=os.getenv("ASS_HOMENORM_ID"))
    # wait for run to complete
    while run.status != "completed":
        # time.sleep(1)
        run = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)
        print(f"Run Status: {run.status}")
    else:
        print("Run Completed!")
    # Get lastest message from thread
    message_response = client.beta.threads.messages.list(thread_id=thread.id)
    messages = message_response.data
    # Print the lastest message
    normal_response = messages[0].content[0].text.value
    return normal_response



def get_json(response):
    load_dotenv()
    client = OpenAI(
        api_key = os.getenv("OPENAI_API"),
    )
    thread = client.beta.threads.create(
        messages=[
            {
            "role":"user",
            "content": f"{response}",
            }
        ]
    )
    # Submit the thread to the assistant (as a new run)
    run = client.beta.threads.runs.create(thread_id=thread.id, assistant_id=os.getenv("ASS_HOMEASS_ID"))
    # wait for run to complete
    while run.status != "completed":
        # time.sleep(1)
        run = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)
        print(f"Run Status: {run.status}")
    else:
        print("Run Completed!")
    # Get lastest message from thread
    message_response = client.beta.threads.messages.list(thread_id=thread.id)
    messages = message_response.data

    # Print the lastest message
    latest_message = messages[0]
    return json.loads(latest_message.content[0].text.value)



def request(user_message):
    load_dotenv()
    client = OpenAI(
        api_key = os.getenv("OPENAI_API"),
    )
    thread = client.beta.threads.create(
        messages=[
            {
            "role":"user",
            "content": f"{user_message}",
            }
        ]
    )
    # Submit the thread to the assistant (as a new run)
    run = client.beta.threads.runs.create(thread_id=thread.id, assistant_id=os.getenv("ASS_HOME_ID"))
    # wait for run to complete
    while run.status != "completed":
        # time.sleep(1)
        run = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)
        print(f"Run Status: {run.status}")
    else:
        print("Run Completed!")
    # Get lastest message from thread
    message_response = client.beta.threads.messages.list(thread_id=thread.id)
    messages = message_response.data
    # Print the lastest message
    latest_message = messages[0].content[0].text.value
    json_format = get_json(latest_message)
    norm_response = get_normal_response(user_message, json_format)
    result_dict = {"response": norm_response, "info": json_format}
    return result_dict


# print(request("whats the cheapest house"))

# prompt= """ The cheapest house I found is located in Blacksburg, VA. Here are the details:

# - **Price**: $234,950
# - **Bedrooms**: 3
# - **Bathrooms**: 2
# - **Square Feet**: 1,456
# - **Status**: House for sale
# - **City**: Blacksburg, VA
# - **Detail URL**: [View Listing](https://www.zillow.com/homedetails/2210-Big-Falls-Rd-Blacksburg-VA-24060/94147720_zpid/)
# - ![Image](https://photos.zillowstatic.com/fp/ad972d00bb320febc7e3d6d9bb03f7ec-p_e.jpg)"""

# user_request = "whats the cheapest house"

# ex = get_json(prompt)

# print(get_normal_response(user_request,ex))



