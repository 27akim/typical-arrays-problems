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
    for (let i=0; i<array.length - 1; i++)
    {
        if(array[i] > array[i + 1])
        {
            temp = array[i + 1];
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
    for (let i=0; i<array.length - 1; i++)
    {
        if(array[i] < array[i + 1])
        {
            temp = array[i + 1];
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