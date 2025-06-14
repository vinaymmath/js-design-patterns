function attachEventToClass(className, eventType, handler){
    const classItems = document.querySelectorAll(`.${className}`);
    classItems.forEach(classItem => {
        classItem.addEventListener(eventType, handler);
    });
}

function attachEventToId(id, eventType, handler) {
    const element = document.getElementById(id);
    if(element){
        element.addEventListener(eventType, handler);
    } else {
        console.log(`Element with Id: ${id} was not found`);
    }
}


export default {
    attachEventToClass,
    attachEventToId
}