import React, {useState} from 'react';
import cl from "./Select.module.css";
import useClasses from "../../../hooks/useClasses";

const Select = ({className, options, defaultValue, value, onChange, name, ...props}) => {

    const [selected, setSelected] = useState(defaultValue)
    const [expanded, setExpanded] = useState([cl.container])
    const [headerClasses, setHeaderClasses] = useState([cl.header])

    const classes = useClasses(cl.select, className)

    const expanding = () => {
        if(expanded.length === 1) {
            return (
                setExpanded([...expanded, cl.expanded]),
                setHeaderClasses([...headerClasses, cl.focusHeader])
            )
        }
        setHeaderClasses(headerClasses.slice(0,1))
        setExpanded(expanded.slice(0,1))
    }

    const selectingItemClass = (option) => {
        console.log(option)
        if(selected.value === option.value) {
            return `${cl.item} ${cl.selected}`
        }

        return cl.item
    }

    const selectingItem = (option) => {
        setSelected(option);
        onChange(option.value)
    }

    return (
        <div className={classes} {...props}>
            <div className={headerClasses.join(' ')} onClick={expanding}>
                {
                    !selected.name && (
                        <span>{name}</span>
                    )
                }
                <span>{selected.name}</span>
            </div>
            <div className={expanded.join(' ')}>
                {
                    options.map((option) => (
                        <div
                            key={option.value}
                            className={selectingItemClass(option)}
                            onClick={() => selectingItem(option)}
                        >
                            {option.name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Select;