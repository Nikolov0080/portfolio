import { ReactComponent as ReactIcon } from './images/svg/react.svg'
import { ReactComponent as CssIcon } from './images/svg/css.svg'
import { ReactComponent as HtmlIcon } from './images/svg/html.svg'
import { ReactComponent as FirebaseIcon } from './images/svg/firebase.svg'
import { ReactComponent as MaterialUiIcon } from './images/svg/material-ui.svg'
import { ReactComponent as NextIcon } from './images/svg/next.svg'
import { ReactComponent as NodeIcon } from './images/svg/node.svg'
import { ReactComponent as ReduxIcon } from './images/svg/redux.svg'
import { ReactComponent as BootstrapIcon } from './images/svg/react.svg'

export const ROUTES = {
    ABOUT: "/",
    CONTACTS: "/contacts"
}

export const CHIPS_SKILLS = [
    { skill: "React", icon: <ReactIcon height={25} width={25} /> },
    { skill: "Redux", icon: <ReduxIcon height={25} width={25} /> },
    { skill: "CSS", icon: <CssIcon height={25} width={25} /> },
    { skill: "next.js", icon: <NextIcon height={25} width={25} /> },
    { skill: "node.js", icon: <NodeIcon height={25} width={25} /> },
    { skill: "HTML", icon: <HtmlIcon height={25} width={25} /> },
    { skill: "Bootstrap", icon: <BootstrapIcon height={23} width={23} /> },
    { skill: "Firebase", icon: <FirebaseIcon height={25} width={25} /> },
    { skill: "Material UI", icon: <MaterialUiIcon height={25} width={25} /> }
]

export const CERTIFICATES = [
    {
        title: "React JS",
        imageURL: "https://res.cloudinary.com/dky3tezac/image/upload/v1631404225/portfolio%20images/react-js_gbsvaw.png",
        link: "https://softuni.bg/certificates/details/105807/77e323e6"
    },
    {
        title: "JS Back-End",
        imageURL: "https://res.cloudinary.com/dky3tezac/image/upload/v1631404221/portfolio%20images/js-back-end_u21zx4.png",
        link: "https://softuni.bg/certificates/details/84392/ab5a04b0"
    },
    {
        title: "Diploma", imageURL:
            "https://res.cloudinary.com/dky3tezac/image/upload/v1631404223/portfolio%20images/diploma_hjkcsw.png",
        link: "https://softuni.bg/certificates/details/107005/1e11171f"
    },
]

export const EMAIL_API = "https://api.emailjs.com/api/v1.0/email/send";