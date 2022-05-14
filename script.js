// 1: Khone avale Tamame Araye Haye xArray0 Ro Chap Kone.

let xArray0 = [1, 5, [10, 2, "Amir", 4, 5], [100, 3, "Ali",[1000] ]]

// Define a for loop for xArray0

for (let i = 0; i < xArray0.length; i++) {
    
    // get the first value of  xArray0
    if ( i == 0){

        console.log(xArray0[i]);
    }

    // get the first values of level2
    else if (Array.isArray(xArray0[i])) {

        
       
        console.log(xArray0[i][0]);

       // define a for loop to get level2 values 
        for (let j = 0; j < xArray0[i].length; j++) {

            if (Array.isArray(xArray0[i][j])){
                console.log(xArray0[i][j][0]);
            }
    }
}
}