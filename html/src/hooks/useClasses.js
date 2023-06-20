export default function useClasses(initialValue, className) {

    const rootClasses = [initialValue]

    if (className) {
        rootClasses.push(className)
    }

    const classes = rootClasses.join(' ')

    return classes
}