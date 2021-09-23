import { EMAIL_API } from "./app/static/constants"

export default async function addMessage(email, name, message) {

    const data = JSON.stringify({
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_TEMPLATE_ID,
        user_id: process.env.REACT_APP_USER_ID,
        template_params: {
            "from_name": name,
            "from_email": email,
            "message": message
        }
    })

    const { status, statusText } = await fetch(EMAIL_API, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })


    return { status, statusText }
}