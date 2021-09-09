import { ReactComponent as ReactIcon } from '../app/images/svg/react.svg'
import { ReactComponent as CssIcon } from '../app/images/svg/css.svg'
import { ReactComponent as HtmlIcon } from '../app/images/svg/html.svg'
import { ReactComponent as FirebaseIcon } from '../app/images/svg/firebase.svg'
import { ReactComponent as MaterialUiIcon } from '../app/images/svg/material-ui.svg'
import { ReactComponent as NextIcon } from '../app/images/svg/next.svg'
import { ReactComponent as NodeIcon } from '../app/images/svg/node.svg'
import { ReactComponent as ReduxIcon } from '../app/images/svg/redux.svg'
import { ReactComponent as BootstrapIcon } from '../app/images/svg/bootstrap.svg'

export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
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