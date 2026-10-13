class ApiError extends Error{
    constructor(
    statusCode,
    message="something went wrong",
    errors=[],
    statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=messagethis.sucess=false;
        this.errors=errors

        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}    


export{ApiError}