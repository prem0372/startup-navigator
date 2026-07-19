from groq import Groq

from app.core.config import settings

client = Groq(
    api_key=settings.GROQ_API_KEY
)


def ask_ai(prompt: str):

    completion = client.chat.completions.create(
        model=settings.MODEL_NAME,
        messages=[
            {
                "role": "system",
                "content": (
                    "You are an AI Startup Mentor. "
                    "Give clear, structured and practical advice."
                ),
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
        temperature=0.7,
        max_tokens=800,
    )

    return completion.choices[0].message.content