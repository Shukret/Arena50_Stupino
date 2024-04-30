function showError(msg)
{
    $.toast({
        text: msg,
        position: 'top-right',
        bgColor: '#d5684f',
        loader: false
    });
}

function showSuccess(msg)
{
    $.toast({
        text: msg,
        position: 'top-right',
        bgColor: '#2cb200',
        loader: false
    });
}

function showWarning(msg)
{

}