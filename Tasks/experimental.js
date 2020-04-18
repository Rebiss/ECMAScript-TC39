const data = () => {
    // const currentTime = new Date().getTime();
    // const startTime = currentTime - 1000000000;
    

    
    return ~~((Math.max( 1, 2**((currentTime - startTime/ 1000) / 8)  )) * 10000 ) / 10000;
    // return a
}

const odd = () => {
    // const currentTime = new Date().getTime();
    // const startTime = currentTime - 1000000000;
    const a =  Math.max( 1, Math.pow( 2, ((100 / 1000) / 8 ) ) ); 
    return a.toFixed(4)
    // return a
}

//new
get odd() {
    const currentTime = new Date().getTime();
    const startTime = this.round.launch_time;

    return ~~((Math.max( 1, 2**(((currentTime - startTime)/ 1000) / 8)  )) * 100 ) / 100;
}

//old
get odd() {
    const currentTime = new Date().getTime();
    const startTime = this.round.launch_time;

    return Math.max( 1, Math.pow( 2, ((currentTime - startTime) / 1000) / 8 ) ).toFixed(2);
}

