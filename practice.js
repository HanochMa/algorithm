function debounce(fn, wait){
    let timeout = null
    return function(...args){
        timeout && clearTimeout(timeout)
        setTimeout(() => {
            fn.apply(this, args)
        }, wait);
    }
}

function debounce1(fn, wait, immediate){
    let timeout = null
    return function(){
        timeout && clearTimeout(timeout)
        if(immediate){
            let callNow = !timeout
            setTimeout(() => {
                timeout = null
            }, wait);
            if(callNow){
                fn.apply(this,arguments)
            }
        }
    }
}