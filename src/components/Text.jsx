import '../css/text.css'

export const TitleText = (props) => {
    return <p className="title-text text">{props.children}</p>
}

export const ContentText = (props) => {
    return <p className={"content-text text"}>{props.children}</p>
}

export const ContentCenterText = (props) => {
    return <p className="content-text text align-text-center">{props.children}</p>
}

export const ContentRightText = (props) => {
    return <p className="content-text text align-text-right">{props.children}</p>
}

