const getCroppedImgUrl = (url: string) => {
    const idx = url.indexOf("media/") + "media/".length;
    return url.slice(0, idx) + "crop/600/400/" + url.slice(idx);
}

export default getCroppedImgUrl;