export const registerToDB = (input:string , dbCLient : {name:string} | null = null  ) : string => {

    if(!dbCLient) throw new Error("Cannot connect to database");
    
    return "Sent to database " + input;
}

