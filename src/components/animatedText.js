import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'

const AnimatedText = (props) => {
    const [delay] = useState(props.delay || 0)
    const [animationStarted, setAnmiationStarted] = useState(false)
    const [showCursor, setShowCursor] = useState(false)
    const [text, setText] = useState('')

    useEffect(() => {
        const animateText = async () => {
            await blinkCursor()
            await writeText()
            await blinkCursor()
        }
        const blinkCursor = async () => {
            let cursorInterval = setInterval(() => {
                setShowCursor(prevShowCursor => !prevShowCursor)
            }, 265)
            return new Promise(resolve => {
                setTimeout(() => {
                    clearInterval(cursorInterval)
                    resolve()
                }, 2000)
            })
        }
    
        const writeText = async () => {
            setShowCursor(true)
            return new Promise(resolve => {
                let textInterval = setInterval(() => {
                    setText(oldText => {
                        if (oldText + props.textToWrite.charAt(oldText.length) === props.textToWrite) {
                            clearInterval(textInterval)
                            resolve()
                        }
                        return oldText + props.textToWrite.charAt(oldText.length)
                    })
                }, 265)
            })
        }

        if (!animationStarted) {
            setAnmiationStarted(true)
            setTimeout(() => animateText(), delay)
        }
    }, [animationStarted, delay, props.textToWrite])

    return (
        <Typography 
            style={props.style}
            variant={props.variant}
            component={props.component}
        >> {text}{showCursor ? '_' : ' '}</Typography>
    )
}

export default AnimatedText