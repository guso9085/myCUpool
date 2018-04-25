const getParameter = (param)=>{
    var query = window.location.search;
    var iLen = param.length;
    var iStart = query.indexOf(param);
    if (iStart == -1)
        return "";
    iStart += iLen + 1;
    var iEnd = query.indexOf("&", iStart);

    if (iEnd == -1)
        return query.substring(iStart);
    return query.substring(iStart, iEnd);
}
export default getParameter;