
const date = new Date();


const getDay = () => {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return  date.toLocaleDateString("en-us", options)
}


const getDate = () => {
    const options = {
        weekday: "long"
    }
    return date.toLocaleDateString("en-us", options)
}

module.exports = { getDay,getDate };
