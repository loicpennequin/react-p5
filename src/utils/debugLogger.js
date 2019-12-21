export default function debugShape(message, props = {}) {
    console.groupCollapsed(message);
    Object.entries(props).forEach(([key, value]) => {
        console.log(`${key} : ${value}`);
    });
    console.groupEnd();
}
