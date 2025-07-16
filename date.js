export function getDate() {
    const today  = new Date();
    const options = {
        weekday: 'long', 
        day: 'numeric',
        year: 'numeric',
        month: 'long',
    };
    return today.toLocaleDateString("en-US", options);
}