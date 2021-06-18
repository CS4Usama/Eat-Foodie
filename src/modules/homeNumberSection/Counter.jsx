import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = (props) => {
    const [focus, setFocus] = React.useState(false);
    return (
        <CountUp start={focus ? 0 : null} end={props.end} duration={props.duration} redraw={false}>
        {({ countUpRef }) => {
            return (
                <VisibilitySensor
                    active={!focus}
                    onChange={isVisible => {
                    if (isVisible) {
                        setFocus(true);
                    } 
                    }}
                    delayedCall
                >
                <span ref={countUpRef} />
                </VisibilitySensor>
            );
        }}
        </CountUp>
    );
}

export default Counter;