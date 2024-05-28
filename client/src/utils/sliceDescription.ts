const sliceDescription = (description: string) => {
    const words = description.split(" ");

    let result = words.slice(0, 5).join(" ");
    if (words.length > 5) {
        result = result + "...";
    }
    return result;
};

export default sliceDescription;