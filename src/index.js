exports.min = function min(array)
{
    let temp = 0;
    if(array == undefined || array.length == 0)
    {
        return temp;
    }
    else
    {
        temp = array[0];
    }
    for (let i=1; i<array.length; i++)
    {
        if(temp > array[i])
        {
            temp = array[i];
        }
    }
    return temp;
}

exports.max = function max(array)
{
    let temp = 0;
    if(array == undefined || array.length == 0)
    {
        return temp;
    }
    else
    {
        temp = array[0];
    }
    for (let i=1; i<array.length; i++)
    {
        if(temp < array[i])
        {
            temp = array[i];
        }
    }
    return temp;
}

exports.avg = function avg(array)
{
    let sum = 0;
    if(array == undefined || array.length == 0)
    {
        return sum;
    }
    for (let i=0; i<array.length; i++)
    {
        sum += array[i];
    }
    return sum/array.length;
}