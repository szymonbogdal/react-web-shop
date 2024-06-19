function shortenText(text, length){
    if(text.length > length){
        text = text.substring(0, length) + "...";
    }
    return text;
}

export default shortenText;