import {useSpring, animated} from '@react-spring/web'
import {useDrag} from '@use-gesture/react'

const DragDiv = (props) => {
    const [{x, y}, api] = useSpring(() => ({x:0}))
    const bind = useDrag(({down, movement: [mx, my]}) => api.start({x:down ? mx:0, y:down ? my:0}), {axis: 'lock'})
    return <animated.div className={props.className} {...bind()} style={{x, y}}>{props.children}</animated.div>
}


export default DragDiv