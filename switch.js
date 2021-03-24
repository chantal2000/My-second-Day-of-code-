function getGrade(marks){
     marks=prompt("Enter your marks:")
    switch(true){
        case marks>=80:
            console.log("A");
            break;
            case marks>=70:
                console.log("B");
                break;
                case marks>=60:
                console.log("C");
                break;
                default:
                    console.log("D");
    };
 
}getGrade();